import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { StarsCanvas } from '../components'

const ServiceCard = ({ index, title, icon, alt }) => 
   (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div 
        variants={fadeIn('right','spring', index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options = {{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-black-200 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={alt} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>

      </motion.div>
    </Tilt>
  )


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText2}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} text-[#b96d79]`}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('right', 'spring', 0.1, 1)}
        className='text-white'
      >
        "Welcome to our web services and visual media production company, where we use the latest technology to bring your vision to life. We're experts in the MERN stack, a powerful combination of tools that lets us build custom websites and web applications that are fast, reliable, and easy to use. We're confident in our skills and deliverables, and we're always striving to improve and exceed our clients' expectations. Whether you need a new website or want to upgrade your existing one, we have the expertise to help. With a focus on quality and customer satisfaction, we're here to help you succeed online. Let's get started – contact us today!"
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
      {/* <StarsCanvas async /> */}
    </>
  )
}

export default SectionWrapper(About, 'about')