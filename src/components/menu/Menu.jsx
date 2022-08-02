import React from 'react';
import './Menu.css';
import Navigation from './navigation';
import MobileNavigation from './MobileNavigation';
import Logo from '../../assets/ZWC.png';

const Menu = ({selectMenuOption}) => {

    return(
        <div className="menu">
            <MobileNavigation selectMenuOption={selectMenuOption}/>
            <Navigation selectMenuOption={selectMenuOption}/>
        </div>
    );
}

export default Menu;