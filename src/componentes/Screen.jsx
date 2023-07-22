import React from 'react';

const Screen = ({input}) => {
  return (
    <div className='h-20 flex rounded-3xl mb-5 justify-end items-center font-bold text-3xl text-white pr-3 border-2'>
      {input}
    </div>
  )
};

export default Screen;