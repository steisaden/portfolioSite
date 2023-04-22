import {motion} from 'framer-motion'
import { styles } from '../style'
import { ComputerCanvas} from './canvas'
// import { StarsCanvas } from '../components' 


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[80px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center '>
          <div className='w-5 h-5 rounded-full bg-[#b96d79]'/>
          <div className='w-1 sm:h-80 h-40 yellow-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>Alduxx: <span className='text-[#e69ba7]'>Angles / Aspects</span></h1>
          <p className={`${styles.heroSubText} mt-2`}>I offer elegant, functional web solutions and captivating photography services. Discover my best projects and let's bring your vision to life!</p>
        </div>
      </div>

      <ComputerCanvas />

      <div className='absolute xs:bottom-[88px] bottom-22 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType:'loop'
              }}
              className='w-3 h-4 rounded-full bg-primary mb-1'
            >
            </motion.div>
          </div>
        </a>
      </div>
      {/* <StarsCanvas /> */}
    </section>
  )
}

export default Hero