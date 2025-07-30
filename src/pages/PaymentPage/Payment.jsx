import { removeItem } from 'framer-motion';
import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import Paymodal from './Paymodal';

const Payment = () => {
  const [showPaymentInfo,setshowPaymentInfo] = useState(false)
  const [carditem, setcarditem] = useState([
    {
      id: 1,
      img: "person1.png",
      title: "The 90s with Dj Neptune",
      date: "Dec 12 2022",
      location: "Quilox Club",
      time: "9:00 PM ",
      Price: 4500000,
      quantity: 1
    },
    {
      id: 2,
      img: "person2.png",
      title: "The 90s with Dj Neptune",
      date: "Dec 12 2022",
      location: "Quilox Club",
      time: "9:00 PM ",
      Price: 4500000,
      quantity: 1
    },
  ])

  const updateQuantity = (id, increment) => {
    setcarditem((items) => (
      items.map((item) => (
        item.id === id
          ? {
            ...item,
            quantity: Math.max(item.quantity + increment, 1),
            Price: Math.max(item.quantity + increment, 1) * (item.Price / item.quantity)
          } : item
      ))
    ))
  }
  const removeItem = (id) => {
    setcarditem(carditem.filter((item) => item.id !== id))
  }

  const addNewItem = () => {
    const newItem = {
      id: carditem.length + 1,
      img: "person1.png",
      title: "sujon",
      date: "Dec 14 2024",
      location: "New venue",
      time: "12:00AM",
      Price: 100,
      quantity: 1
    }
    setcarditem([...carditem, newItem])
  }
  return (
    <section className='flex flex-col lg:flex-row gap-6 border w-[80%] mx-auto mt-24'>
      {/* left side */}
      <div className='flex-1 p-6'>
        <h2 className='text-xl font-semibold text-[#969DAA]'>Your Cart</h2>
        {
          carditem.map((item) => (
            <div key={item.id} className='flex items-center gap-4 mb-6 p-4 border-b-1'>
              <img src={item.img} className='w-24 h-24 rounded-lg' alt="" />
              <div className='flex-1'>
                <h3>{item.title}</h3>

                <div className='mt-4'>
                  <div className='flex gap-3 items-center'>
                    <div className='flex items-center gap-2'>
                      <img src="/Calendar.png" className='w-4 h-4' alt="" />
                      <p className='text-sm text-gray-600'>{item.date}</p>

                    </div>
                    <div className='flex items-center gap-2'>
                      <img src="/Mark.png" className='w-4 h-4' alt="" />
                      <p className='text-sm text-gray-600'>{item.location}</p>
                    </div>

                  </div>
                  <div className='flex items-center gap-4 mt-1.5'>
                    <img src="/Clock.png" className='w-4 h-4' alt="" />
                    <p className='text-sm text-gray-600'>{item.time}</p>

                  </div>

                </div>

                {/* quantity controls */}
                <div className='flex items-center gap-4 mt-4 bg-gray-200 rounded w-[10%] justify-center'>

                  <button className='px-2 py-1 hover:bg-gray-300' onClick={() => updateQuantity(item.id, - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button className='px-2 py-1 hover:bg-gray-300' onClick={() => updateQuantity(item.id, 1)}>+</button>

                </div>
                <p className='mt-2 text-lg font-bold'>{item.Price.toLocaleString()}</p>
                {/* remove item button */}
                <button onClick={() => removeItem(item.id)} >
                  <MdDelete />

                </button>


              </div>

            </div>

          ))
        }

        <button onClick={addNewItem} className='bg-primary-500 p-2 rounded text-white'>
          Add New Item
        </button>

      </div>
      {/* right side */}
      <div className='flex-1 p-6 border-1'>
        <div className='mb-6'>

          <h3 className='text-lg font-semibold flex gap-2'> <img src="./check.png" alt="" /> Account information</h3>
          <div className='ms-8'>
            <p>Tunde Chukwu</p>
            <p>tundechukwu12@gmail.com</p>
          </div>
        </div>
        <div className='mb-6'>

          <h3 className='text-lg font-semibold flex gap-2'> <img src="./check.png" alt="" /> Phone number</h3>
          <div className='ms-8'>
            <p>+2341123465799</p>

          </div>
        </div>
        {/* payment field with toggle */}
        <div>
          <h3 onClick={()=>setshowPaymentInfo(!showPaymentInfo)} className='text-lg font-semibold flex gap-2 items-center cursor-pointer'> <img src="./check.png" alt="" />Payment <span className='text-gray-400'>  card</span> <span className='cursor-pointer'> <IoIosArrowDown /></span> </h3>

          {showPaymentInfo && ( 
            
            <div className='grid grid-cols-2 gap-4 mt-5'>
              <input type="number" placeholder='CardNumber' className='w-full p-2 mb-4 border rounded-lg focus:ring-blue-500 focus:border-blue-500' />
              <input type="text" placeholder='Card Holder Name' className='w-full p-2 mb-4 border rounded-lg focus:ring-blue-500 focus:border-blue-500' />
              <input type="date" placeholder='MM/YY' className='w-full p-2 mb-4 border rounded-lg focus:ring-blue-500 focus:border-blue-500' />
              <input type="text" placeholder='CVV' className='w-full p-2 mb-4 border rounded-lg focus:ring-blue-500 focus:border-blue-500' />
          </div>)}

        </div>

        <div className='bg-gray-200 p-4 rounded mt-4'>
          <ul className='mb-4'>
            {
              carditem.map((item)=>(
                <li key={item.id} className='flex justify-between'>
                  <span>
                    {item.title} {item.quantity}
                  </span>
                  <span>${item.Price.toLocaleString()}</span>

                </li>
              ))
            }
          </ul>
          {/* subtotal calculation */}
          
          <div className='flex justify-between border-t-1 border-gray-400 p-2'>
            <span>subtotal:</span>
            <span>${carditem.reduce((sum,item)=>sum+item.Price,0).toLocaleString()}</span>

          </div>
          {/* tax Calculation */}

          <div className='flex justify-between mt-2'>
            <span>Tax (5%):</span>
            <span>${(
              carditem.reduce((sum,item)=>sum+item.Price,0)*0.05
            )}</span>
          </div>

          {/* total calculation */}
         
          <div className='flex justify-between font-bold my-4 border-t-1 border-gray-400 p-2'>
            <span>Total Amount:</span>
            <span>${(carditem.reduce((sum,item)=>sum+item.Price,0)*1.05).toLocaleString()}</span>

          </div>
          <Paymodal/>
        </div>

      </div>
    </section>
  )
}

export default Payment