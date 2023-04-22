import React,  { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../style'
import { navLinks } from '../constants'
import { alduxx_color_logo, menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState('')

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center  fixed top-0 z-20 bg-primary`} 
    >
      <div
        className='w-full flex justify-between items-center max-w-7xl mx-auto'
      >
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <img 
            src={alduxx_color_logo}
            alt='alduxx_logo'
            className='w-16 h-16 object-contain'
          />
          <p className="text-cadetGrey-100 text-[18px] font-bold cursor-pointer flex">Alduxx: Angles / Aspects   <span className='sm:block hidden'>&nbsp;|&nbsp;Media Solutions</span></p>

        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              className={`${ 
                active === nav.title 
                ? 'text-pink-100' 
                : 'text-cadetGrey-100' 
              }   hover:text-white text-[18px] font-medium cursor-pointer`}
              
              onClick={() => {
                setToggle(!toggle)
                setActive(nav.title)
              }}
            >
              <a 
                href={`#${nav.id}`}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items center'>
              <img
                src={toggle ? close : menu}
                alt='menu'
                className='w-[28px] h-[28px] object-contain cursor-pointer'
                onClick={() => { setToggle(!toggle) }}
              />
              
              <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                <ul className='list-none flex justify-end items-start flex-col gap-4'>
                  {navLinks.map((nav) => (
                    <li
                      className={`${ 
                        active === nav.title 
                        ? 'text-pink-100' 
                        : 'text-cadetGrey-100' 
                      }   hover:text-white text-[18px] font-medium cursor-pointer`}
                      
                      onClick={() => {
                        setToggle(!toggle)
                        setActive(nav.title)
                      }}
                    >
                      <a 
                        href={`#${nav.id}`}
                      >
                        {nav.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar