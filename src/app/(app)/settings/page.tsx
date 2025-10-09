"use client";
import { getAuthenticatedUser } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { PlusCircle } from "lucide-react";

const users = [
    { id: 1, name: "Taylor Smith", email: "taylor.smith@example.com", role: "soporte" },
    { id: 2, name: "Alex Doe", email: "alex.doe@example.com", role: "intermedio" },
    { id: 3, name: "Sam Jones", email: "sam.jones@example.com", role: "inicial" },
];

const taxRates = [
    { id: 'iva_general', name: 'IVA General', rate: '21.00%' },
    { id: 'iva_reducido', name: 'IVA Reducido', rate: '10.50%' },
    { id: 'iibb_caba', name: 'IIBB CABA', rate: '3.50%' },
];

export default function SettingsPage() {
  const user = getAuthenticatedUser();

  if (user.role !== "soporte") {
    return (
      <div className="flex h-[calc(100vh-200px)] flex-col items-center justify-center p-8 text-center">
        <h2 className="text-2xl font-bold font-headline">Acceso Denegado</h2>
        <p className="mt-2 text-muted-foreground">
          No tenés los permisos necesarios para ver esta página.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 w-full">
      <h1 className="text-3xl font-bold font-headline">Configuración</h1>
      <Tabs defaultValue="users">
        <TabsList>
          <TabsTrigger value="users">Gestión de Usuarios</TabsTrigger>
          <TabsTrigger value="rates">Tasas de Impuestos</TabsTrigger>
          <TabsTrigger value="logs">Registros de Actividad</TabsTrigger>
        </TabsList>
        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle>Usuarios</CardTitle>
              <CardDescription>Gestioná tu equipo y sus roles.</CardDescription>
              <div className="flex justify-end">
                <Button size="sm"><PlusCircle className="mr-2 h-4 w-4" /> Agregar Usuario</Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Rol</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((u) => (
                    <TableRow key={u.id}>
                      <TableCell className="font-medium">{u.name}</TableCell>
                      <TableCell>{u.email}</TableCell>
                      <TableCell><Badge variant="secondary">{u.role}</Badge></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="rates">
          <Card>
            <CardHeader>
              <CardTitle>Tasas de Impuestos</CardTitle>
              <CardDescription>Configurá las tasas de impuestos de la aplicación.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {taxRates.map(rate => (
                <div key={rate.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                        <p className="font-medium">{rate.name}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Input defaultValue={rate.rate} className="w-24 text-right" />
                        <Button variant="outline">Guardar</Button>
                    </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="logs">
           <Card>
            <CardHeader>
              <CardTitle>Registros de Actividad</CardTitle>
              <CardDescription>Revisá la actividad reciente en el sistema.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Los registros de actividad se mostrarán aquí.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
