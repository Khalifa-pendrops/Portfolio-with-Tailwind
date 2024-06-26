import React from 'react'

function Test() {
  return (
    <div className='bg-slate-400'>
      <div className="flex justify-between items-center px-[4rem] py-[2rem]">
        <h2>
          khali<span>Fa</span>
        </h2>
        <div className='flex flex-col-reverse gap-1 transform scale-[] sm:hidden'>
          <div className="w-6 h-1 bg-black"></div>
          <div className="w-5 h-1 bg-black"></div>
          <div className="w-4 h-1 bg-black"></div>
        </div>
        <nav className='max-sm:hidden'>
          <ul className='flex justify-center items-center gap-2'>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </nav>
        <button className='bg-green-700 px-2 rounded-sm text-white font-bold hover:text-yellow-600 max-sm:hidden'>Contact</button>
      </div>
    </div>
  );
}

export default Test
