import React from 'react'
import {BsFacebook, BsInstagram} from 'react-icons/bs'

import {SiGmail} from 'react-icons/si'

    const SocialIcons = () => {
        return (
          <div className='flex justify-center items-center gap-2'>
             <a href='https://www.facebook.com/mai.shandi.1' target='_blank' className='text-3xl hover:opacity-70' >
              <BsFacebook/>
              </a> 
              <a href='https://www.instagram.com/maishandi?igsh=MWo5NmM0eDJzbThvdQ=='
              target='_blank' className='text-3xl hover:opacity-70' >
              <BsInstagram/>
              </a> 

     
          
             <a target='_blank' href='mailto:mybwsf5@gmail.com' className='text-3xl hover:opacity-70'>
              <SiGmail/>
              </a>
          </div>
        )
      }

export default SocialIcons