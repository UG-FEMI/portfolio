import React, { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { NavLink } from 'react-router-dom'
import {BiMenuAltLeft} from 'react-icons/bi'
import {RxCross2} from 'react-icons/rx'

function Navbar() {
    const [smallDev, setsmallDev] = useState(false)
    

    const menuClick = () => {
        setsmallDev(!smallDev)
    }

    // const scrollToBtnClick = () => {
    //     scrollRef.current.scrollIntoView({behavior:'smooth'})
    // }
    return (
        <div className=' p-2  bg-[#34344b] fixed top-0 right-0 left-0 z-10'>
            <nav className='container mx-auto  flex justify-between items-center'>
                <header className='py-[17px] bg-[#4c4587] text-[#eae9f8] w-[60px] h-[60px] text-center rounded-full'>
                    <h1 className='font-[700]'>A.O</h1>
                </header>
                <ul className={` ${smallDev? 'block' : 'hidden'} bg-black 
                right-0 left-0 text-center leading-10 md:py-2 
                md:flex md:items-center md:w-auto w-full text-[#b7b7c4] 
                gap-12 absolute md:static md:bg-transparent top-[70px]` }>
                  
                    <li>
                        <NavLink to='/' className='cursor-pointer'>Home</NavLink>
                    </li>

                    <li>
                        <ScrollLink to='About' spy={true} smooth={true} offset={-140} duration={500} className='cursor-pointer'>About</ScrollLink>
                    </li>

                    <li>
                        <ScrollLink to='Projects' spy={true} smooth={true} offset={-100} duration={500} className='cursor-pointer'>Projects</ScrollLink>
                    </li>
                    {/* <li>
                    <ScrollLink to='Contacts' spy={true} smooth={true} offset={-10} duration={500} className='cursor-pointer'>Contacts</ScrollLink>
                       
                    </li> */}
                </ul>
                <div className='text-[#b7b7c4] text-[35px] md:hidden' onClick={menuClick}>
                    {smallDev ? <RxCross2/> : <BiMenuAltLeft /> }
                </div>
            </nav>
        </div>
    )
}

export default Navbar
