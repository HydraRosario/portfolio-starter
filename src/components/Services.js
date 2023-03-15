import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const services = [
  {
    name: 'Development',
    description: 'Contact me through Linkedin and I will be at your disposal for any project or solution you need, I am open to work and my fees as a junior developer are chatty. Click on Learn More.',
    link: 'Learn more'
  },
  {
    name: 'Production / Management',
    description: 'Contact me through Instagram and I will be at your disposal for any musical project or production that you want to carry out, I am open to work and my fees as a music producer are not that high. Click on the Arrow.',
    link: 'Learn more'
  },
  {
    name: 'AI Application',
    description: 'I am still a junior as far as prompt developer is concerned, however you can click both learn more and the arrow to contact me for any AI query.',
    link: 'Learn more'
  }
]

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text & image */}
          <motion.div
            variants={fadeIn('right', 0.3 )}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
          >
            <h2 className='h2 text-accent mb-6'>What I Do.</h2>
            <h3 className='h3 max-w-[455px] mb-6'>Together we could do a project that changes the lives of thousands of people.</h3>
            <button className='btn btn-sm'>
            <a href='https://www.linkedin.com/in/HydraRosario/'>
                  See my work
                </a>
            </button>
          </motion.div>
          {/* services list*/}
          <motion.div
          variants={fadeIn('left', 0.5 )}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3 }}
          className='flex-1'>
            {/* services list*/}
            <div>
              {services.map((service, index) => {
                // destructure service
                const { name, description, link } = service;
                return (
                  <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight'>{description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a href='https://www.instagram.com/hhhestudios/' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'> <BsArrowUpRight/> </a>
                      <a href='https://www.linkedin.com/in/HydraRosario/' className='text-gradient text-sm'> {link} </a>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default Services;
