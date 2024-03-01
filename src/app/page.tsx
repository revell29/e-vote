/* eslint-disable @next/next/no-img-element */
import CardCandidate, { Candidate } from '@/components/card-candidate';
import { getCandidate } from '@/lib/fetcher';
import * as React from 'react';

async function IndexPage() {
  const candidates = await getCandidate();

  return (
    <div className='container bg-white py-6'>
      <div className='flex flex-col space-y-10'>
        {candidates.map((candidate) => (
          <CardCandidate
            key={candidate.candidateId}
            candidate={candidate as Candidate}
          />
        ))}
      </div>
    </div>
  );
}

export default IndexPage;
