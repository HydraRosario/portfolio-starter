import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'
import { BsInstagram } from 'react-icons/bs';
import { FaYoutube, FaFacebook } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-y-0 h-screen'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3 }}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'
          />
          <motion.div
            variants={fadeIn('left', 0.5 )}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3 }}
            className='flex-1'
          >
            <h2 className='h2 text-gradient'>SOBRE HHHESTUDIOS.</h2>
            <h3 className='h3 mb-4'>Somos un estudio de grabación, programación e inteligencia artificial.</h3>
            <p className='mb-6'>
              Llevamos más de una década grabando artistas, produciendo, mezclando y masterizando música de todos los géneros.
              Ofreciendo servicios y tutorias que te enseñan el proceso completo de un lanzamiento musical, desde la composición hasta la distribución en plataformas digitales.
              También desarrollamos soluciones tecnológicas creando aplicaciones web y herramientas impulsadas por inteligencia artificial para optimizar procesos y mejorar la eficiencia en diversos sectores.
              Nuestro enfoque multidisciplinario nos permite combinar creatividad y tecnología para ofrecer soluciones integrales que satisfacen las necesidades de nuestros clientes.
            </p>
            <div className='flex gap-x-6 lg:gap-x-10 mb-6'>
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
            <div className='flex gap-x-8 items-center mb-12'>
              <button className='btn btn-lg'>
                <a href='https://www.instagram.com/hhhestudios/' target='_blank' rel='noopener noreferrer'>
                  <BsInstagram/>
                </a>
              </button>
              <button className='btn btn-lg'>
                <a href='https://www.youtube.com/@HHHESTUDIOS' target='_blank' rel='noopener noreferrer'>
                  <FaYoutube/>
                </a>
              </button>
              <button className='btn btn-lg'>
                <a href='https://www.facebook.com/profile.php?id=61579998417355' target='_blank' rel='noopener noreferrer'>
                  <FaFacebook/>
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
