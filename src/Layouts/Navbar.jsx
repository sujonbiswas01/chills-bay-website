import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@heroui/react';
import React, { useState } from 'react'
import { CiUser } from "react-icons/ci";
import MyModal from '../components/Model';
import ProfileDropDown from '../components/ProfileDropDown';


const MyNavbar = () => {
    const value = true
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuitems = ['Eat & Drink', 'Club', 'Things to do', 'shoping', 'Account', 'Contact Now'];
    return (
        <section className=''>
            <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} maxWidth='2xl'>
                <NavbarContent className='sm:hidden' justify='start' >
                    <NavbarMenuToggle aria-level={isMenuOpen ? "Close menu" : "Open menu"}>sujon</NavbarMenuToggle>
                </NavbarContent>
                <NavbarContent className='sm:hidden pr-3'>
                    <NavbarBrand><img src="/logo.png" className='w-44 ' alt="" /></NavbarBrand>
                </NavbarContent>
                {/* desktop device */}
                <NavbarContent className='hidden sm:flex gap-4 w-full justify-center'>
                    <NavbarBrand>
                        <img src="/logo.png" className='w-44 ' alt="" />

                    </NavbarBrand>
                    <NavbarItem>
                        <Link className='text-black'>{menuitems[0]}</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className='foreground'>{menuitems[1]} <sub className='-mt-9'>-Hot</sub></Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Dropdown>
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
                        <Link><img src="/shoping.png" alt="" /></Link>
                    </NavbarItem>
                    <NavbarItem>
                    </NavbarItem>
                    <NavbarItem>
                        <Button color='primary'>{menuitems[5]}</Button>
                    </NavbarItem>
                </NavbarContent>
                <div className='lg:flex bg-[#F5FAFF]'>
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
                            <Link className='w-full text-black capitalize'>{item}</Link>

                        </NavbarMenuItem>
                    ))}</NavbarMenu>
                </div>
            </Navbar>

        </section>
    )
}

export default MyNavbar