import React from 'react'
import { CiUser } from "react-icons/ci";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/react';
 const menuitems = ['Eat & Drink', 'Club', 'Things to do', 'shoping', 'Account', 'Contact Now'];
const ProfileDropDown = () => {
    return (
        <div>
            <Dropdown>
                <DropdownTrigger>
                    <Button variant="none"> <CiUser /> {menuitems[4]}</Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="account">
                    <DropdownItem key="new">New file</DropdownItem>
                    <DropdownItem key="copy">Copy link</DropdownItem>
                    <DropdownItem key="edit">Edit file</DropdownItem>
                    <DropdownItem key="delete" className="text-danger" color="danger">
                        Delete file
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}

export default ProfileDropDown