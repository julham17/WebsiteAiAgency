import React from 'react'
import Title from './Title'
import assets from '../assets/assets'

const OurWork = () => {
    const workData = [
        {
            title: 'Mobile App Marketing',
            description: 'We turn bold ideas into powerfull digital solutions  that connect, engage...',
            image: assets.work_mobile_app
        },
        {
            title: 'Dashboard Management',
            description: 'We help you execute your plan and deliver result',
            image: assets.work_dashboard_management
        },
        {
            title: 'Fitness App Promotion',
            description: 'We help you create a marketing strategy that drives results',
            image: assets.work_fitness_app
        }
    ]

  return (
    <div id='our-work' className='relative flex flex-col items-center gap-7 px-4 xm:px-12 ls:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      <Title title='Our Latest Work' desc='From Strategy to execute, we craft digital solutions that move your business forward'/>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
        {
            workData.map((work, index)=>
                <div key={index} className='hover:scale-105 duration-500 transition-all cursor-pointer'>
                    <img src={work.image} className='w-full rounded-xl' alt="" />
                    <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
                    <p className='text-sm opacity-60 w-5/6'>{work.description}</p>
                </div>
            )
        }
      </div>
    </div>
  )
}

export default OurWork
