import React from 'react';
import Resource from '../components/Resource';
import Image from 'next/image';
import mmgroup from '../assets/mm1.jpg';

const links = [
  {
    title: "Merrill's Marauders Association",
    url: 'http://marauder.org/',
    source: 'Marauder.org',
    category: 'Website by SSG Robert E. Passanisi Sr (Marauder)',
  },
  {
    title: 'Daniel Novak Photos',
    url: 'http://www.danielnovak.com/',
    source: 'DanielNovak.com',
    category:
      'Website by Daniel Novak (164th Signal Photographer with the 5307th)',
  },
  {
    title: "Merrill's Marauders Proud Decendants",
    url: 'https://merrillsmarauderspd.org/',
    source: 'MerrillsMaraudersPD.org',
    category: 'Website',
  },
  {
    title: '"Allied Long Range Penetration Groups for Burma"',
    url: 'https://arsof-history.org/articles/v4n1_lrpg_page_1.html',
    source: 'ARSOF-History.org',
    category: 'Article Troy J. Sacquety, PhD',
  },
  {
    title: '"From Ledo to Leeches"',
    url: 'https://arsof-history.org/articles/v2n1_ledo_to_leeches_page_1.html',
    source: 'ARSOF-History.org',
    category: 'Article by Cherilyn A. Walley',
  },
  {
    title: '"The End Run of Galahad"',
    url: 'https://arsof-history.org/articles/v2n1_end_run_galahad_page_1.html',
    source: 'ARSOF-History.org',
    category: 'Article by Kenneth Finlayson',
  },
  {
    title: '"Of Mules and Men"',
    url: 'https://arsof-history.org/articles/v1n2_mules_and_men_page_1.html',
    source: 'ARSOF-History.org',
    category: 'Article by Cherilyn A. Walley',
  },
  {
    title: '"Wings over Burma"',
    url: 'https://arsof-history.org/articles/v4n2_wings_over_burma_page_1.html',
    source: 'ARSOF-History.org',
    category: 'Article Troy J. Sacquety, PhD',
  },
  {
    title: 'Topographic Maps of Burma',
    url: 'https://maps.lib.utexas.edu/maps/ams/burma/',
    source: 'Utexas.ed',
    category: 'Map Archive by University of Texas',
  },
];

function resources() {
  return (
    <div className='mx-auto  flex w-fit flex-col justify-center gap-5 p-10 text-center'>
      <h2 className='text-3xl font-bold'>Resources</h2>
      <div className='mx-auto my-10 w-[30rem] rotate-2 drop-shadow-xl'>
        <Image src={mmgroup} alt='' />
      </div>
      {links.map((link, key) => (
        <Resource
          key={key}
          title={link.title}
          url={link.url}
          source={link.source}
          category={link.category}
        />
      ))}
    </div>
  );
}
export default resources;
