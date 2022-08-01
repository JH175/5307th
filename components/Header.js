import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <div
      id='header'
      className='md:min-h-28 flex min-w-[30rem] flex-col items-center justify-between gap-5 p-10 md:flex-row'
    >
      <div className='p-2'>
        <h1 className='text-center text-6xl'>5307th</h1>
        <h2 className='mt-2 text-center text-3xl italic'>{`Merrill's Marauders`}</h2>
      </div>
      <div className='flex justify-center'>
        <ul className='flex flex-col gap-5 text-center text-xl font-semibold md:flex-row'>
          <li className='p-1 duration-1000 hover:scale-110'>
            <Link href='/'>Home</Link>
          </li>
          <li className='p-1 duration-1000 hover:scale-110'>
            <Link href='/history'>History</Link>
          </li>
          <li className='p-1 duration-1000 hover:scale-110'>
            <Link href='/resources'>Resources</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
