import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@heroui/react';
import React, { useState } from 'react'
import { CiUser } from "react-icons/ci";
import MyModal from '../components/Model';
import ProfileDropDown from '../components/ProfileDropDown';
import { NavLink } from 'react-router-dom';
import { ThemeColor } from '../Lib/Utilites';
import { LuShoppingCart } from "react-icons/lu";


const MyNavbar = ({isDark}) => {
    const value = true
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuitems = ['Eat & Drink', 'Club', 'Things to do', 'shoping', 'Account', 'Contact Now'];
    return (
        <section className='top-0 sticky z-50'>
            <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} maxWidth='2xl' className={ThemeColor(isDark)} >
                <NavbarContent className='sm:hidden' justify='start' >
                    <NavbarMenuToggle aria-level={isMenuOpen ? "Close menu" : "Open menu"}>sujon</NavbarMenuToggle>
                </NavbarContent>
                <NavbarContent className='sm:hidden pr-3'>
                    <NavbarBrand><img src="/logo.png" className='w-44 ' alt="" /></NavbarBrand>
                </NavbarContent>
                {/* desktop device */}
                <NavbarContent className='hidden sm:flex gap-4 w-full justify-center'>
                    <NavbarBrand>
                        <NavLink  to="/"><img src="/logo.png" className='w-44 cursor-pointer' alt="" /></NavLink>

                    </NavbarBrand>
                    <NavbarItem>
                        <NavLink to="/drink" style={({isActive})=>({color:isActive?"red":isDark?"white":"black"})} className={isDark?"text-white":"text-black"}>{menuitems[0]}</NavLink>
                    </NavbarItem>
                    <NavbarItem className='relative mr-1'>
                        <NavLink className='foreground' style={({isActive})=>({color:isActive?"red":isDark?"white":"black"})} to="/club">{menuitems[1]} <sub className='absolute mb-5 -ml-3 bg-[#0E8BFF] px-4 py-2 text-white font-bold rounded-full'>-Hot</sub></NavLink>
                    </NavbarItem>
                    <NavbarItem>
                        <Dropdown className={isDark?"bg-slate-800 text-white":""}>
                            <DropdownTrigger>
                                <Button variant="none">{menuitems[2]} <span className='rotate-90 text-2xl ml-2'> ›</span></Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Static Actions">
                                <DropdownItem key="new">New file</DropdownItem>
                                <DropdownItem key="copy">Copy link</DropdownItem>
                                <DropdownItem key="edit">Edit file</DropdownItem>
                                <DropdownItem key="delete" className="text-danger" color="danger">
                                    Delete file
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </NavbarItem>
                    <NavbarItem>
                        <NavLink to="/cart"><LuShoppingCart className={isDark?"text-white text-2xl":"text-2xl"}/></NavLink>
                    </NavbarItem>
                    <NavbarItem>
                    </NavbarItem>
                    <NavbarItem>
                        <NavLink to="/contact"><button className='bg-blue-600 px-4 py-2 text-white rounded-xl' color='primary'>{menuitems[5]}</button></NavLink>
                    </NavbarItem>
                </NavbarContent>
                
                <div className='lg:flex '>
                    <NavbarContent className='w-full' justify='end'>
                        <NavbarItem className='hidden lg:flex'>
                            {value===true? <MyModal/>:<ProfileDropDown/>}
                        </NavbarItem>
                        <NavbarItem>
                            <img src="/shoping.png" className='sm:hidden' alt="" />
                        </NavbarItem>
                    </NavbarContent>
                    <NavbarMenu>{menuitems.map((item, index) => (
                        <NavbarMenuItem key={index}>
                            <NavLink className='w-full text-black capitalize'>{item}</NavLink>

                        </NavbarMenuItem>
                    ))}</NavbarMenu>
                </div>
            </Navbar>

        </section>
    )
}

export default MyNavbar