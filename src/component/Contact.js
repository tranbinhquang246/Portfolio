import React from 'react'

import FB_IMG from '../assets/contact/fb.webp'
import Gmail_IMG from '../assets/contact/gmail.png'
import LK_IMG from '../assets/contact/lkn.png'
import Zalo_IMG from '../assets/contact/zalo.webp'

function Contact() {
    const handleClickEmail = () => {
        navigator.clipboard.writeText('quangtran2462000@gmail.com')
        alert('Email copied to clipboard');
        window.open('mailto:email@example.com');
    }
  return (
    <div className="contact">
        <div className=" flex flex-col items-center w-full">
            <div className=" flex items-center w-4/6 mt-14 mb-14">
                <div className="flex flex-col justify-center items-center w-full h-5/6 bg-[#0a192f] font-poppins"> 
                    <div className="flex flex-col justify-center items-centerh-1/2 w-1/2 text-white mt-14">
                        <strong className="text-2xl border-b-2 pb-2">Contact</strong>
                        <p className="mt-2 text-xs">You can contact me with</p>
                    </div>
                    <div className="flex justify-center items-center h-1/2 w-full flex-wrap mb-14">
                        <a href="https://www.facebook.com/tbquang.dn.2000"><img src={FB_IMG} className="w-[100px] h-[100px] m-5 transform ease-in-out hover:scale-110 duration-300" alt=''></img></a>
                        <a href="mailto:email@example.com"><img src={Gmail_IMG} className="w-[100px] h-[100px] m-5 transform ease-in-out hover:scale-110 duration-300" alt='' onClick={handleClickEmail}></img></a>
                        <a href="https://zalo.me/0966313927"><img src={Zalo_IMG} className="w-[100px] h-[100px] m-5 transform ease-in-out hover:scale-110 duration-300" alt=''></img></a>
                        <a href="https://www.linkedin.com/in/quang-tr%E1%BA%A7n-9b0447236/"><img src={LK_IMG} className="w-[100px] h-[100px] m-5 transform ease-in-out hover:scale-110 duration-300" alt=''></img></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact