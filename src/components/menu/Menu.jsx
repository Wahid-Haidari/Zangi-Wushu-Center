import React from 'react';
import './Menu.css';

const Menu = ({selectMenuOption}) => {

    const onClickMenuOption = (option) => {
        selectMenuOption(option);
        console.log("selected" + option);
    
    }
   
    return(
        <ul className="menu">
            <li onClick={()=>onClickMenuOption('home')}>خانه</li>
            <li onClick={()=>onClickMenuOption('aboutUs')}>در باره ما</li>
            <li onClick={()=>onClickMenuOption('aboutWushu')}>در مورد ووشو</li>
            <li onClick={()=>onClickMenuOption('schedule')}>برنامه ها و اوقات تمرین</li>
            <li onClick={()=>onClickMenuOption('contact')}>با ما به تماس شوید</li>
            
        </ul>

    );
}

export default Menu;