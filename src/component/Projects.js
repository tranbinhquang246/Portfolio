import React from 'react'
import PRJ1 from '../assets/projects/prj-1.webp'

function Projects() {
  const arr_img = [PRJ1,PRJ1,PRJ1,PRJ1,PRJ1];
  const arr_title = ['Todolist','Weather App','Exchange Rates','Random Meal Generator','Portfolio'];
  const arr_tech = ['ReactJS, NodeJS, TailwindCSS, API','ReactJS,TailwindCSS, API (openweathermap)','ReactJS, TailwindCSS','NextJS, TailwindCSS, API (themealdb)','5'];
  const arr_des = ['Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries']
  const arr_link_github = ['https://github.com/tranbinhquang246/todolist_React','https://github.com/tranbinhquang246/Wheather_App_ReactJS','https://github.com/tranbinhquang246/Exchange_Rates_ReactJS','https://github.com/tranbinhquang246/random_meal_generator','https://github.com/tranbinhquang246/portfolio'];
  const arr_link_demo = ['','','https://exchange-rates-react-js.vercel.app/','','']
  return (
    <div className="projects">
        <div className="flex flex-col justify-center items-center w-full bg-[#0a192f]">
              <strong className="text-2xl border-b-2 pb-2 mt-20 text-white">Personal Projects</strong>
              <div className="flex w-full flex-wrap justify-center">
                  {
                    arr_img.map((element, index) => {
                      return (
                          <div className="flex flex-col w-[350px] p-5 items-center">
                            <img src={element} className="w-full rounded-t-lg" alt={index}></img>
                            <p className="text-white font-poppins text-sm mt-2">{arr_title[index]}</p>
                            <p className="text-slate-500 font-poppins text-[12px]">{arr_tech[index]}</p>
                            <p className="text-white font-poppins text-[14px]">{arr_des[0]}</p>
                            <div className="flex justify-around w-full mt-5">
                              <a href={arr_link_github[index]} className={arr_link_github[index] ? " w-2/5 hover:bg-blue-900 text-white text-[15px] text-center p-2 border border-blue-700 rounded": "hidden"}>
                                Github
                              </a>
                              
                              <a href={arr_link_demo[index]} className={arr_link_demo[index] ? " w-2/5 hover:bg-blue-900 text-white text-[15px] text-center p-2 border border-blue-700 rounded": "hidden"}>
                                Demo
                              </a>
                            </div>
                          </div>
                      )
                    })
                  }
              </div>
        </div>
    </div>
  )
}

export default Projects