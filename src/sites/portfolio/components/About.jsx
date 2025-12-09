import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations'
import { BsInstagram } from 'react-icons/bs';
import { FaYoutube, FaFacebook, FaTiktok } from 'react-icons/fa';

const About = () => {
    const [ref, inView] = useInView({ threshold: 0.5 });
    return (
        <section className='section' id='about' ref={ref}>
            <div className='container mx-auto'>
                <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-y-0 lg:h-screen'>
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className='hidden lg:flex flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'
                    />
                    <motion.div
                        variants={fadeIn('left', 0.5)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className='flex-1'
                    >
                        <h2 className='h2 text-gradient -mt-6'>SOBRE HHHESTUDIOS.</h2>
                        <h3 className='h3 mb-3 text-sm md:text-base'>Somos un estudio de grabación, programación e inteligencia artificial.</h3>
                        <p className='mb-6'>
                            Un estudio multidisciplinario: producción musical, desarrollo web y soluciones con IA. Creamos productos y herramientas que ayudan a lanzar y optimizar proyectos.
                        </p>
                        <div className='flex flex-wrap justify-center gap-x-6 gap-y-6 mb-6 lg:justify-start lg:gap-x-10'>
                            <div>
                                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                                    {inView ? <CountUp start={0} end={12} duration={3} /> : null}
                                </div>
                                <div className='font-primary text-sm tracking-[2px]'>
                                    Años de <br />
                                    Producción
                                </div>
                            </div>
                            <div>
                                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                                    {inView ? <CountUp start={0} end={500} duration={3} /> : null}+
                                </div>
                                <div className='font-primary text-sm tracking-[2px]'>
                                    Proyectos <br />
                                    Completados
                                </div>
                            </div>
                            <div>
                                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                                    {inView ? <CountUp start={650} end={700} duration={1} /> : null}+
                                </div>
                                <div className='font-primary text-sm tracking-[2px]'>
                                    Clientes <br />
                                    Satisfechos
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-wrap justify-center gap-4 items-center mb-12'>
                            <button className='btn btn-lg flex items-center justify-center'>
                                <a className='flex items-center justify-center' href='https://www.instagram.com/hhhestudios/' target='_blank' rel='noopener noreferrer'>
                                    <BsInstagram className='w-5 h-5' />
                                </a>
                            </button>
                            <button className='btn btn-lg flex items-center justify-center'>
                                <a className='flex items-center justify-center' href='https://www.youtube.com/@HHHESTUDIOS' target='_blank' rel='noopener noreferrer'>
                                    <FaYoutube className='w-5 h-5' />
                                </a>
                            </button>
                            <button className='btn btn-lg flex items-center justify-center'>
                                <a className='flex items-center justify-center' href='https://www.facebook.com/profile.php?id=61579998417355' target='_blank' rel='noopener noreferrer'>
                                    <FaFacebook className='w-5 h-5' />
                                </a>
                            </button>
                            <button className='btn btn-lg flex items-center justify-center'>
                                <a className='flex items-center justify-center' href='https://www.tiktok.com/@hhhestudios' target='_blank' rel='noopener noreferrer'>
                                    <FaTiktok className='w-5 h-5' />
                                </a>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
