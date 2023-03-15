import React from 'react';
import Image from '../assets/avatar2.png';
import { FaGithub, FaYoutube } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden' whileInView={'show'}
              viewport={{once: false, amount: 0.7}}
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'
            >
              HYDRA <span>ROSARIO</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden' whileInView={'show'}
              viewport={{once: false, amount: 0.7}}
              className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'
            >
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation sequence={[
                'Developer',
                2000,
                'Producer',
                2000,
                'Prompt Engineer',
                2000
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial='hidden' whileInView={'show'}
              viewport={{once: false, amount: 0.7}}
              className='mb-8 max-w-lg mx-auto lg:mx-0'
            >
            My company is a monster with three heads, the first is focused on music production, the second head is focused on web development and the third is focused on Artificial Intelligence.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden' whileInView={'show'}
              viewport={{once: false, amount: 0.7}}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
            >
              <button className='btn btn-lg'>
                <a href='https://www.linkedin.com/in/HydraRosario/'>
                  Contact me
                </a>
              </button>
              <button className='btn btn-lg'>
              <a href='https://www.youtube.com/@HydraRosario'>
                <FaYoutube/>
              </a>
              </button>
              <button className='btn btn-lg'>
              <a href='https://github.com/HydraRosario'>
                <FaGithub/>
              </a>
              </button>
              <button className='btn btn-lg'>
              <a href='https://www.instagram.com/hydra_rosario/'>
                <BsInstagram/>
              </a>
              </button>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial='hidden' whileInView={'show'}
              viewport={{once: false, amount: 0.7}}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'
            >
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial='hidden' whileInView={'show'}
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
              <img src={Image} alt='' height='400' width='400'/>
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default Banner;
