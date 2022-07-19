import React from 'react';
import './Home.css';
import Khavari_Jian from '../../assets/khavari_jian.jpg';

const Home = () => {
    return(
        <>
            <div className="img__container">
                <img src={Khavari_Jian} alt="Khavari"></img>
            </div>
            
            <p dir="rtl">
            مرکز ووشوی زنگی، محیطی سالم و مطمئن برای پرورش استعدادهای فرزندان شما!
        <br/>
مرکز ووشوی زنگی، نخستین  مکانی است که در آن هنرهای رزمی چینی توسط برجسته ترین مربیان این رشته در سطح کشور، به صورت آکادمیک آموزش داده می شود.
در مجموعه برنامه های آموزشی ما، بخش تالو، سبک خانواده‌ی چانگ چوان، از مبتدی تا حرفوی ، قرار دارد.
            </p>
        </>
    )
}

export default Home;