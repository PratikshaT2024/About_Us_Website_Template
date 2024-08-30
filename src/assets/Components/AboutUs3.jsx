import React,{useEffect} from 'react'
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import img3 from "../Images/A3.jpg"


function AboutUs3() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
    <div className='lg:justify-center lg:items-center mt-10  '>
      <div className='h-40 bg-[#F6F3E6] lg:h-44 font-serif '>
        <div className='pt-20 pr-60 text-2xl lg:text-4xl lg:text-left lg:ml-8 '>
          <h1 className='lg:mt-0 '>About Us</h1>
        </div>
        <div>
          <p className='pr-60 text-xl lg:text-left lg:ml-8 '>Our Journey</p>
        </div>
      </div>

      <div className="max-w-screen-xl  mt-0 bg-[#FEFFFB] flex flex-col lg:flex-row items-center justify-center lg:ml-32 ">

        <div className=" sm:w-1/2 p-5 text-start lg:text-right lg:justify-center" data-aos="fade-up">
          <div className="">
            <h2 className="my-4  text-2xl font-serif lg:text-3xl text-black text-start mt-3">
              Leading to High Quality Food Products Manufacturing Company in India <span className="text-amber-900"></span>
            </h2>
            <p className="text-black text-justify font-serif">
              Oncology is the branch of medicine that deals with the prevention, diagnosis, and treatment of cancer.
              It encompasses a wide range of disciplines, including medical oncology, surgical oncology, and radiation oncology.
              Medical oncologists specialize in using chemotherapy, targeted therapy, immunotherapy, and other medications to treat cancer.
              Surgical oncologists perform surgical procedures to remove tumors and cancerous tissues,
              often working in conjunction with other specialists. Radiation oncologists use radiation therapy
              to target and destroy cancer cells while minimizing damage to surrounding healthy tissues.
            </p>
            <h2 className="my-4  text-2xl font-serif lg:text-3xl text-black text-start mt-3">
              SINCE 2024<span className="text-amber-900"></span>
            </h2>
          </div>
        </div>
        <div className="p-3 lg:w-1/2 mt-3 flex justify-center   lg:justify-center" data-aos="fade-up">
          <div className="image text-center  lg:mr-20   ">
            <img className="h-[40vh] w-[40vh] lg:h-[80vh] lg:w-[90vh]  " src={img3}alt="Oncology" />
          </div>
        </div>
      </div>
    </div>
    

    </>
  )
}

export default AboutUs3
