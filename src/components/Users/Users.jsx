import React from "react";
import mod from "./users.module.css"
import photoUsers from "../../assets/images/user.png"
import {NavLink} from "react-router-dom";
import * as axios from "axios";


let Users = (props) =>  {

        let pagesCount = Math.ceil(props.usersCount / props.pageSize);
        let pages = [];
        for (let i = 1 ; i <= pagesCount ; i++) {
            pages.push(i)
        }




        return <div>

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
                    {u.followed
                        ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers:{
                                    "API-KEY":"bd1f7934-d488-4748-b181-52635ba28a3f"
                                    }
                            }
                            )
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                                })
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers:{
                                    "API-KEY":"bd1f7934-d488-4748-b181-52635ba28a3f"
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                })
                        }
                        }>Follow</button>}
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