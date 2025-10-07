"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/icons/logo";
import { Checkbox } from "@/components/ui/checkbox";

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-primary via-blue-500 to-blue-800">
      <div className="relative z-10 mx-auto w-full max-w-md p-4">
        <div className="grid gap-2 text-center mb-6">
          <div className="flex justify-center mb-4">
            <Logo />
          </div>
          <h1 className="text-3xl font-bold font-headline text-primary-foreground dark:text-white">Gestión Impositiva</h1>
          <p className="text-balance text-muted-foreground dark:text-gray-200">
            Simplificación y monitoreo en tiempo real de declaraciones impositivas.
          </p>
        </div>
        <Card className="bg-background/80 backdrop-blur-sm border-white/20">
          <CardHeader>
            <CardTitle className="text-2xl">Iniciar Sesión</CardTitle>
            <CardDescription>
              Ingresá tus credenciales para acceder a tu cuenta.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Nombre de usuario o dirección de correo electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="usuario"
                  required
                  defaultValue="taylor.smith@example.com"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input id="password" type="password" required defaultValue="••••••••" />
              </div>
               <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm font-normal">Recuérdame</Label>
              </div>
              <Button type="submit" className="w-full" asChild>
                <Link href="/dashboard">Acceder</Link>
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              <Link
                href="#"
                className="underline"
              >
                ← Volver a TaxWise
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
