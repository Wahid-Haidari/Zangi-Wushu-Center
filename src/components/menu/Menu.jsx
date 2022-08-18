import React, { useState } from 'react';
import './Menu.css';
import Navigation from './navigation';
import MobileNavigation from './MobileNavigation';

const Menu = ({selectMenuOption}) => {

    return(
        <div className="menu">
            <Navigation selectMenuOption={selectMenuOption}/>
            <MobileNavigation selectMenuOption={selectMenuOption}/>
        </div>
    );
}

export default Menu;
