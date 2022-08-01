import Link from 'next/link';
import React from 'react';
import Map from '../components/Map';
import Timeline from '../components/Timeline';

function history() {
  return (
    <div>
      <div className='flex h-[35rem] w-full min-w-[30rem] items-center bg-history-img bg-cover bg-center'>
        <h2 className='mx-auto w-fit bg-[#1f1f1f] p-2 text-center text-xl text-white md:text-2xl lg:text-4xl'>
          {`The History of Merrill's Marauders`}
        </h2>
      </div>
      <div className='flex min-w-[30rem] flex-col justify-center'>
        <div className='mx-auto h-fit w-[80vw] min-w-[30rem] p-10'>
          <div id='map' className='relative bg-postcard-img p-2 drop-shadow-lg'>
            <Map />
          </div>
        </div>
        <div className='sticky top-1 z-20 mx-auto w-fit bg-stone-800 p-2 text-white'>
          <ul className='text-left'>
            <a href='#map'>
              <li>Top / Map</li>
            </a>
          </ul>
        </div>
        <div className='mx-auto p-10'>
          <Timeline />
        </div>
        <span className='text-center text-lg '>
          <p className='m-2'>Stay Tuned, More to Follow.</p>
          <a href='#header' className='text-blue-800 underline'>
            Return to Top
          </a>
        </span>
      </div>
    </div>
  );
}

export default history;
