import mod from './Navbar.module.css';

const Navbar = () => {
    return (
        < nav className={mod.nav}>
            < div className={`${mod.link} ${mod.active}`}>< a> Profile < /a>< /div>
            < div className={mod.link}>< a> Messages < /a> < /div>
             < div className={mod.link}>< a> News < /a>< /div>
             < div className={mod.link}>< a> Music < /a>< / div>
             < div className={mod.link}>< a> Settinigs < /a>< /div>
        < /nav>
     )
   }


    export default Navbar;