import React from 'react'
import { BsGithub, BsLink45Deg } from 'react-icons/bs'
import Projectimage1 from '../../assests/amam.png'
import Projectimage2 from '../../assests/greymatter.png'
import Projectimage3 from '../../assests/myhealthify.png'
import Projectimage4 from '../../assests/portfolio.png'

function Project() {

  const projects = [
    {
      title: 'GreyMatter',
      imageUrl: Projectimage2,
      text: 'my heailtify provides an health plan for patient in other to be able to use the '
    },
    {
      title: 'MyHealthify',
      imageUrl: Projectimage3,
      text: 'my heailtify provides an health plan for patient in other to be able to use the '
    },
    {
      title: 'Portfolio',
      imageUrl: Projectimage4,
      text: 'my heailtify provides an health plan for patient in other to be able to use the '
    },
    {
      title: 'AmamStore',
      imageUrl: Projectimage1,
      text: 'my heailtify provides an health plan for patient in other to be able to use the '
    }
  ]

  return (
    <div id='Projects' className='container mx-auto mt-10 mb-28'>
      <h4 className='font-[600] text-[40px] py-3 text-center'>Projects</h4>
      <div className='md:flex md:flex-wrap md:gap-10 justify-between py-4'>
      {projects.map((projects, index) => {
        return (
          
            <div key={index} className='mx-auto md:mx-0 border-2 border-[#4c4587] rounded-2xl py-3  px-5 w-[80%] md:w-[45%] mb-10 md:mb-0'>
              <div className=''>
                <h3 className='text-center font-[500] text-[20px] pb-3'>{projects.title}</h3>
                <div className='h-'>
                  <img className='flex-1 h-[230px] w-full rounded-lg' src={projects.imageUrl} alt="" />
                </div>
                <p className='py-5'>{projects.text}</p>
              </div>
              <div className='flex justify-between text-'>
                <a href="">
                  <div className='flex gap-1 rounded-[5px] items-center border-2 p-2 border-[#6C63FF] hover:bg-[#6C63FF] hover:text-[#f3f3f3] duration-700 ease-in-out'>
                    <BsGithub />
                    <h2>View</h2>
                  </div>
                </a>
                <a href="">
                  <div className='flex gap-1 rounded-[5px] items-center border-2 p-2 border-[#6C63FF] hover:bg-[#6C63FF] hover:text-[#f3f3f3] duration-700 ease-in-out'>
                    <BsLink45Deg/>
                    U.R.L
                  </div>
                </a>
              </div>
            </div>
          
        )
      })}
      </div>
    </div>
  )
}

export default Project
