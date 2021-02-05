import mod from './Header.module.css';
import {NavLink} from "react-router-dom";



const Header = (props) => {


    return (
        < header
            className={mod.header}>
           <div>

               < img
               src="https://images.vexels.com/media/users/3/184154/isolated/preview/9751abbb24f742adc07e993dc528bc32-colorful-3d-letter-r-by-vexels.png" />
               <div className={mod.loginBlock}>

                   {props.isAuth
                       ? <div>{props.login} <button className={mod.logOut} onClick={props.loginOutThunk}>Log Out</button></div>
                       :<NavLink className={mod.login}  to={"/login"}>Login</NavLink>}

               </div>
           </div>


            </ header >

                )
                };

export default Header;



