"use client";

import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import {
  DefaultChatTransport,
  isToolOrDynamicToolUIPart,
  type UIMessage,
} from "ai";
import { ArrowUp, Bot, LoaderCircle, Sparkles, Square } from "lucide-react";

import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import {
  Message,
  MessageContent,
  MessageResponse,
} from "@/components/ai-elements/message";
import {
  Tool,
  ToolContent,
  ToolHeader,
  ToolInput,
  ToolOutput,
} from "@/components/ai-elements/tool";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const transport = new DefaultChatTransport({ api: "/api/chat" });

const QUICK_PROMPTS = [
  "Busque oportunidades de desenvolvimento de software abertas",
  "Encontre contratações de IA e automação em Pernambuco",
  "Analise oportunidades de dados com prazo confortável",
];

function ToolPartView({
  part,
}: {
  part: Extract<
    UIMessage["parts"][number],
    { type: `tool-${string}` | "dynamic-tool" }
  >;
}) {
  const headerProps =
    part.type === "dynamic-tool"
      ? {
          type: part.type,
          state: part.state,
          toolName: part.toolName,
        }
      : { type: part.type, state: part.state };

  return (
    <Tool defaultOpen={part.state === "output-error"}>
      <ToolHeader {...headerProps} />
      <ToolContent>
        <ToolInput input={part.input} />
        {part.state === "output-available" && (
          <ToolOutput errorText={undefined} output={part.output} />
        )}
        {part.state === "output-error" && (
          <ToolOutput errorText={part.errorText} output={undefined} />
        )}
      </ToolContent>
    </Tool>
  );
}

export function AgentPanel() {
  const [input, setInput] = useState("");
  const { messages, sendMessage, status, stop, error } = useChat({ transport });
  const isWorking = status === "submitted" || status === "streaming";

  const send = (text: string) => {
    const prompt = text.trim();
    if (!prompt || isWorking) return;
    void sendMessage({ text: prompt });
    setInput("");
  };

  return (
    <section className="flex min-h-[620px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-card/55 shadow-2xl shadow-black/20">
      <header className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-xl bg-violet-400/10 text-violet-300">
            <Sparkles className="size-5" />
          </div>
          <div>
            <h2 className="font-semibold">Analista Grok</h2>
            <p className="text-xs text-muted-foreground">
              Busca, cruza evidências e explica lacunas
            </p>
          </div>
        </div>
        <Badge className="border-emerald-300/20 bg-emerald-300/10 text-emerald-200">
          <span className="mr-1 size-1.5 rounded-full bg-emerald-300" />
          Grok 4.5
        </Badge>
      </header>

      <Conversation className="min-h-0 flex-1">
        <ConversationContent className="px-5 py-6">
          {messages.length === 0 ? (
            <ConversationEmptyState>
              <div className="mx-auto flex max-w-md flex-col items-center gap-5">
                <div className="grid size-14 place-items-center rounded-2xl border border-violet-300/20 bg-violet-300/10 text-violet-200">
                  <Bot className="size-7" />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="font-semibold">O que vamos investigar?</h3>
                  <p className="text-sm leading-6 text-muted-foreground">
                    Peça uma busca por tema, local ou prazo. O agente consulta o
                    PNCP antes de responder.
                  </p>
                </div>
                <div className="grid gap-2">
                  {QUICK_PROMPTS.map((prompt) => (
                    <Button
                      className="h-auto justify-start whitespace-normal py-2.5 text-left text-xs"
                      key={prompt}
                      onClick={() => send(prompt)}
                      type="button"
                      variant="outline"
                    >
                      {prompt}
                    </Button>
                  ))}
                </div>
              </div>
            </ConversationEmptyState>
          ) : (
            messages.map((message) => (
              <Message from={message.role} key={message.id}>
                <MessageContent>
                  {message.parts.map((part, index) => {
                    if (part.type === "text") {
                      return (
                        <MessageResponse key={`${message.id}-text-${index}`}>
                          {part.text}
                        </MessageResponse>
                      );
                    }
                    if (isToolOrDynamicToolUIPart(part)) {
                      return (
                        <ToolPartView
                          key={`${message.id}-tool-${index}`}
                          part={part}
                        />
                      );
                    }
                    return null;
                  })}
                </MessageContent>
              </Message>
            ))
          )}
          {status === "submitted" && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <LoaderCircle className="size-4 animate-spin" />
              Consultando fontes oficiais…
            </div>
          )}
          {error && (
            <p className="rounded-lg border border-red-300/20 bg-red-300/5 p-3 text-sm text-red-200">
              O agente não respondeu. Verifique a credencial do AI Gateway e
              tente novamente.
            </p>
          )}
        </ConversationContent>
        <ConversationScrollButton />
      </Conversation>

      <form
        className="border-t border-white/10 bg-background/35 p-4"
        onSubmit={(event) => {
          event.preventDefault();
          send(input);
        }}
      >
        <div className="rounded-xl border border-white/10 bg-background/70 p-2 focus-within:border-violet-300/30">
          <Textarea
            aria-label="Mensagem para o agente"
            className="min-h-20 resize-none border-0 bg-transparent shadow-none focus-visible:ring-0"
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                send(input);
              }
            }}
            placeholder="Ex.: encontre pregões de software em PE e destaque os bloqueadores…"
            value={input}
          />
          <div className="flex items-center justify-between px-1 pt-1">
            <span className="text-[11px] text-muted-foreground">
              IA pode errar. Confirme no edital oficial.
            </span>
            {isWorking ? (
              <Button
                aria-label="Parar resposta"
                onClick={stop}
                size="icon-sm"
                type="button"
                variant="secondary"
              >
                <Square className="size-3.5 fill-current" />
              </Button>
            ) : (
              <Button
                aria-label="Enviar mensagem"
                disabled={!input.trim()}
                size="icon-sm"
                type="submit"
              >
                <ArrowUp className="size-4" />
              </Button>
            )}
          </div>
        </div>
      </form>
    </section>
  );
}
