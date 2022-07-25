import NavLinks from  './NavLinks';
import './Menu.css';
import {FiMenu}  from 'react-icons/fi';
import {useState} from 'react';

const MobileNavigation = ({selectMenuOption}) => {

    const [open, setOpen] = useState(false);
    return(
        <nav className="menu mobile_navigation">
            <FiMenu onClick={()=> setOpen(!open)}className='hamburger' size='40px' color='white'/>
            {open && <NavLinks selectMenuOption={selectMenuOption}/>}
            
        </nav>
    );
}

export default MobileNavigation;