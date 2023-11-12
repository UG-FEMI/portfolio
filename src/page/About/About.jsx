import React from 'react'
import Image3 from '../../assests/image1.png'
import Skill1 from '../../assests/html.svg'
import Skill2 from '../../assests/css.svg'
import Skill3 from '../../assests/java.svg'
import Skill4 from '../../assests/boo.svg'
import Skill5 from '../../assests/tailwind.svg'
import Skill6 from '../../assests/react.svg'
import Skill7 from '../../assests/github.svg'
import Skill8 from '../../assests/figma.svg'



function About() {
   
    const skills = [
        {
            image: Skill1,
            text: 'HTML'
        },
        {
            image: Skill2,
            text: 'CSS'
        },
        {
            image: Skill3,
            text: 'JAVASCRIPT'
        },
        {
            image: Skill4,
            text: 'BOOTSTRAP'
        },
        {
            image: Skill5,
            text: 'TAILWIND CSS'
        },
        {
            image: Skill6,
            text: 'REACT'
        },
        {
            image: Skill7,
            text: 'GITHUB'
        },
        {
            image: Skill8,
            text: 'FIGMA'
        }
    ]


    return (
        <div id='About' className=' mt-[70px] '>
            <div className='container mx-auto md:flex gap-10 justify-between flex-row-reverse px-[10px] md:px-0'>

                <div className='move-div w-full md:w-[50%] px-[1px] py-[2px] bg-[#6C63FF]'>
                    <div className='stand-div w-[97%] py-[10px] h-full mx-auto bg-white'>
                        <div className='px-[45px] '>
                            <h1 className='font-[600] text-[30px] text-center py-5 underline'>ABOUT ME</h1>
                            <h3 className='font-[400] text-[20px]'>
                                I’m Oluwafemi a creative Front-End React
                                developer based in Lagos, Nigeria.
                                I am passionate about building
                                and implementing user-friendly
                                software. As a matter of fact,
                                I constantly work on improving
                                myself seeking to achieve
                                the best version of myself.
                                I am also a self-taught developer with
                                over a year experience. During that experience learnt
                                alot that
                                have played some significant role in my
                                personal life and also in my soft
                                skills.
                            </h3>

                        </div>
                        <div className='flex gap-5 mt-14 pl-[45px]'>
                           
                            <a href="https://drive.google.com/file/d/1HvL9PY_OEsac8dDFel8XwZJ7GjzbGQXb/view?usp=drive_link" className='border-2 border-[#6C63FF] py-2 px-5 '>
                                Résumé
                            </a>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-[50%] py-[30px]'>
                    <img className='w-full ' src={Image3} alt="" />
                </div>

            </div>

            <hr className='bg-[#6C63FF] h-[2px] my-16' />

            <div className=' container mx-auto my-12 px-[10px] md:px-0'>
                <div>
                    <h2 className='font-[600] text-[40px] py-3 text-center'>Skills</h2>
                </div>
                <div className='w-full'>
                    <div className='px-10 flex justify-center gap-10 items-center flex-wrap'>
                        {skills.map((skills, index) => {
                            return (
                                <div key={index} className='bg-[#f3f3f3] rounded-xl w-[165px] py-5 shadow-lg from-[#cbcbcc] to-[#877ad6]'>
                                    <div className='px-7'>
                                        <img src={skills.image} className='w-full' alt="" />
                                    </div>
                                    <h1 className='text-center font-[600] text-[13px]'>{skills.text}</h1>
                                </div>
                            )

                        })}

                    </div>
                </div>
            </div>
            <hr className='bg-[#6C63FF] h-[2px] mt-20' />
        </div>
    )
}

export default About
