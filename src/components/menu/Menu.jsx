import React from 'react';
import './Menu.css';
import Logo from '../../assets/ZWC.png';

const Menu = ({selectMenuOption}) => {

    const onClickMenuOption = (option) => {
        selectMenuOption(option);
        console.log("selected" + option);
    
    }
   
    return(
        <div>
            
            <ul className="menu">
                <li><img className='logo' src={Logo} alt='' onClick={()=>onClickMenuOption('home')} ></img></li>
                <li onClick={()=>onClickMenuOption('home')}>خانه</li>
                <li onClick={()=>onClickMenuOption('aboutUs')}>در باره ما</li>
                <li onClick={()=>onClickMenuOption('aboutWushu')}>در مورد ووشو</li>
                <li onClick={()=>onClickMenuOption('schedule')}>برنامه ها و اوقات تمرین</li>
                <li onClick={()=>onClickMenuOption('gallery')}>گالری</li>
                <li onClick={()=>onClickMenuOption('contact')}>با ما به تماس شوید</li>
            
            </ul>
        </div>

    );
}

export default Menu;