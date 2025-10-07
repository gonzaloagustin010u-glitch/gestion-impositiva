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
import { Checkbox } from "@/components/ui/checkbox";

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-blue-400 to-black">
      <div className="relative z-10 mx-auto w-full max-w-md p-4">
        <div className="grid gap-2 text-center mb-6">
          
          <h1 className="text-3xl font-bold font-headline text-primary-foreground dark:text-white">Gestión Impositiva</h1>
          <p className="text-balance text-white">
            Simplificación y monitoreo en tiempo real de declaraciones impositivas.
          </p>
        </div>
        <Card className="bg-white/10 backdrop-blur-sm border-white/20">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Iniciar Sesión</CardTitle>
            <CardDescription className="text-white">
              Ingresá tus credenciales para acceder a tu cuenta.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-white">Nombre de usuario o dirección de correo electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="usuario"
                  required
                  defaultValue="taylor.smith@example.com"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password" className="text-white">Contraseña</Label>
                <Input id="password" type="password" required defaultValue="••••••••" className="bg-white/20 border-white/30 text-white placeholder:text-white/70" />
              </div>
               <div className="flex items-center space-x-2">
                <Checkbox id="remember" className="border-white" />
                <Label htmlFor="remember" className="text-sm font-normal text-white">Recuérdame</Label>
              </div>
              <Button type="submit" className="w-full" asChild>
                <Link href="/dashboard">Acceder</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
