import React from 'react'

const Gallary = () => {
    const Galary = [
        {
            img:"g1.png"
        },
        {
            img:"g2.png"
        },
        {
            img:"g3.png"
        },
        {
            img:"g4.png"
        },
        {
            img:"g5.png"
        },
        {
            img:"g6.png"
        }
    ]
  return (
    <section className='border p-10 mb-10 '>
        <div className='container mx-auto'>
            <h3 className='text-[#26395C] text-3xl font-semibold text-center lg:text-start'>See How people are chilling on <span className='text-[#0E8BFF]'>Chillsbay</span></h3>
            <div className='grid grid-cols-3 lg:grid-cols-6 mt-8'>
                {
                    Galary.map((source,i)=>(
                        <div key={i}>
                            <img src={source.img} className='w-full object-cover h-full' alt="" />
                        </div>
                    ))
                }

            </div>
        </div>
    </section>
  )
}

export default Gallary