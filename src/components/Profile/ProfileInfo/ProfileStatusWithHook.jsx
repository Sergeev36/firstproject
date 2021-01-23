import React, {useEffect, useState} from 'react'



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

        return <div>
            {!editMode && <div>
                <span onDoubleClick={activateEditMode}>{props.status  || "status"}</span>
            </div>}

            {editMode && <div>
                <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} value={status}/>
            </div>}


        </div>


}

export default ProfileStatusWitchHook;




