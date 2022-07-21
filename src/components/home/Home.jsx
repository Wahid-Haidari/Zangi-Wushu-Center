import React from 'react';
import './Home.css';
import Image1 from '../../assets/Image1.jpg';
import Image2 from '../../assets/Image2.jpg';
import Image3 from '../../assets/Image3.jpg';

import { Pagination, Navigation, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";


const cover_photos = [ {image: Image1}, {image: Image2}, {image: Image3} ];

const Home = () => {
    return(
        <div className="container">
            <div className=" img__container">
                

                <Swiper className='swiper'
					modules={[Pagination, Navigation, Autoplay]}
				    spaceBetween={40}
				    slidesPerView={1}
				    pagination={{ clickable: true }}
                    autoplay={{delay: 4000}}
				    navigation={true}
				    loop={false}
				    >
					{
						cover_photos.map(({image}, index) => {
							return (
								
								<SwiperSlide key={index}>
									<div>
										<img src={image} alt='cover photo'/>
									</div>
								</SwiperSlide>
								
							)
						})
					}
				</Swiper>




            </div>
            <div className='text'>
                <p dir="rtl">
            مرکز ووشوی زنگی، محیطی سالم و مطمئن برای پرورش استعدادهای فرزندان شما!
                <br/>
مرکز ووشوی زنگی، نخستین  مکانی است که در آن هنرهای رزمی چینی توسط برجسته ترین مربیان این رشته در سطح کشور، به صورت آکادمیک آموزش داده می شود.
در مجموعه برنامه های آموزشی ما، بخش تالو، سبک خانواده‌ی چانگ چوان، از مبتدی تا حرفوی ، قرار دارد.
                </p>
            </div>
        </div>
    )
}

export default Home;