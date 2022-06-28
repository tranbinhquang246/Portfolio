import React, { useState } from 'react';
import Image from '../assets/background.jpg';
import {Link} from 'react-scroll';
import { AiFillHome } from 'react-icons/ai';
import { FaUserGraduate } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import { AiFillTool } from 'react-icons/ai';
import { TiContacts } from 'react-icons/ti';

function Header() {
    const [styleNav, setStyleNav] = useState(false);
    // const [styleMenuHome, setStyleMenuHome] = useState(true);
    // const [styleMenuEducation, setStyleMenuEducation] = useState(false);
    // const [styleMenuSkills, setStyleMenuSkills] = useState(false);
    // const [styleMenuObjective, setStyleMenuObjective] = useState(false);
    // const [styleMenuContact, setStyleMenuContact] = useState(false);

    // const changeStyleMenuHome = () => {
    //     if(!styleMenuHome){
    //         setStyleMenuHome(true);
    //         setStyleMenuEducation(false);
    //         setStyleMenuSkills(false);
    //         setStyleMenuObjective(false);
    //         setStyleMenuContact(false);
    //     }
    // }

    // const changeStyleMenuEducation = () => {
    //     if(!styleMenuEducation){
    //         setStyleMenuHome(false);
    //         setStyleMenuEducation(true);
    //         setStyleMenuSkills(false);
    //         setStyleMenuObjective(false);
    //         setStyleMenuContact(false);
    //     }
    // }

    // const changeStyleMenuSkills = () => {
    //     if(!styleMenuSkills){
    //         setStyleMenuHome(false);
    //         setStyleMenuEducation(false);
    //         setStyleMenuSkills(true);
    //         setStyleMenuObjective(false);
    //         setStyleMenuContact(false);
    //     }
    // }

    // const changeStyleMenuObjects = () => {
    //     if(!styleMenuObjective){
    //         setStyleMenuHome(false);
    //         setStyleMenuEducation(false);
    //         setStyleMenuSkills(false);
    //         setStyleMenuObjective(true);
    //         setStyleMenuContact(false);
    //     }
    // }

    // const changeStyleMenuContacts = () => {
    //     if(!styleMenuContact){
    //         setStyleMenuHome(false);
    //         setStyleMenuEducation(false);
    //         setStyleMenuSkills(false);
    //         setStyleMenuObjective(false);
    //         setStyleMenuContact(true);
    //     }
    // }

    
    const changeStyleNav = () => {
        if(window.scrollY >= 64) {
            setStyleNav(true);
        }else{
            setStyleNav(false);
        }
    }

    window.addEventListener('scroll', changeStyleNav);

    const arr_menu = ['Home','Education', 'Skills', ' Projects','Contact'];
    const arr_icons = [<AiFillHome/>,<FaUserGraduate/>, <GiSkills/>, <AiFillTool/>, <TiContacts/>];
  return (
    <div className="home">
        <div className="flex flex-col items-center w-screen h-screen bg-cover" style={{backgroundImage:`url(${Image})`}}>
            <div className={styleNav ? "flex justify-center items-center w-screen h-16 text-white bg-black fixed ease-in duration-300 z-10":" flex justify-center items-center w-full h-20 fixed ease-out duration-300 z-10"}>
                <div className="hidden lg:flex">
                <ul className="flex flex-wrap justify-center items-center font-medium font-poppins">
                    {/* <li className={styleMenuHome ? "mr-5 border-b-4 pl-2 pr-2 text-slate-500 hover: ease-in-out duration-300" : "mr-5 cursor-pointer pl-2 pr-2 hover: ease-in-out duration-300 "}><Link to='home' smooth={true} duration={500} onClick={changeStyleMenuHome}>Home</Link></li>
                    <li className={styleMenuEducation ? "mr-5 border-b-4 pl-2 pr-2 text-slate-500 hover: ease-in-out duration-300 ":"mr-5 cursor-pointer pl-2 pr-2 hover: ease-in-out duration-300 "}><Link to='education' smooth={true} duration={500} onClick={changeStyleMenuEducation}>Education</Link></li>
                    <li className={styleMenuSkills ? "mr-5 border-b-4 pl-2 pr-2 text-slate-500 hover: ease-in-out duration-300 ":"mr-5 cursor-pointer pl-2 pr-2 hover: ease-in-out duration-300 "}><Link to='skills' smooth={true} duration={500}  onClick={changeStyleMenuSkills}>Skills</Link></li>
                    <li className={styleMenuObjective ? "mr-5 border-b-4 pl-2 pr-2 text-slate-500 hover: ease-in-out duration-300 ":"mr-5 cursor-pointer pl-2 pr-2 hover: ease-in-out duration-300 "}><Link to='projects' smooth={true} duration={500}  onClick={changeStyleMenuObjects}>Projects</Link></li>
                    <li className={styleMenuContact ? "mr-5 border-b-4 pl-2 pr-2 text-slate-500 hover: ease-in-out duration-300 ":"mr-5 cursor-pointer pl-2 pr-2 hover: ease-in-out duration-300"}><Link to='contact' smooth={true} duration={500}  onClick={changeStyleMenuContacts}>Contact</Link></li> */}
                    {
                        arr_menu.map((element, index) => {
                            return (
                                <li className="mr-5 pl-2 pr-2 text-slate-600 hover: ease-in-out duration-300"><Link to={element.toLowerCase()} smooth={true} duration={500}>{}</Link></li>
                            )
                        })
                    }
                </ul>
                </div>
                <div className="lg:hidden">
                <ul className="flex flex-wrap justify-center items-center font-medium font-poppins">
                    {/* <li className={styleMenuHome ? "mr-5 border-b-4 pl-2 pr-2 text-slate-500 hover: ease-in-out duration-300" : "mr-5 cursor-pointer pl-2 pr-2 hover: ease-in-out duration-300 "}><Link to='home' smooth={true} duration={500} onClick={changeStyleMenuHome}><AiFillHome/></Link></li>
                    <li className={styleMenuEducation ? "mr-5 border-b-4 pl-2 pr-2 text-slate-500 hover: ease-in-out duration-300 ":"mr-5 cursor-pointer pl-2 pr-2 hover: ease-in-out duration-300 "}><Link to='education' smooth={true} duration={500} onClick={changeStyleMenuEducation}><FaUserGraduate/></Link></li>
                    <li className={styleMenuSkills ? "mr-5 border-b-4 pl-2 pr-2 text-slate-500 hover: ease-in-out duration-300 ":"mr-5 cursor-pointer pl-2 pr-2 hover: ease-in-out duration-300 "}><Link to='skills' smooth={true} duration={500}  onClick={changeStyleMenuSkills}><GiSkills/></Link></li>
                    <li className={styleMenuObjective ? "mr-5 border-b-4 pl-2 pr-2 text-slate-500 hover: ease-in-out duration-300 ":"mr-5 cursor-pointer pl-2 pr-2 hover: ease-in-out duration-300 "}><Link to='projects' smooth={true} duration={500}  onClick={changeStyleMenuObjects}><AiFillTool/></Link></li>
                    <li className={styleMenuContact ? "mr-5 border-b-4 pl-2 pr-2 text-slate-500 hover: ease-in-out duration-300 ":"mr-5 cursor-pointer pl-2 pr-2 hover: ease-in-out duration-300"}><Link to='contact' smooth={true} duration={500}  onClick={changeStyleMenuContacts}><TiContacts/></Link></li> */}

{
                        arr_icons.map((element, index) => {
                            return (
                                <li className={"mr-5 pl-2 pr-2 cursor-pointer text-slate-500 hover: ease-in-out duration-300 "}><Link to={arr_menu[index].toLowerCase()} smooth={true} duration={500}>{element}</Link></li>
                            )
                        })
                    }

                </ul>
                </div>        
            </div>
            <div className="flex items-center w-4/6 h-full">
                <div className="flex flex-col justify-center w-full h-3/4 font-poppins">
                    <label className="text-[#494949] lg:text-[25px] xs:text-[20px] m-2">Hi, my name is</label>
                    <h1 className="lg:text-[50px] xs:text-[40px] font-bold m-2">Tran Binh Quang</h1>
                    <strong className="text-[#5a617a] lg:text-[30px] xs:text-[20px] m-2">I'm a Beginer in Frontend Development</strong>
                    <p className="text-[#2e2e2e] lg:text-[20px] xs:text-[15px] w-2/3 m-2">I’m a full-stack developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building responsive full-stack web applications.</p>
                </div>
            </div>  
            
    </div>  
    </div>
    
  )
}

export default Header