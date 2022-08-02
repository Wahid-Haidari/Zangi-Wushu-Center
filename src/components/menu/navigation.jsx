import NavLinks from "./NavLinks";
import './Menu.css';
import Logo from '../../assets/ZWC.png';


const Navigation = ({selectMenuOption}) => {

    return(
        
        <nav className="navigation" dir="rtl"> 
            <img className='logo' src={Logo} alt='Logo'></img>
            <NavLinks selectMenuOption={selectMenuOption}/>    
        </nav>
    );
}

export default Navigation;