import React, {ChangeEvent, useEffect, useState} from 'react';


type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks: React.FC<PropsType> = ({status, updateStatus,}) => {
    let [stat, setStat] = useState<string>(status)
    let [editMode, setEditMode] = useState<boolean>(false)

    useEffect(() => {
        setStat(status)
    }, [status])

    const activatedMode = () => {
        setEditMode(true)
    }
    const deactivatedMode = () => {
        setEditMode(false)
        updateStatus(stat)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStat(e.currentTarget.value)
    }
    return <div>
        <div>
            {!editMode && <span
                onDoubleClick={activatedMode}>{stat}</span>}
        </div>
        <div>
            {editMode && <input
                onBlur={deactivatedMode}
                onChange={onStatusChange}
                value={stat}/>}
        </div>
    </div>
}

export default ProfileStatusWithHooks