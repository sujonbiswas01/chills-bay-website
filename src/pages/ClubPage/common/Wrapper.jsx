import React from 'react'
import MyNavbar from '../../../Layouts/Navbar'
import Footer from '../../../Layouts/Footer'
import { ThemeColor } from '../../../Lib/Utilites'
export const Wrapper = ({children,isDark}) => {
  return (
    <div className={ThemeColor(isDark)}>
        <MyNavbar isDark={isDark}/>
        {children}
        <Footer isDark={isDark}/>
    </div>
  )
}
