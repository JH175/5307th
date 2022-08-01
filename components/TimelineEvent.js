import React from 'react';
import Image from 'next/image';

function TimelineEvent(props) {
  return (
    <div className=''>
      <div className='mt-10 flex w-[20rem] flex-col gap-5 bg-postcard-img p-5 text-lg shadow-black drop-shadow-lg duration-1000 hover:rotate-2 hover:scale-110 hover:drop-shadow-2xl'>
        <h2 className='text-center text-xl font-bold uppercase'>
          {props.date}
        </h2>
        <p className='text-center text-xl'>{props.snippet}</p>
        <div className='mx-auto flex w-full'>
          <Image src={props.image} alt='' />
        </div>
      </div>
    </div>
  );
}

export default TimelineEvent;
