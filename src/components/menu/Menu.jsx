import './Menu.css';
import Navigation from './navigation';
import MobileNavigation from './MobileNavigation';

const Menu = ({selectMenuOption}) => {


    return(
        <div class="sticky top-0 bg-custom-red z-10 w-full">
            <Navigation selectMenuOption={selectMenuOption}/>
            <MobileNavigation selectMenuOption={selectMenuOption}/>
        </div>
    );
}

export default Menu;
