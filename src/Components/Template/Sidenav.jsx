
import React from 'react'
import { Link } from 'react-router-dom'

const Sidenav = () => {





  return (
    <>

      <div className='w-[20%] h-full border-r-2 border-zinc-200 p-10'>
         {/* padding 10 for icon to get center -fae some issue to get this  */}
        <h1 className='text-2xl text-white font-bold'>
          <i className="text-[#6556CD] ri-tv-fill  mr-2"></i>
          <span className='text-2xl'>Karthik-TV</span>
        </h1>

        <nav className='flex flex-col text-zinc-400 text-xl gap-1' >
          {/* gap should adjust when if u want more link =s in the page */}
          <h1 className='text-white font-semibold text-center mt-2 mb-5'>New Feeds</h1>
          <Link className='hover:bg-[#6556CD] rounded-[12px] p-5 hover:text-white duration-300'><i className="mr-2 ri-fire-fill"></i>Trending</Link>
          <Link className='hover:bg-[#6556CD] rounded-[12px] p-5 hover:text-white duration-300'><i className="mr-2 ri-bard-fill"></i>Populars</Link>
          <Link className='hover:bg-[#6556CD]  rounded-[12px] p-5 hover:text-white duration-300'><i className="mr-2 ri-film-fill"></i>Movies</Link>
          <Link className='hover:bg-[#6556CD]  rounded-[12px] p-5 hover:text-white duration-300'><i className="mr-2 ri-tv-fill"></i>Tv Shows</Link>
          <Link className='hover:bg-[#6556CD]  rounded-[12px] p-5 hover:text-white duration-300'><i className="mr-2 ri-team-fill"></i>Trending-People</Link>
        </nav>



<hr className='border-none h-[1px] bg-zinc-400 '/>

        <nav className='flex flex-col text-zinc-400 text-xl gap-2' >
          <h1 className='text-white font-semibold text-center mt-3 mb-5'>Website Information</h1>
          <Link className='hover:bg-[#6556CD] rounded-[12px] p-5 hover:text-white duration-300'><i className="mr-2 ri-information-line"></i>About</Link>
          <Link className='hover:bg-[#6556CD] rounded-[12px] p-5 hover:text-white duration-300'><i className=" mr-2 ri-customer-service-fill"></i>Contact Us</Link>
          
         
        </nav>
      

    </div >
    </>
  )
}

export default Sidenav
