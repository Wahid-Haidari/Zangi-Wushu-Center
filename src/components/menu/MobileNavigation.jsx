import NavLinks from  './NavLinks';
import './Menu.css';
import {FiMenu}  from 'react-icons/fi';
import {useState} from 'react';
import Logo from '../../assets/ZWC.png';

const MobileNavigation = ({selectMenuOption}) => {

    const [open, setOpen] = useState(false);
    return(
        <nav className="mobile_navigation" dir="rtl">
            <img className='logo' src={Logo} alt='Logo'></img>
            <div className='mobile_menu_options'>
                <FiMenu onClick={()=> setOpen(!open)} className='hamburger' size='40px' color='white'/>
                {open && <NavLinks selectMenuOption={selectMenuOption}/>} 
            </div>
        </nav>
    );
}

export default MobileNavigation;