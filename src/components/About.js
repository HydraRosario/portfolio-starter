import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5
  })
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-y-0 h-screen'>
          <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3 }}
          className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></motion.div>
          <motion.div
          variants={fadeIn('left', 0.5 )}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3 }}
          className='flex-1'>
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>I'm a Freelance Developer/Producer/Prompt Engineer.</h3>
            <p className='mb-6'>
            My main goals are to create solutions for problems that many already consider solved, but there are always more efficient ways to do things and that's something I learned from programing.
            And change the world of web developers with new perspectives, efficient solutions and above all, teamwork.
            I am a natural leader so I am a great promoter of diversity, I believe that all the answers can be found by reaching a mediation between all the parties, no matter how different they are from each other, the more different, the better the result.
            Is almost always my job to make the parts work well and find it pleasant to work with each other.
            </p>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    inView ?
                    <CountUp start={0} end={10} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br />
                  Production
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    inView ?
                    <CountUp start={0} end={6} duration={3} /> : null}
                    k+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Hours of <br />
                  Coding
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    inView ?
                    <CountUp start={650} end={700} duration={1} /> : null}
                    +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Satisfied <br />
                  Customers
                </div>
              </div>
              <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'>
                <a href='https://www.linkedin.com/in/HydraRosario/'>
                  Contact me
                </a>
              </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default About;
