import prisma from '@/lib/prisma';
import { unstable_cache } from 'next/cache';

export async function getCandidate() {
  return await unstable_cache(
    async () => {
      return prisma.candidate.findMany();
    },
    ['candidates'],
    {
      revalidate: 900,
      tags: [`candidates`],
    }
  )();
}

export async function findUserNis(nis: string) {
  return await prisma.user.findFirst({
    where: {
      nis,
    },
  });
}

export async function voteCandidate({
  nis,
  candidate_id,
}: {
  nis: string;
  candidate_id: number;
}) {
  const user = await prisma.user.findFirst({
    where: {
      nis,
    },
  });

  if (!user) {
    return null;
  }

  return await prisma.event.create({
    data: {
      userId: user.userId,
      candidateId: candidate_id,
    },
  });
}

export async function findUserHasVoted(userId: number) {
  return await prisma.event.findFirst({
    where: {
      userId,
    },
  });
}
