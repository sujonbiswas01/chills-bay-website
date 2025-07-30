import { Accordion, AccordionItem } from '@heroui/react'
import React from 'react'

const Faq = () => {
const Faqitem = [
    {

    }
]
  return (
    <div className='w-[80%] mx-auto bg-[#FBFCFF] p-24 lg:w-[70%]'>
        <h3 className='text-center font-bold text-3xl mb-2'>Frequently Asked Questions</h3>
        <p className='text-md text-center lg:w-[70%] mx-auto mb-12 mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus nunc, purus est sem volutpat at at. Ultricies erat leo risus, eget venenatis tristique morbi.</p>
        <Accordion className='space-y-2' defaultExpandedKeys={["1"]}>
            <AccordionItem className='bg-white shadow-sm px-3 rounded' key="1" aria-label='Accordion'  title="Do you offer refunds for purchased products?">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum adipiscing tristique ut blandit massa tellus amet at. Amet, arcu tellus cursus leo. Eget malesuada a enim, at at cursus ornare et nunc. Enim ultrices platea morbi.</p>
            </AccordionItem>
            <AccordionItem className='bg-white shadow-sm px-3 rounded' key="2" aria-label='Accordion' title="How does Chillsbay work?">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum adipiscing tristique ut blandit massa tellus amet at. Amet, arcu tellus cursus leo. Eget malesuada a enim, at at cursus ornare et nunc. Enim ultrices platea morbi.</p>
            </AccordionItem>
            <AccordionItem className='bg-white shadow-sm px-3 rounded' key="3" aria-label='Accordion' title="Can I pay with Crypto on Chillsbay.com? ">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum adipiscing tristique ut blandit massa tellus amet at. Amet, arcu tellus cursus leo. Eget malesuada a enim, at at cursus ornare et nunc. Enim ultrices platea morbi.</p>
            </AccordionItem>
            <AccordionItem className='bg-white shadow-sm px-3 rounded' key="4" aria-label='Accordion' title="How can I become a Chillsbay Host?">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum adipiscing tristique ut blandit massa tellus amet at. Amet, arcu tellus cursus leo. Eget malesuada a enim, at at cursus ornare et nunc. Enim ultrices platea morbi.</p>
            </AccordionItem>
        </Accordion>

    </div>
  )
}

export default Faq