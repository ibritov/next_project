import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }) {
  const { searchParams } = new URL(request.url);
  console.log(searchParams);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`,
  );
  const data = await res.json();
  return NextResponse.json({
    message: 'Welcome to User',
    data: data,
  });
}
