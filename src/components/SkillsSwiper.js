import { useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper";

import CardSkill from './CardSkill';
import Loader from "./Loader";


const SkillsSwiper = ({type}) => {
    const [skills, setSkills] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        fetch("/api/skills")
        .then((res) => res.json())
        .then((data) => {
            setSkills(data);
            setIsLoaded(true);
        })
    });
  
    if(!isLoaded){
        return <Loader />
    } else{
        return ( 
        <div className='container-fluid'>
            <div id={"mySwiper"+type} className="pt-1 mb-4" >
                {/*<!-- Wrapper for slider items -->*/}
                <Swiper
                    spaceBetween={10}
                    slidesPerView= 'auto'
                    centerSlide= {true}
                    loop={true}
                    speed={2000}
                    fade={true}
                    grabCursor={true}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    navigation={false}
                    style={{
                    "--swiper-navigation-color": "rgba(255, 255, 255, 0.5)",
                    "--swiper-pagination-color": "#fff",
                    "--swiper-pagination-bullet-size": "12px",
                    "--swiper-pagination-bullet-inactive-color": '#fff',
                    "--swiper-pagination-bullet-inactive-opacity": 0.5
                    }}
                    autoplay={{
                        delay: 2000,
                        //pauseOnMouseEnter: true,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        576: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        992: {
                            slidesPerView: 4,
                        },
                        1200: {
                            slidesPerView: 5,
                        },
                        1400: {
                            slidesPerView: 6,
                        },
                    }}
                    modules={[Autoplay, Pagination]}
                    className="w-100"
                    //onHover={() => this.autoplay.stop()}
                >
                    {skills.map((skill) => (
                        <SwiperSlide key={skill._id}>
                            <CardSkill skill={skill} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
        );
    }
};

export default SkillsSwiper;