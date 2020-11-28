import {NavLink} from "react-router-dom";
import mod from './Navbar.module.css';
import Friends from "../Friends/Friends";



const Navbar = (props) => {

    let friendsElements = props.state.friends.map(n =><Friends name={n.name} avatar={n.avatar}/>)

    return (
        <div className={mod.nav}>
            <div className={mod.link}><NavLink to="/profile" activeClassName={mod.active}>Profile</NavLink></div>
            <div className={mod.link}><NavLink to="/dialogs" activeClassName={mod.active}>Messages</NavLink></div>
            <div className={mod.link}><NavLink to="/news" activeClassName={mod.active}>News</NavLink></div>
            <div className={mod.link}><NavLink to="/music" activeClassName={mod.active}>Music</NavLink></div>
            <div className={mod.link}><NavLink to="/settings" activeClassName={mod.active}>Setting</NavLink></div>
            <div className={`${mod.link} ${mod.friends}`}>
                <h2>Friends</h2>
               <div className={mod.friendsElements}>{friendsElements}</div>
            </div>

        </div>

    )
}

export default Navbar;