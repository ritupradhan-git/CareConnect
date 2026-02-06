import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl  pt-10 text-gray-500'>
        <p>About <span className='text-gray-700 font-medium'>Us</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12 '>
        <img className='w-full md:max-w-90' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-400'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores numquam dignissimos veniam, velit quam culpa, libero dolor ipsum id ullam molestias, sapiente mollitia totam repellat ratione. Voluptates doloribus ratione ut.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita itaque similique dolor enim. Sapiente esse, accusamus totam recusandae quibusdam debitis voluptates laborum ratione autem qui necessitatibus quaerat accusantium, aperiam minima?</p>
          <b className='text-gray-800'>Our Values</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque nesciunt, voluptas vel saepe eius corrupti veniam vero voluptatem dolorem pariatur porro, nam ducimus laborum nihil, illum expedita ullam eum itaque sequi. Minus, tenetur commodi corporis architecto reprehenderit eaque ducimus neque.</p>
        </div>
      </div>
    </div>
  )
}

export default About
