
"use client";

import Link from "next/link";
import Image from "next/image";
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
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2 xl:min-h-screen">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
             <div className="flex justify-center mb-4">
               <Logo />
             </div>
            <h1 className="text-3xl font-bold font-headline">Gestión Impositiva</h1>
            <p className="text-balance text-muted-foreground">
              Simplificación y monitoreo en tiempo real de declaraciones impositivas.
            </p>
          </div>
          <Card>
            <CardHeader>
                <CardTitle className="text-2xl">Iniciar Sesión</CardTitle>
                <CardDescription>
                    Ingresá tu email para acceder a tu cuenta.
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
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="https://storage.googleapis.com/project-spark-b2489c45/taxwise-bg.jpg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          data-ai-hint="accounting illustration"
        />
      </div>
    </div>
  );
}
