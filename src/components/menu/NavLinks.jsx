import './Menu.css';

const NavLinks = ({selectMenuOption}, {setOpen}, open) => {

    const onClickMenuOption = (option) => {
        selectMenuOption(option);
    }

    return(
        <div> 
        <ul className='nav_links'>
            <li onClick={()=>onClickMenuOption('home')} >خانه</li>
            <li onClick={()=>onClickMenuOption('aboutUs')}>در باره ما</li>
            <li onClick={()=>onClickMenuOption('aboutWushu')}>در مورد ووشو</li>
            <li onClick={()=>onClickMenuOption('schedule')}>برنامه ها و اوقات تمرین</li>
            <li onClick={()=>onClickMenuOption('gallery')}>گالری</li>
            <li onClick={()=>onClickMenuOption('contact')}>با ما به تماس شوید</li>
        </ul>
    </div>
    );
}

export default NavLinks;