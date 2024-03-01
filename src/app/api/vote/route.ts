/* 
    This was the migration script we used to migrate from
    our old database to the new Vercel Postgres database.
    It's not needed anymore, but I'm keeping it here for
    posterity.
*/

import { findUserHasVoted, findUserNis, voteCandidate } from '@/lib/fetcher';
import { NextResponse } from 'next/server';
// import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();

  const user = await findUserNis(body.nis);
  if (!user) {
    return NextResponse.json(
      { error: 'NIS anda tidak terdaftar' },
      { status: 404 }
    );
  }

  const hasVoted = await findUserHasVoted(user.userId);
  if (hasVoted) {
    return NextResponse.json(
      { error: 'Anda sudah melakukan voting' },
      { status: 400 }
    );
  }

  await voteCandidate({
    nis: body.nis,
    candidate_id: body.candidate_id,
  });

  return NextResponse.json({ response: 'ok' });
}
