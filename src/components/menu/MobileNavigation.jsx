import NavLinks from  './NavLinks';
import './Menu.css';
import {FiMenu}  from 'react-icons/fi';
import {IoMdClose}  from 'react-icons/io';

import {useState} from 'react';
import Logo from '../../assets/ZWC.png';

const MobileNavigation = ({selectMenuOption}) => {

    const [open, setOpen] = useState(false);


    const hamburgerIcon = <FiMenu onClick={()=> setOpen(!open)} className='hamburger text-center' size='40px' color='white'/>
    const closeIcon = <IoMdClose onClick={()=> setOpen(!open)} className='close_icon' size='40px' color='white'/>

    return(
        <nav className="mobile_navigation" dir="rtl">
            <img className='logo' src={Logo} alt='Logo'></img> 
            <div className='flex flex-col'>
                <div className='flex justify-center'>
                    {open ? closeIcon:hamburgerIcon}
                </div>
                <div>
                    {open && <NavLinks setOpen={setOpen} open= "open" selectMenuOption={selectMenuOption}/>}
                </div>
                 
            </div>
        </nav>
    );
}

export default MobileNavigation;