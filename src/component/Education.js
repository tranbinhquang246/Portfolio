import React from 'react'
import { GrFormPrevious } from 'react-icons/gr';
import { GrFormNext } from 'react-icons/gr';
import School from '../assets/school.png'
import Transcripts from '../assets/transcript.png'
import HK1_1 from '../assets/hk_1_nam_1.png'
import HK2_1 from '../assets/hk_2_nam_1.png'
import HK1_2 from '../assets/hk_1_nam_2.png'
import HK2_2 from '../assets/hk_2_nam_2.png'
import HK1_3 from '../assets/hk_1_nam_3.png'
import HK2_3 from '../assets/hk_2_nam_3.png'
import HK1_4 from '../assets/hk_1_nam_4.png'

function Education() {
    const arr_img = [School, Transcripts, HK1_1, HK2_1,HK1_2, HK2_2, HK1_3,HK2_3, HK1_4];
    const title = ['VietNam-Korean University of Information and Communication Technology','Summary','Term 1 - Year 1','Term 2 - Year 1','Term 1 - Year 2','Term 2 - Year 2','Term 1 - Year 3','Term 2 - Year 3','Term 1 - Year 4'];
  return (
    <div className="education">
        <div className=" flex flex-col items-center w-full h-screen bg-[#0a192f] ">
            <div className="flex w-full h-1/5 justify-center items-end mt-5">
                <p className="text-white font-bold">EDUCATIONS</p>
            </div>
            <div className="flex w-full h-full justify-center items-center">
            
                <GrFormPrevious className="bg-white rounded-lg mr-5 cursor-pointer"></GrFormPrevious>
                <div className="flex flex-row w-5/6 h-5/6 overflow-x-auto overflow-y-hidden scrollbar-hide">
                    {
                        arr_img.map((element, index) => {
                            return (
                                <div className="grow-0 shrink-0 basis-2/3 flex flex-col items-center h-[350px] mr-5 ml-5 font-poppins text-sm">
                                    <div className="text-white mb-2 overflow-hidden">{title[index]}</div>
                                    <div className="w-full h-full">
                                        <img className="w-full h-[300px]" src={element} alt = {element}></img>
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                </div>
                <GrFormNext className="bg-white rounded-lg ml-5 cursor-pointer"></GrFormNext>
            </div>
            
        </div>
        
    </div>
    
  )
}

export default Education