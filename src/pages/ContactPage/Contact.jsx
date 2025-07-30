import React from 'react'
import { Input } from "@heroui/react";
import {Select, SelectItem} from "@heroui/react";
import {Textarea} from "@heroui/react";
import { Button } from '@heroui/react';
import Faq from './Faq';
const Contact = () => {
    const Items=[
        {
            img:"./Influencer.png",
            heading:"Become an Influencer",
            des:"Join a company that’s passionate about design and technology",
            website:"https://technology-website-five.vercel.app/"
        },
        {
            img:"./help.png",
            heading:"Need Help?",
            des:"Questions about using  Market? Our support team is here to help.",
            website:"https://technology-website-five.vercel.app/"
        },
        {
            img:"./refund.png",
            heading:"Refunds & Others",
            des:"Join a company that’s passionate about design and technology",
            website:"https://technology-website-five.vercel.app/"
        },
    ]
    return (
        <section>
            <div className='lg:w-[70%] mx-auto '>
                <div className='flex flex-col md:flex-row items-center justify-center p-6 md:p-12'>
                    {/* left side */}
                    <div className='lg:w-1/2 w-full mb-8 text-center lg:text-start'>
                        <h2 className='text-3xl font-bold text-gray-800 mb-4 mt-12'>Contact Us</h2>
                        <p className='w-[50%] text-gray-600 mx-auto lg:mx-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo nunc, quisque ultricies netus elit massa aliquam quis cras. Enim leo, in massa sapien facilisi netu.</p>
                        <div className='text-gray-800 space-y-1 mt-3 w-[50%] mx-auto lg:w-full lg:mx-0'>
                            <p className='flex gap-2'><img src="./phone.png" alt="" /> <span>01804935939</span></p>
                            <p className='flex gap-2'><img src="./email.png" alt="" /> <span>sujonbiswasdev@gmail.com</span></p>
                        </div>

                    </div>
                    {/* right side */}
                    <div className='md:w-1/2 w-full bg-white p-6 rounded-2xl shadow-xl'>
                        <form action="" className='space-y-8'>
                            <div className='flex flex-col md:flex-row gap-4'>
                                <Input label="First Name" type="text" placeholder='First Names' labelPlacement='outside' />
                                <Input label="Last Name" type="text" placeholder='Last Names' labelPlacement='outside' />
                            </div>
                            <div className='flex flex-col md:flex-row gap-4'>
                                <Input label="Email Address" type="email" placeholder='e.g. johndoe@email.com' labelPlacement='outside' />
                                <Input label="Phone number" type="number" placeholder='Phone number' labelPlacement='outside' />
                            </div>

                            <div className='mt-10 px-4'>
                                 <Select
                                  className="w-full"
                                  label="Subject"
                                  placeholder="Select an option"
                                  labelPlacement='outside'
                                >
                                  <SelectItem>fontend developer</SelectItem>
                                </Select>
                            </div>
                            <div>
                                 <Textarea
                                   isRequired
                                   className="w-full"
                                   label="Description"
                                   labelPlacement="outside"
                                   placeholder="Enter your description"
                                 />

                                 <Button color="primary" className='w-full mt-5 mb-4'>send message</Button>
                            </div>
                        </form>

                    </div>
                </div>


                {/* card section */}
                <div className='mt-24 mb-24'>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                        {
                            Items.map((item,index)=>(
                                <div key={index} className='text-center justify-center items-center'>
                                    <img src={item.img} className='w-20 h-20 object-cover rounded mb-4 mx-auto' alt="" />
                                    <h3 className='text-xl font-semibold text-gray-800 mb-2'>{item.heading}</h3>
                                    <p className='text-gray-800 mb-4 w-[60%] mx-auto '>{item.des}</p>
                                    <a href={item.website} className='text-blue-500 font-medium hover:underline'>click here</a>



                                </div>
                            ))
                        }

                    </div>

                </div>

            </div>
            <Faq/>
        </section>
    )
}

export default Contact