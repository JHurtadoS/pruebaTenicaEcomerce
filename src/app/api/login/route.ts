import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { username, password } = await request.json();

  // Simulated authentication
  if (username === 'usuario@ejemplo.com' && password === 'contraseña123') {
    return NextResponse.json({ token: 'token_simulado_1234567890' });
  }
  return NextResponse.json({ error: 'Credenciales inválidas' }, { status: 401 });
}
