import React from 'react'
import Logo from '../../../public/images/logo.png'
import Image from 'next/image'

function Footer() {
  return (
    <footer className='footer border z-10 border-l-transparent border-b-transparent border-r-transparent text-white border-t-[#33353f] '>
        <div className=' p-8 flex justify-between'>
            <span>
            <Image src={Logo} alt='logo' width={50} height={50} />
            </span>
            <p className='text-slate-200'>All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer