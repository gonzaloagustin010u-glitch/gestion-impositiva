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

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="mx-auto max-w-sm">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
             <Logo />
          </div>
          <CardTitle className="text-2xl font-headline">Gestión Impositiva</CardTitle>
          <CardDescription>
            Ingresá tu email para iniciar sesión en tu cuenta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@ejemplo.com"
                required
                defaultValue="taylor.smith@example.com"
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Contraseña</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <Input id="password" type="password" required defaultValue="••••••••" />
            </div>
            <Button type="submit" className="w-full" asChild>
              <Link href="/dashboard">Iniciar Sesión</Link>
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            ¿No tenés una cuenta?{" "}
            <Link href="#" className="underline">
              Registrate
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
