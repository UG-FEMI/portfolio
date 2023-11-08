import React from 'react'
import About from '../About/About'
import Image1 from '../../assests/image2.png'
import { Link } from 'react-router-dom'
import Project from '../project/Project'

function Home() {
   

    return (
        <div>
            <div className='bg-white pb-[5px] px-[10px] md:px-0'>
                <div className='container mx-auto pt-[50px] md:flex'>
                    <div className='w-full md:w-[50%] mt-[80px]'>
                        <h4 className='text-[50px] w-full md:w-[80%] font-[700]'> I Build and Innovate Things That Live On Web. </h4>
                        <p className='text-[20px] w-full md:w-[80%] font-[400] py-5'>As a skilled Front-End (React) developer, I am dedicated to turning ideas into innovative web applications.</p>
                    </div>
                    <div className='w-full md:w-[50%]'>
                        <img className='w-[100%] h-full' src={Image1} alt="" />
                    </div>
                </div>
                <div className='text-center mt-[30px] mb-[50px]'>
                    <Link to='https://drive.google.com/file/d/1HvL9PY_OEsac8dDFel8XwZJ7GjzbGQXb/view?usp=drive_link' className='py-5 px-10 bg-[#6C63FF] w-[25%] font-[500] text-[white] rounded-tl-[10px] rounded-br-[10px]'>
                        Résumé
                    </Link>
                </div>
            </div>
           
            <About />
            
            <Project/>
        </div>
    )
}

export default Home
