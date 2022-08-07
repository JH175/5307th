import React from 'react';
import TimelineEvent from './TimelineEvent';
import Quebec from '../assets/Quebec.png';
import Lurline from '../assets/Lurline.jpg';
import Stilwell from '../assets/Stilwell.jpg';
// import Pangsau from '../assets/mm-pangsau-pass.png';
import Train from '../assets/mm-train.png';
import Camp from '../assets/mm-camp.png';

const tlEvents = [
  {
    snippet:
      'Allied leaders attending the Quebec Conference identify the need for an American long-range penetration unit to pursue Japanese forces in Burma.',
    date: 'Aug. 1943',
    image: Quebec,
  },
  {
    snippet:
      'A force is established of around 3,000 volunteers including combat veterans already serving in the Pacific. They are designated the 5307th Composite Unit (Provisional) - code named "Galahad" and embark for India aboard the SS Lurline.',
    date: 'Sep. 1943',
    image: Lurline,
  },
  {
    snippet:
      'The 3 battalions of 5307th arrive in Bombay to organize and begin training at  Deolali,  a British transit camp 125 miles to the east.',
    date: '31 Oct. 1943',
    image: Camp,
  },
  {
    snippet:
      'The unit relocates by train to Deogarh in eastern India and conducts intense jungle training.',
    date: 'Nov. 1943 - Jan. 1944',
    image: Train,
  },
  {
    snippet:
      'The 5307th is assigned to the field command of General Stilwell in northern Burma',
    date: '8 Jan. 1944',
    image: Stilwell,
  },
  {
    snippet:
      'The unit is ordered to advance to Ledo on the Burmese border by 7 February',
    date: '8 Jan. 1944',
  },
];

// General Stilwell's immediate orders to the 5307th were to close in on Ledo by 7 February and from there to march over the trail as far as Ningbyen. The unit started at once from the training area in order to arrive on schedule. The 1,000-mile trip by train and boat to Ledo consumed a month; the last 100 miles on foot took 10 days. On 19 February the 1st Battalion, head of the column, arrived at Ningbyen. It was followed 2 days later by the 3d Battalion, tail of the column. The men had been thoroughly tested by the 10-day march and were ready for their first assignment.

function Timeline() {
  return (
    <div className='relative'>
      <div className='absolute -z-10 h-full w-[.2rem] -translate-y-[1rem]  translate-x-[10rem] bg-stone-800 text-lg drop-shadow-lg' />
      {tlEvents.map((tlevent, key) => (
        <TimelineEvent
          key={key}
          snippet={tlevent.snippet}
          date={tlevent.date}
          image={tlevent.image}
        />
      ))}
    </div>
  );
}

export default Timeline;
