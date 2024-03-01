/* eslint-disable @next/next/no-img-element */
'use client';

import ModalCandidate from '@/components/modal-candidate';
import { Button } from '@/components/ui/button';
import useModal from '@/hooks/use-modal';
import Image from 'next/image';

export type Candidate = {
  candidateId: number;
  ketos: string;
  waketos: string;
  image_ketos: string;
  image_waketos: string;
  description: string;
  tagline?: string;
};

type CardCandidateProps = {
  candidate: Candidate;
};

export default function CardCandidate({ candidate }: CardCandidateProps) {
  const modalDetail = useModal<Candidate>();

  return (
    <>
      <div key={candidate.candidateId}>
        <div className='flex items-center justify-center gap-5'>
          <div className='flex flex-col items-center justify-center text-center'>
            <Image
              src={candidate.image_ketos}
              alt={candidate.ketos}
              height={250}
              width={250}
              className='rounded-full object-cover'
            />
            <div className='mt-10 flex gap-5'>
              <div className=''>
                <h1>Ketua</h1>
                <p className='text-sm font-bold lg:text-xl'>
                  {candidate.ketos}
                </p>
              </div>
              <div className=''>
                <h1>Wakil Ketua</h1>
                <p className='text-sm font-bold lg:text-xl'>
                  {candidate.waketos}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center py-10'>
          <p className=' text-center font-semibold'>{candidate.tagline}</p>
          <Button
            className='mx-auto mt-5'
            onClick={() => modalDetail.open(candidate)}
          >
            Lihat Detail
          </Button>
        </div>
      </div>
      <ModalCandidate
        data={modalDetail.data as Candidate}
        openModal={modalDetail.isShow}
        setOpenModal={(open) => !open && modalDetail.setIsShow(false)}
        title='Detail'
      />
    </>
  );
}
