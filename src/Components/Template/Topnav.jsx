import React, { useEffect, useState } from 'react'
import axios from '../../utils/axios'
import { Link } from 'react-router-dom'
const api_key="417bdda18a0526e48c33705550ebed1e";


const Topnav = () => {
  const [query, setquery] = useState("");
  //  const [first, setfirst] = useState(second)
  

  const GetSearches= async()=>{
    try{
      const d=await axios.get(`/search/multi?query=${query} `)
      console.log(d)
      
    } catch (error) {
      console.log("Error",error)
    }
  }




   useEffect(() => {
    GetSearches()
  }, [query]);
   


  return (
    <>
      <div className='w-full h-[10%] relative flex justify-start items-center ml-[20%]'>
        <i className="text-zinc-400 text-3xl m-2 ri-search-line"></i>
        {/* transparent dont apply any color apply backgroung color */}
        <input onChange={(e) => setquery(e.target.value)} className='w-[50%] text-zinc-200  mx-10 p-5 text-xl outline-none border-none bg-transparent' value={query} type="text" placeholder='Search anything' />

        {/*  ------1. if Query is greater than Zero then show     Wrong Symbol -----in search Bar
                  2. when we click on cros become  emty */ }


        {query.length > 0 && (<i onClick={() => setquery(" ")} className="text-zinc-400 text-3xl m-2 ri-close-circle-line"></i>
        )}
        {/* here we show links when we type */}

        <div className='absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[90%] overflow-auto rounded'>
        {
            // <Link className='hover:text-black font-semibold hover:bg-zinc-300 duration-300  inline-block  w-[100%] p-10 justify-start items-center border-b-2 border-zinc-100'>
            //   <img src=""alt=""/>
            //   <span>{}</span>
            // </Link>
          }
        </div> */





      </div>


    </>
  )
}

export default Topnav
