import { Button } from '@heroui/react';
import { div } from 'framer-motion/client';
import React, { useEffect, useState } from 'react'

const DrinkCard = ({title,api}) => {
    const [data,setdata]=useState([]);
    useEffect(()=>{
         fetch(api)
          .then((response)=>{
            return response.json()
          })
          .then((jsonData)=>{
            setdata(jsonData)
          })
    },[])
  return (
    <section className=' p-10'>
        <div className='w-[80%] mx-auto'>
            <div className='flex justify-between items-center'>
                <h2 className='font-bold text-1xl md:text-4xl mb-4 mt-4 text-white'>{title}</h2>
                <Button variant='outline' className="text-[#0E8BFF] text-sm md:text-xl">see more</Button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5'>
                {
                    data.map((mydata)=>(
                        <div key={mydata.id} className='relative'>
                          <Button className='absolute right-2 top-4'>{mydata.date}</Button>
                            <img src={mydata.img} className='w-[400px] object-cover rounded-lg mb-3' alt="" />
                            <h2 className='font-semibold text-lg mb-2 '>{mydata.title}</h2>
                            <p className='text-sm text-white mb-1'>{mydata.des}</p>
                            <p className='text-sm text-white mb-2'>{mydata.tags}</p>
                            <Button color='primary' >Reserve Now</Button>

                        </div>
                    ))
                }

            </div>
        </div>
    </section>
  )
}

export default DrinkCard