import { NextResponse } from 'next/server';
import { prisma } from 'src/lib/db/prisma';

// Opt out of caching; every request should send a new event
export const dynamic = 'force-dynamic';

// Create a simple async Next.js API route handler
export async function GET() {
  // Fetch all reports directly from the database
  const reports = await prisma.report.findMany();

  return NextResponse.json(reports);
}
