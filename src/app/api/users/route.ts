import { NextResponse } from 'next/server';
import { getUsers, createUser } from '@/lib/crud';

export async function GET() {
  try {
    const users = await getUsers();
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.error();
  }
}

export async function POST(req: Request) {
  try {
    const { name, email, username, password } = await req.json();
    const newUser = await createUser(name, email, username, password);
    return NextResponse.json(newUser);
  } catch (error) {
    return NextResponse.error();
  }
}
