import { loginUser } from '@/lib/authService';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Faltan credenciales de email o contraseña.' }, { status: 400 });
    }

    const user = await loginUser(email, password);

    if (user) {
      // En un caso real, aquí podrías generar un token de sesión (JWT) y enviarlo
      // Por ahora, solo indicamos éxito en el login
      return NextResponse.json({ message: 'Inicio de sesión exitoso.', user: { email: user.email, _id: user._id } });
    } else {
      return NextResponse.json({ error: 'Credenciales inválidas.' }, { status: 401 });
    }
  } catch (error: any) {
    console.error('Error en el login:', error);
    return NextResponse.json({ error: 'Error interno del servidor al iniciar sesión.' }, { status: 500 });
  }
}