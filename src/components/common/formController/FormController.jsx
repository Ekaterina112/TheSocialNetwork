import React from 'react';
import s from './FormController.module.css'

//not understand!
export const Textarea = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error

    return (<div className={s.formControl + " " + (hasError ? s.error : '')}>
        <div>
            <textarea {...input}{...props}/>
        </div>
        {hasError && <span>{error}</span>}
    </div>)
}
export const Input = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error

    return (<div className={s.formControl + " " + (hasError ? s.error : '')}>
        <div>
            <input {...input}{...props}/>
        </div>
        {hasError && <span>{error}</span>}
    </div>)
}



