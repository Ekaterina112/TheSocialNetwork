import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './../ProfileInfo.module.css'
import {Input} from "antd";

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
    return <div className={s.status}>
            <b>Status:</b>
            {!editMode && <span
                onDoubleClick={activatedMode}>{stat}</span>}
            {editMode && <Input onBlur={deactivatedMode}
                                onChange={onStatusChange}
                                value={stat} placeholder="Borderless" bordered={false} />
            }
    </div>
}

export default ProfileStatusWithHooks