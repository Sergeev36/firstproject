import React from "react";
import mod from "./users.module.css"
import photoUsers from "../../assets/images/user.png"
import {NavLink} from "react-router-dom";


let Users = (props) =>  {

        let pagesCount = Math.ceil(props.usersCount / props.pageSize);
        let pages = [];
        for (let i = 1 ; i <= pagesCount ; i++) {
            pages.push(i)
        }

        return <div>
            <div></div>
            <div>
                {pages.map(p => {
                    return <span key={p.id} className={(props.currentPage === p && mod.selectedPage)|| mod.page}
                                 onClick={()=>{props.onPageChanged(p)}}>{p}</span>})}
            </div>

        {props.users.map(u =><div key={u.id}>
            <span>
                <div>
                    <NavLink to={"/profile/" + u.id}>
                    <img src={u.photos.small || photoUsers} className={mod.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    { u.followed
                        ?<button onClick={ ()=> {props.unfollow(u.id)} }>Unfollow</button>
                        :<button onClick={ ()=> {props.follow(u.id)} }>Follow</button>}
                </div>
            </span>
            <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </span>
            <span>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
            </span>

        </div>   ) }

</div>
}


export default Users;