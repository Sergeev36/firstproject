import React, {useEffect, useState} from 'react'
import mod from'../ProfileInfo/ProfileInfo.module.css'


const ProfileStatusWitchHook = (props) => {

    let [editMode,setEditMode] = useState(false);
    let [status,setStatus] = useState(props.status);

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

   const onStatusChange = (e) => {
        setStatus(e.target.value)
        }

    if (props.isOwner) {
        return <div>


            {!editMode && <div className={mod.status}>
                <span onDoubleClick={activateEditMode}><b>Status: </b>{props.status || "..."}</span>
            </div>}

            {editMode && <div>
                <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} value={status}/>
            </div>}


        </div>
    } else {
        return <div>
            <span><b>Status: </b>{props.status || "..."}</span>
        </div>
    }


}

export default ProfileStatusWitchHook;




