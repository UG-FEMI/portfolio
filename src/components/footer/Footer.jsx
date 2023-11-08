import React from 'react'
import { MdOutlineMail } from 'react-icons/md'
import { BsTelephone } from 'react-icons/bs'
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi'
import { AiOutlineCopyrightCircle, AiOutlineWhatsApp } from 'react-icons/ai'

function Footer() {
    return (
        <div id='Contacts'>
            <div className='bg-[#38383b] py-5'>
                <div >
                    <div className='container mx-auto pb-4 flex justify-between px-[10px] md:px-0'>
                        <div>
                            <h2 className='font-[500] text-[20px] my-3 text-white'>Contact Me:</h2>
                            <div className='mr-[20px] block gap-5 text-white'>
                                <div className='flex items-center gap-2 border-2 border-white rounded-[20px] py-[5px] px-[15px] w-[250px] hover:bg-[#cfcbcb] duration-[1s] ease-in-out hover:text-[#34344b] hover:border-[#34344b]'>
                                    <MdOutlineMail className='text-[25px]' />
                                    <a href="mailto:ayodele.mickey89@gmail.com" className='text-[13px] font-[500]'>ayodele.mickey89@gmail.com</a>
                                </div>
                                <div className='flex items-center gap-2 border-2 border-white rounded-[20px] py-[5px] px-[16px] w-[170px] my-3 hover:bg-[#cfcbcb] duration-[1s] ease-in-out hover:text-[#34344b] hover:border-[#34344b]'>
                                    <BsTelephone className='text-[20px]' />
                                    <a href="https://wa.me/2348154917045" className='text-[13px] font-[500]'>+234 8154917045</a>
                                </div>
                            </div>
                        </div>
                        <div>
                         
                        </div>
                    </div>

                    <hr className='py-[10px]' />

                    <div className='flex gap-4 justify-center'>
                        <a href="https://github.com/UG-FEMI" className='media-link '>
                            <FiGithub className='media-icon' />
                        </a>
                        <a href="https://www.linkedin.com/in/michael-ayodele" className='media-link '>
                            <FiLinkedin className='media-icon' />
                        </a>
                        <a href="mailto:ayodele.mickey89@gmail.com" className='media-link '>
                            <FiMail className='media-icon' />
                        </a>
                        <a href="https://twitter.com/ugly_femi" className='media-link '>
                            <FiTwitter className='media-icon' />
                        </a>
                        <a href="" className='media-link '>
                            <AiOutlineWhatsApp className='media-icon' />
                        </a>

                    </div>

                </div>

            </div>
            <div className='bg-[#0d0d1f]'>
                <div className='flex justify-center items-center gap-1 text-[white] py-1 text-[12px]'>
                    <AiOutlineCopyrightCircle />
                    <h4>Copyright 2023, Ayodele Michael Oluwafemi</h4>
                </div>
            </div>
        </div>
    )
}

export default Footer
