import NavLinks from "./NavLinks";
import './Menu.css';


const Navigation = ({selectMenuOption}) => {

    return(
        <nav className="menu navigation"> 
            <NavLinks selectMenuOption={selectMenuOption}/>
        </nav>
    );
}

export default Navigation;