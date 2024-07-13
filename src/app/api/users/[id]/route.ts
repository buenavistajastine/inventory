import { NextResponse } from 'next/server';
import { getUserById, updateUser, deleteUser } from '@/lib/crud';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const user = await getUserById(parseInt(params.id));
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.error();
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const { name, email, username, password } = await req.json();
    const updatedUser = await updateUser(parseInt(params.id), name, email, username, password);
    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.error();
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const deletedUser = await deleteUser(parseInt(params.id));
    return NextResponse.json(deletedUser);
  } catch (error) {
    return NextResponse.error();
  }
}
