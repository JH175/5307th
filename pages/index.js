import Image from 'next/image';
import React from 'react';
import dui from '../assets/dui.svg';
import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.jpg';

function Home() {
  return (
    <div className=''>
      <div className='grid h-[35rem] min-w-[30rem] bg-hero-img bg-cover'>
        <div className='m-10 mx-auto w-[20rem] drop-shadow-lg'>
          <Image src={dui} alt='Unit Insignia' />
        </div>
      </div>
      <div className='grid h-fit max-h-[25rem] min-w-[30rem] -translate-y-10 grid-flow-col justify-center  gap-16'>
        <div className='hidden w-[20rem] min-w-[20rem] rotate-1 border-[.5rem] border-white drop-shadow-xl duration-1000 hover:scale-110 md:flex'>
          <Image src={hero2} alt='Frand D. Merrill' />
        </div>
        <div className='flex w-[20rem] min-w-[20rem] -rotate-2 border-[.5rem]  border-white drop-shadow-xl duration-1000 hover:scale-110'>
          <Image src={hero1} alt='Unit River Crossing' />
        </div>
        <div className='hidden w-[30rem] min-w-[30rem] rotate-3 border-[.5rem] border-white drop-shadow-xl duration-1000 hover:scale-110 xl:flex'>
          <Image src={hero3} alt='Group Photo' />
        </div>
      </div>
      <div className='mx-auto grid w-[90%] min-w-[30rem] justify-center gap-5 p-10 text-xl'>
        <h2 className='text-md text-center font-bold md:text-2xl'>
          Honoring the men of the 5307th
        </h2>
        <p className='indent-4'>
          {`More famously known as Merril's Marauders, the 5307th Composite
          Unit (Provisional) took the fight to the Japanese Imperial Army in
          World War II's China-Burma-India Theater (CBI). Code named Gallahad,
          the unit was formed in August 1943 to pursue Japanese forces on the
          Indian subcontinent. It specialized in jungle warfare, long-range
          infiltration, direct action raids, and reconnaissance. The Marauders
          covered record-breaking distances on foot to close with and destroy
          enemy forces lodged deep in Burma's mountainous jungles from
          February to August 1944.`}
        </p>
        <p>
          {`The unit consolidated into the 475th Infantry on August 10th, 1944.
          There, continued combat operations in Northern Burma as part of the
          MARS Task Force until early 1945. In 1954 it was redesignated the 75th
          Infantry, eventually evolving into the 75th Ranger Regiment of today.
          The legacy of the Marauders is one of absolute dedication and courage
          against all odds. This site is dedicated to their memory.`}
        </p>
      </div>
    </div>
  );
}
export default Home;
