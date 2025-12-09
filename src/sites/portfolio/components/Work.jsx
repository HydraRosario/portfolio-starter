import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations';
import Img1 from '../assets/portfolio-img1.GIF';
import Img2 from '../assets/portfolio-img2.GIF';
import Img3 from '../assets/portfolio-img3.GIF';
import Img4 from '../assets/playlist.GIF';

const Work = () => {
    return (
        <section className='section' id='work'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center'>
                    <h2 className='h2 leading-tight text-gradient text-center mb-10'>
                        Nuestros últimos <br />
                        trabajos
                    </h2>
                </div>
                <div className='flex flex-col lg:flex-row gap-x-10'>
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className='flex-1 flex flex-col gap-y-10 mb-10 lg:mb-0'
                    >
                        {/* image */}
                        <a href='https://youtube.com/playlist?list=PLfKmUloQO4md8jroBmdsiqA13a5F74Akv&si=QKNmQmjz7KjJC_JT' target='_blank' rel='noopener noreferrer'>
                            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                                {/* overlay */}
                                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                                {/* img */}
                                <img className='group-hover:scale-125 transition-all duration-500 h-[250px] w-full object-cover' src={Img4} alt='' />
                                {/* pretitle */}
                                <div className='absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-500 z-50'>
                                    <span className='text-gradient'>Producciones Musicales</span>
                                </div>
                            </div>
                        </a>
                        {/* image */}
                        <a href='https://www.plasmaticorosario.com/' target='_blank' rel='noopener noreferrer'>
                            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                                {/* overlay */}
                                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                                {/* img */}
                                <img className='group-hover:scale-125 transition-all duration-500 h-[250px] w-full object-cover' src={Img1} alt='' />
                                {/* pretitle */}
                                <div className='absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-500 z-50'>
                                    <span className='text-gradient'>Plasmático Rosario</span>
                                </div>
                            </div>
                        </a>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('left', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className='flex-1 flex flex-col gap-y-10'
                    >
                        {/* image */}
                        <a href='https://r-mini-caffe-bar.vercel.app/' target='_blank' rel='noopener noreferrer'>
                            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                                {/* overlay */}
                                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                                {/* img */}
                                <img className='group-hover:scale-125 transition-all duration-500 h-[250px] w-full object-cover' src={Img2} alt='' />
                                {/* pretitle */}
                                <div className='absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-500 z-50'>
                                    <span className='text-gradient'>Rímini Caffe Bar</span>
                                </div>
                            </div>
                        </a>
                        {/* image */}
                        <a href='https://vibeshoes-ten.vercel.app/' target='_blank' rel='noopener noreferrer'>
                            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                                {/* overlay */}
                                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                                {/* img */}
                                <img className='group-hover:scale-125 transition-all duration-500 h-[250px] w-full object-cover' src={Img3} alt='' />
                                {/* pretitle */}
                                <div className='absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-500 z-50'>
                                    <span className='text-gradient'>Vibe Shoes - tienda de zapatillas</span>
                                </div>
                            </div>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
};

export default Work;
