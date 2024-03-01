import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import React from 'react';

export default function NotFound() {
  return (
    <main>
      <section className='flex min-h-screen w-full items-center '>
        <div className='layout mx-auto flex max-w-2xl flex-col items-center text-center text-black'>
          <ExclamationTriangleIcon className='h-16 w-16' />
          <h1 className='mt-8 text-4xl md:text-4xl'>Page Not Found</h1>
        </div>
      </section>
    </main>
  );
}
