import React from 'react'

const ThngsCard = () => {
    const cards = [
        {
            imgSrc: "/img5.png",
            title: "Sight Seeing"
        },
        {
            imgSrc: "/img6.png",
            title: "Volley Ball Game"
        },
        {
            imgSrc: "/img7.png",
            title: "Wizkid Show"
        },
        {
            imgSrc: "/img5.png",
            title: "Sight Seeing"
        },
        {
            imgSrc: "/img6.png",
            title: "Volley Ball Game"
        },
        {
            imgSrc: "/img7.png",
            title: "Wizkid Show"
        },
        {
            imgSrc: "/img6.png",
            title: "Volley Ball Game"
        },
        {
            imgSrc: "/img7.png",
            title: "Wizkid Show"
        }
       
    ];
    return (
        <section className='bg-[#F5FAFF] p-5'>
            <div className="container mx-auto">
                <h1 className='text-[#26395C] text-center lg:text-start text-2xl font-bold mt-10 mb-8 lg:text-3xl'>Top things to do in Lagos
                </h1>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 mb-10 mx-auto p-4'>
                    {cards.map((items, index) => (
                        <div className='flex flex-col items-center overflow-hidden' key={index}>
                            <img className='w-full object-cover h-[300px] rounded-2xl' src={items.imgSrc} alt="" />
                            <h2 className='text-[#26395C] font-semibold text-2xl mt-0.5'>{items.title}</h2>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default ThngsCard