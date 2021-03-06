import React from 'react';
import s from './FormController.module.css'

//not understand!
export const UniversalForm = ({input, meta: {touched, error}, child, ...props}) => {
    const hasError = touched && error

    return (<div className={s.formControl + " " + (hasError ? s.error : '')}>
        <div>
            {props.children}
        </div>
        {hasError && <span>{error}</span>}
    </div>)
}
export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props
    return <UniversalForm {...props}>
        <textarea {...input}{...restProps}/>
    </UniversalForm>

}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props
    return <UniversalForm {...props}>
        <input {...input}{...restProps}/>
    </UniversalForm>

}

//after refactoring