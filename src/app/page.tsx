"use client";

import { AuthForm } from "@/components/auth-form";

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-blue-400 to-black">
      <div className="relative z-10 mx-auto w-full max-w-md p-4">
        <div className="grid gap-2 text-center mb-6">
          <h1 className="text-3xl font-bold font-headline text-primary-foreground dark:text-white">Gestión Impositiva</h1>
          <p className="text-balance text-white">
            Simplificación y monitoreo en tiempo real de declaraciones impositivas.
          </p>
        </div>
        <AuthForm />
      </div>
    </div>
  );
}
