import mod from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={mod.nav}>
            <div className={mod.link}><a href="/profile">Profile</a></div>
            <div className={`${mod.link} ${mod.active}`}><a href="/dialogs">Messages</a></div>
            <div className={mod.link}><a href="/news">News</a></div>
            <div className={mod.link}><a href="/music">Music</a></div>
            <div className={mod.link}><a href="/settings">Setting</a></div>
        </div>

    )
}

export default Navbar;