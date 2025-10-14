import { registerUser } from '@/lib/authService';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Faltan credenciales de email o contraseña.' }, { status: 400 });
    }

    const user = await registerUser(email, password);
    return NextResponse.json({ message: 'Usuario registrado exitosamente.', user: { email: user.email, _id: user._id } }, { status: 201 });
  } catch (error: any) {
    if (error.message === 'El email ya está registrado.') {
      return NextResponse.json({ error: error.message }, { status: 409 });
    }
    console.error('Error en el registro:', error);
    return NextResponse.json({ error: 'Error interno del servidor al registrar el usuario.' }, { status: 500 });
  }
}