import { AuthForm } from "@/components/auth-form";
import { hasSupabaseEnv } from "@/lib/env";

export default function AuthPage() {
  return <AuthForm enabled={hasSupabaseEnv()} />;
}
