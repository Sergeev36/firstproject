import React from "react";
import mod from "./users.module.css"
import photoUsers from "../../assets/images/user.png"
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";




let Users = (props) =>  {

       return <div> <Paginator itemsCount={props.usersCount}
                          pageSize={props.pageSize}
                          currentPage={props.currentPage}
                          onPageChanged={props.onPageChanged}
                          />

       {props.users.map(u =><div key={u.id}>
            <span>
                <div>
                    <NavLink to={"/profile/" + u.id}>
                    <img src={u.photos.small || photoUsers} className={mod.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button className={mod.unfollow} disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                           props.unfollowThunk(u.id)
                        }}>Unfollow</button>
                        : <button className={mod.follow} onClick={() => {
                            props.followThunk(u.id)
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

       </div>  ) }

       </div>
}


export default Users;