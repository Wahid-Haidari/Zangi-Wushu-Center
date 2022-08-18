import NavLinks from  './NavLinks';
import './Menu.css';
import {FiMenu}  from 'react-icons/fi';
import {IoMdClose}  from 'react-icons/io';

import {useState} from 'react';
import Logo from '../../assets/ZWC.png';

const MobileNavigation = ({selectMenuOption}) => {

    const [open, setOpen] = useState(false);


    const hamburgerIcon = <FiMenu onClick={()=> setOpen(!open)} className='hamburger' size='40px' color='white'/>
    const closeIcon = <IoMdClose onClick={()=> setOpen(!open)} className='close_icon' size='40px' color='white'/>

    return(
        <nav className="mobile_navigation" dir="rtl">
            <img className='logo' src={Logo} alt='Logo'></img>
            <div className='mobile_menu_options'>
                {open ? closeIcon:hamburgerIcon}
                {open && <NavLinks setOpen={setOpen} open= "open" selectMenuOption={selectMenuOption}/>} 
            </div>
        </nav>
    );
}

export default MobileNavigation;