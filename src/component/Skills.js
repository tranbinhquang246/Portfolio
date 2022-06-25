import React from 'react'
import CSS_IMG from '../assets/skills/css.png'
import HTML_IMG from '../assets/skills/html.png'
import JS_IMG from '../assets/skills/javascript.png'
import React_IMG from '../assets/skills/react.png'
import Tailwind_IMG from '../assets/skills/tailwind.png'
import Node_IMG from '../assets/skills/nodejs.png'
import API_IMG from '../assets/skills/api.png'
import Git_IMG from '../assets/skills/github.png'
import Tooltip from '@mui/material/Tooltip';


function Skills() {
    const arr_img = [CSS_IMG,HTML_IMG,JS_IMG,React_IMG,Tailwind_IMG,Node_IMG,API_IMG,Git_IMG]
    //cos thể thay bằng đoạn văn bản dài bao nhiêu cũng được vì default width = 300px
    const arr_title = ['CSS', 'HTML', 'Javascript', 'ReactJS', 'TailwindCSS', 'NodeJS','API/RestAPI', 'Git/Github']
  return (
    <div className="skills">
        <div className=" flex flex-col items-center w-full h-screen">
            <div className=" flex items-center w-4/6 h-full ">
                <div className="flex flex-col justify-center items-center w-full h-5/6 bg-[#0a192f] font-poppins "> 
                    <div className="flex flex-col justify-center items-centerh-1/2 w-1/2 text-white">
                        <strong className="text-2xl border-b-2 pb-2">Skills</strong>
                        <p className="mt-2 text-xs">These are the technologies I've worked with</p>
                    </div>
                    <div className="flex justify-center items-center h-1/2 w-3/4 flex-wrap overflow-y-scroll scrollbar-hide">
                        {
                            arr_img.map((element, index) => {
                                return (
                                    <div>
                                        <Tooltip title={arr_title[index]} placement="bottom">
                                            <img src={element} className="w-[100px] h-[100px] m-5 transform ease-in-out hover:scale-110 duration-300" alt={index}></img>
                                        </Tooltip>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills