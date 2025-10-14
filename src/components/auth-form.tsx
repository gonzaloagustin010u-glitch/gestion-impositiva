"use client";

import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";

export function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        setEmail("");
        setPassword("");
        // Optionally, redirect to login tab or directly log in
      } else {
        setMessage(data.error || "Error al registrarse.");
      }
    } catch (error: any) {
      setMessage(error.message || "Error de red.");
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        router.push("/dashboard"); // Redirigir al dashboard tras login exitoso
      } else {
        setMessage(data.error || "Error al iniciar sesión.");
      }
    } catch (error: any) {
      setMessage(error.message || "Error de red.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Iniciar Sesión</TabsTrigger>
          <TabsTrigger value="register">Registrarse</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Iniciar Sesión</CardTitle>
              <CardDescription>
                Ingresa tu correo electrónico y contraseña para acceder.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <form onSubmit={handleLogin}>
                <div className="space-y-1">
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="correo@ejemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-1 mt-4">
                  <Label htmlFor="password">Contraseña</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {message && (
                  <p className="text-sm text-red-500 mt-4">{message}</p>
                )}
                <Button type="submit" className="w-full mt-6">
                  Iniciar Sesión
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="register">
          <Card>
            <CardHeader>
              <CardTitle>Registrarse</CardTitle>
              <CardDescription>
                Crea una nueva cuenta para empezar.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <form onSubmit={handleRegister}>
                <div className="space-y-1">
                  <Label htmlFor="email-register">Correo Electrónico</Label>
                  <Input
                    id="email-register"
                    type="email"
                    placeholder="correo@ejemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-1 mt-4">
                  <Label htmlFor="password-register">Contraseña</Label>
                  <Input
                    id="password-register"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {message && (
                  <p className="text-sm text-red-500 mt-4">{message}</p>
                )}
                <Button type="submit" className="w-full mt-6">
                  Registrarse
                </Button>
              </form>
            </CardContent>
            <CardFooter>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}