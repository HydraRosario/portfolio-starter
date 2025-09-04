import React from 'react';
import Image from '../assets/avatar2.png';
import { FaGithub, FaYoutube } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'

const Banner = () => {
  return (
  <section className='min-h-[70vh] lg:min-h-[60vh] flex items-start pt-8' id='home'>
      <div className='container mx-auto'>
  <div className='flex flex-col gap-y-4 lg:flex-row lg:items-start lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left mt-0'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden' whileInView={'show'}
              viewport={{once: false, amount: 0.7}}
              className='text-[40px] font-bold leading-[0.8] lg:text-[80px]'
            >
              HYDRA <span>ROSARIO</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden' whileInView={'show'}
              viewport={{once: false, amount: 0.7}}
              className='mb-6 text-[28px] lg:text-[48px] font-secondary font-semibold uppercase leading-[1]'
            >
              <span className='text-white mr-4'>Soy</span>
              <TypeAnimation sequence={[
                'Productor',
                2000,
                'Desarrollador',
                2000,
                'Ingeniero en IA',
                2000
              ]}
              speed={50}
              className='text-gradient'
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
            Transformo ideas en páginas web, música y tecnología. Si buscas innovación, creatividad y soluciones que marcan la diferencia, HHHESTUDIOS es el lugar. Scrollea para ver cómo puedo potenciar tu proyecto.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden' whileInView={'show'}
              viewport={{once: false, amount: 0.7}}
              className='flex max-w-max gap-x-6 items-center mb-6 mx-auto lg:mx-0'
            >
              <button className='btn btn-lg'>
                <a href='https://www.instagram.com/hydra_rosario/' target='_blank' rel='noopener noreferrer'>
                  <BsInstagram/>
                </a>
              </button>
              <button className='btn btn-lg'>
                <a href='https://www.youtube.com/@HydraRosario' target='_blank' rel='noopener noreferrer'>
                  <FaYoutube/>
                </a>
              </button>
              <button className='btn btn-lg'>
                <a href='https://github.com/HydraRosario' target='_blank' rel='noopener noreferrer'>
                  <FaGithub/>
                </a>
              </button>
              <button className='btn btn-lg'>
                <a href='https://www.tiktok.com/@hhhestudios_' target='_blank' rel='noopener noreferrer'>
                  <FaTiktok/>
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
