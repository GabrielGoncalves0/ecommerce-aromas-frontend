"use client"
import { Input, Button } from "@/components/ui";
import { UserPlus } from "lucide-react";

export default function CadastroPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-3 mb-2">
            <UserPlus className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-center mb-1 text-primary">Criar conta</h1>
          <p className="text-center text-muted-foreground text-sm">Cadastre-se para aproveitar todos os benefícios.</p>
        </div>
        <form className="flex flex-col gap-4 w-full">
          <Input type="text" placeholder="Nome completo" required />
          <Input type="email" placeholder="Email" required />
          <Input type="password" placeholder="Senha" required />
          <Button type="submit" className="w-full mt-2 h-11 text-base font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md hover:from-blue-600 hover:to-purple-700 transition-all">Cadastrar</Button>
        </form>
        <div className="text-center mt-6">
          <a href="/login" className="text-xs text-blue-600 hover:underline font-medium transition-colors">Já tem conta? Entrar</a>
        </div>
      </div>
    </div>
  );
}
