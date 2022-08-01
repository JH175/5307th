import React from 'react';

function Resource(props) {
  return (
    <div>
      <div className='my-6'>
        <h2 className='text-xl font-bold duration-1000 hover:scale-105'>
          <a href={props.url}>{props.title}</a>
        </h2>
        <p className='indent-2'>{props.source}</p>
        <p className='indent-2 italic text-orange-600'>{props.category}</p>
      </div>
    </div>
  );
}

export default Resource;
