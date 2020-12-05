import React, {ChangeEvent, useState} from 'react';


type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks = (props: PropsType) => {
    let [status, setStatus] = useState<string>(props.status)
    let [editMode, setEditMode] = useState<boolean>(false)

    const activatedMode = () => {
        setEditMode(true)
    }
    const deactivatedMode = () => {
        setEditMode(false)
        //props.updateStatus(this.state.status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return <div>
        <div>
            {!editMode && <span
                onDoubleClick={activatedMode}>{status}</span>}
        </div>
        <div>
            {editMode && <input
                onBlur={deactivatedMode}
                onChange={onStatusChange}
                value={status}/>}
        </div>

    </div>
}


export default ProfileStatusWithHooks