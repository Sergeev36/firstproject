import {NavLink} from "react-router-dom";
import mod from './Navbar.module.css';



const Navbar = () => {
    return (
        <div className={mod.nav}>
            <div className={mod.link}><NavLink to="/profile" activeClassName={mod.active}>Profile</NavLink></div>
            <div className={mod.link}><NavLink to="/dialogs" activeClassName={mod.active}>Messages</NavLink></div>
            <div className={mod.link}><NavLink to="/news" activeClassName={mod.active}>News</NavLink></div>
            <div className={mod.link}><NavLink to="/music" activeClassName={mod.active}>Music</NavLink></div>
            <div className={mod.link}><NavLink to="/settings" activeClassName={mod.active}>Setting</NavLink></div>

        </div>

    )
}

export default Navbar;