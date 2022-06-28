import React from 'react'
import { useState, useRef, useEffect } from 'react';
import { GrFormPrevious } from 'react-icons/gr';
import { GrFormNext } from 'react-icons/gr';
import School from '../assets/school.png'
import Transcripts from '../assets/transcript.png'
// import HK1_1 from '../assets/hk_1_nam_1.png'
// import HK2_1 from '../assets/hk_2_nam_1.png'
// import HK1_2 from '../assets/hk_1_nam_2.png'
// import HK2_2 from '../assets/hk_2_nam_2.png'
// import HK1_3 from '../assets/hk_1_nam_3.png'
// import HK2_3 from '../assets/hk_2_nam_3.png'
// import HK1_4 from '../assets/hk_1_nam_4.png'

function Education() {
    const arr_img = [School, Transcripts];
    const title = ['VietNam-Korean University of Information and Communication Technology','Summary: 3.05/4','Term 1 - Year 1','Term 2 - Year 1','Term 1 - Year 2','Term 2 - Year 2','Term 1 - Year 3','Term 2 - Year 3','Term 1 - Year 4'];
    const maxScrollWidth = useRef(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carousel = useRef(null);

    const movePrev = () => {
        if (currentIndex > 0) {
        setCurrentIndex((prevState) => prevState - 1);
        }
    };

    const moveNext = () => {
        if (
        carousel.current !== null &&
        carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
        ) {
        setCurrentIndex((prevState) => prevState + 1);
        }
    };

    const isDisabled = (direction) => {
        if (direction === 'prev') {
        return currentIndex <= 0;
        }

        if (direction === 'next' && carousel.current !== null) {
        return (
            carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
        );
        }

        return false;
    };

    useEffect(() => {
        if (carousel !== null && carousel.current !== null) {
        carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
        }
    }, [currentIndex]);

    useEffect(() => {
        maxScrollWidth.current = carousel.current
        ? carousel.current.scrollWidth - carousel.current.offsetWidth
        : 0;
    }, []);

  return (
    <div className="education">
        <div className=" flex flex-col items-center w-full bg-[#0a192f] ">
            <div className="flex w-full justify-center items-end mt-20 mb-10">
                <p className="text-white font-bold">EDUCATIONS</p>
            </div>

            <div className="lg:hidden">
                <div className="flex flex-wrap justify-center items-center mb-20">
                    {
                        arr_img.map((element, index) => {
                            return (
                                <div className="flex flex-col justify-center items-center mb-5">
                                    <p className="mb-2 text-white text-center">{title[index]}</p>
                                    <img className="w-4/5 h-full" src={element} alt={title[index]}></img>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="hidden lg:block">
            <div className="flex w-full h-full justify-center items-center mb-20 ">
                <GrFormPrevious className="bg-white rounded-lg mr-5 cursor-pointer" onClick={movePrev} disabled={isDisabled('prev')}></GrFormPrevious>
                <div className="flex flex-row w-4/6 h-5/6 scroll-smooth overflow-x-auto overflow-y-hidden scrollbar-hide text-center" ref={carousel}>
                         {
                        arr_img.map((element, index) => {
                            return (
                                <div className="grow-0 shrink-0 basis-full flex flex-col items-center justify-center pl-5 pr-5 font-poppins text-sm" key={index}>
                                    <div className="text-white mb-2 overflow-hidden">{title[index]}</div>
                                    <img className="w-full h-[300px]" src={element} alt = {title[index]}></img>
                                </div>
                            )
                        })
                    }                    
                </div>
                <GrFormNext className="bg-white rounded-lg ml-5 cursor-pointer" onClick={moveNext} disabled={isDisabled('next')}></GrFormNext>
            </div>
            </div>
            
        </div>
        
    </div>
    
  )
}

export default Education