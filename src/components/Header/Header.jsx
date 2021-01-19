import mod from './Header.module.css';
import {NavLink} from "react-router-dom";
import {loginOutThunk} from "../../redux/auth-reducer";


const Header = (props) => {


    return (
        < header
            className={mod.header}>
           <div>

               < img
               src="https://images.vexels.com/media/users/3/184154/isolated/preview/9751abbb24f742adc07e993dc528bc32-colorful-3d-letter-r-by-vexels.png" />
               <div className={mod.loginBlock}>

                   {props.isAuth
                       ? <div>{props.login} - <button onClick={props.loginOutThunk}>logOut</button></div>
                       :<NavLink to={"/login"}>Login</NavLink>}

               </div>
           </div>


            </ header >

                )
                };

export default Header;



