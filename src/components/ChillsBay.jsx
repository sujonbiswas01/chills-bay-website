import React from 'react'

const ChillsBay = () => {
    const cardInfo =[
        {
            logo:"logo1.png",
            title:"Your  entire  tripin one checkout!",
            des:"Add multiple experiences to your cart and checkout on one click."
        },
        {
            logo:"logo2.png",
            title :"Pay with Crypto on the go",
            des: "Enjoy the freedom of universal payments for a seamless marketplace experience"
        },
        {
            logo:"logo3.png",
            title:"Free Cancellationand ticket transfer",
            des:"Resell your tickets or cancel your reservations at zero cost 24 hours before."
        },
    ]
  return (
    <section >
        <h1 className="text-center text-[#26395C] text-2xl lg:text-5xl mt-16 mb-10 font-semibold">Why Use Chillsbay?</h1>
        <div className='container bg-[#F5FAFF] grid grid-cols-1 lg:grid-cols-3 mx-auto mt-10 mb-10 p-12 rounded-2xl shadow-xl'>
            {
                cardInfo.map((info,i)=>(
                    <div key={i} className='mt-10 '>
                        <img src={info.logo} className='w-fit mx-auto' alt="" />
                        <div className='w-[60%] mx-auto text-center'>
                            <h3 className='text-3xl font-semibold mt-2 mb-3'>{info.title}</h3>
                            <p className='text-lg'>{info.des}</p>
                        </div>

                    </div>
                ))
            }

        </div>
      
    </section>
  )
}

export default ChillsBay