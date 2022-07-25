import React from 'react';
import './Menu.css';
import Navigation from './navigation';
import MobileNavigation from './MobileNavigation';


const Menu = ({selectMenuOption}) => {

    return(
        <div>
            <MobileNavigation selectMenuOption={selectMenuOption}/>
            <Navigation selectMenuOption={selectMenuOption}/>
        </div>

    );
}

export default Menu;