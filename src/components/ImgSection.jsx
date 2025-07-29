import React from 'react'

const ImgSection = () => {
    const cards = [
        {
            imgSrc: "/img1.png",
            title: "Eat & Drink"
        },
        {
            imgSrc: "/img2.png",
            title: "Events"
        },
        {
            imgSrc: "/img3.png",
            title: "Club"
        },
        {
            imgSrc: "/img4.png",
            title: "Things to do"
        },
    ]
    return (
        <section>
            <h1 className='text-[#26395C] text-center text-2xl font-bold mt-10 mb-8 lg:text-6xl'>What are you in the mood for?
            </h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-5 mb-10 container mx-auto p-4'>
                {cards.map((items,index)=>(
                    <div className='flex flex-col items-center overflow-hidden' key={index}>
                        <img className='w-full h-[500px] lg:h-[650px]' src={items.imgSrc} alt="" />
                        <h2 className='text-[#26395C] font-semibold text-2xl mt-0.5'>{items.title}</h2>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default ImgSection
