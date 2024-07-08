import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return NextResponse.json({
    message: 'Welcome to the API',
    data: data,
  });
}

export async function POST(request: Request) {
  const data = await request.json();
  console.log(data);
  return NextResponse.json({
    message: 'Add data to the API',
  });
}

export function PUT() {
  return NextResponse.json({
    message: 'UPDATE data to the API',
  });
}

export function DELETE() {
  return NextResponse.json({
    message: 'deleting data from the API',
  });
}
