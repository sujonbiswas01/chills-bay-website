import { Button } from '@heroui/react'
import React from 'react'

const footerData =
{
    socialIcon: [
        "fb.png",
        "Instagram.png",
        "yt.png",
        "Twitter.png",
        "linkding.png",
    ],

    sections: [
        {
            title: "Menu",
            menus: [
                {
                    items: ["Home", "Eat", "Drink", "Events", "Clup", "Recreation"]

                },
                {
                    items: ["Blog", "Careers", "Contact", "FAQs"]

                },
            ]
        },
        {
            title: "Utility Pages",
            menus: [
                {
                    items: ["Start Here", "Pay with Crypto", "Style Guide", "Password Protected", "404 Not Found", "Licenses", "Changelog"]

                }

            ]
        }
    ],


    PartnerSection: {
        image: "partner.png",
        title: "Become a Partner",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod pellentesque posuere.",

    },
    Logo: "logo.png",
    copyright: "sujon biswas 2025"
}
const MenuSection = ({ title, menus }) => {
    return (
        <div>
            <p className='font-semibold text-2xl border-b-1 mb-5 py-3'>{title}</p>
            <div className='flex gap-12 text-xl'>
                {menus.map((menu, i) => (
                    <ul key={i}>
                        {menu.items.map((item, i) => (
                            <li key={i} className='mb-2'>{item} </li>
                        ))}


                    </ul>
                ))}
            </div>
        </div>
    )
}

const Footer = () => {
    const { socialIcon, sections, PartnerSection, Logo, copyright } = footerData;
    return (
        <footer className='p-12'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-2'>
                {/* left side */}
                <div className='col-span-1'>
                    <img src={Logo} className='w-fit' alt="" />
                    <p className='text-sm mb-4'>{copyright}</p>
                    <div className='flex space-x-4'>
                        {socialIcon.map((icon, index) => (
                            <a href='' key={index}>
                                <img className='w-4 h-4' src={icon} alt="" />
                            </a>
                        ))}
                    </div>
                </div>
                {/* right side */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-24 ms-auto col-span-3'>
                    {sections.map((section, index) => (
                        <MenuSection key={index} title={section.title} menus={section.menus}>

                        </MenuSection>
                    ))}

                    <div className='w-full bg-[#F5FAFF] p-8 space-y-3'>
                        <img src={PartnerSection.image} alt="" />
                        <h3 className='text-3xl text-[#26395C] font-bold'>{PartnerSection.title}</h3>
                        <p className='text-md text-gray-400'>{PartnerSection.des}</p>
                        <Button color='primary' className='w-full rounded-2xl py-1' size='xl'>join Now</Button>
                    </div>
                </div>


            </div>

        </footer>
    )
}

export default Footer