import {NavLink} from "react-router-dom";
import mod from './NameItem.module.css'



const NameItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={mod.nameItem}>
        <NavLink to ={path}> {props.name}</NavLink>
        </div>
    )
}

export default NameItem;