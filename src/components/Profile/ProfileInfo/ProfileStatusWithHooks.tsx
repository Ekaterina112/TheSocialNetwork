import React, {ChangeEvent, useEffect, useState} from 'react';


type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks: React.FC<PropsType> = ({status, updateStatus,}) => {
    let [stat, setStat] = useState<string>(status)
    let [editMode, setEditMode] = useState<boolean>(false)

    let pr1 = new Promise((res) => {
        res(10)
    })
    let pr2 = new Promise((res) => {
        res(0)
    })
    pr1.then((res: any) => {
        console.log(res);
        return res + 2
    }).then(console.log);
    pr2.then((res: any) => {
        console.log(res);
        return res + 1
    }).then(console.log)

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