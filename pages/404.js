import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Mapcheck from '../assets/mapcheck.jpg';

function error() {
  return (
    <div className='flex flex-col justify-center gap-5 text-center'>
      <h1 className='text-4xl'>404 Error</h1>
      <h2 className='text-lg font-bold'>
        Hold up there! Let{`'`}s get a map check.
      </h2>
      <div className='mx-auto w-[30rem] -rotate-2 drop-shadow-xl'>
        <Image src={Mapcheck} alt='' />
      </div>
      <h2 className='text-lg font-bold'>No such page exists.</h2>
      <Link href='/'>
        <a className='font-bold text-blue-600'>Return Home</a>
      </Link>
    </div>
  );
}

export default error;
