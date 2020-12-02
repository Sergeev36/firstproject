import {NavLink} from "react-router-dom";
import mod from './NameItem.module.css'



const NameItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={mod.link}>
        <NavLink to ={path}>

            <div className={mod.nameItem}>

            <div className={mod.avatar}><img src={props.avatar} alt=""/></div>
            <div className={mod.name}>{props.name}</div>

            </div>

         </NavLink>
        </div>
    )
}

export default NameItem;