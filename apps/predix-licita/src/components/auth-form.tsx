"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, KeyRound, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

export function AuthForm({ enabled }: { enabled: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const supabase = createSupabaseBrowserClient();
    if (!supabase) return;

    setPending(true);
    setStatus(null);
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    setPending(false);
    setStatus(
      error
        ? "Não foi possível enviar o link. Confira o e-mail."
        : "Link seguro enviado. Verifique sua caixa de entrada.",
    );
  };

  return (
    <main className="grid min-h-screen place-items-center bg-background px-4">
      <Card className="w-full max-w-md border-white/10 bg-card/80 shadow-2xl shadow-cyan-950/20 backdrop-blur">
        <CardHeader className="space-y-3">
          <Link
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            href="/"
          >
            <ArrowLeft className="size-4" />
            Voltar ao radar
          </Link>
          <div className="grid size-11 place-items-center rounded-xl bg-cyan-400/10 text-cyan-300">
            <KeyRound className="size-5" />
          </div>
          <CardTitle className="text-2xl">Entrar no Predix Licita</CardTitle>
          <p className="text-sm leading-6 text-muted-foreground">
            Receba um link de acesso por e-mail. Senha não é necessária.
          </p>
        </CardHeader>
        <CardContent>
          {enabled ? (
            <form className="space-y-4" onSubmit={submit}>
              <label className="block space-y-2 text-sm">
                <span>E-mail</span>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 size-4 text-muted-foreground" />
                  <Input
                    autoComplete="email"
                    className="pl-9"
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="voce@empresa.com.br"
                    required
                    type="email"
                    value={email}
                  />
                </div>
              </label>
              <Button className="w-full" disabled={pending} type="submit">
                {pending ? "Enviando..." : "Enviar link seguro"}
              </Button>
              {status && (
                <p aria-live="polite" className="text-sm text-muted-foreground">
                  {status}
                </p>
              )}
            </form>
          ) : (
            <p className="rounded-lg border border-amber-300/20 bg-amber-300/5 p-4 text-sm text-amber-100">
              O acesso será liberado assim que o projeto Supabase for
              provisionado. A busca pública continua disponível.
            </p>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
