import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {Input} from '../common/formController/AlternativeFormController';
import {required} from '../../utilits/validators/postFormValidators';
import s from './LoginPage.module.css'

export  type FormDataType = {
    email: string,
    password: string,
    rememberMe: boolean
}
//& IProps add if want to give some other props
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'login'} name={'email'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field type={'password'} placeholder={'password'} name={'password'} component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field type={'checkbox'} value={'rememberMe'} name={'rememberMe'} component={Input}/>
            </div>
            {error && <div className={s.formControlSummaryError}>
                {error}
            </div>}
            <div>
                <button>login</button>
            </div>
        </form>)
}
//just wrapper
const LoginReduxForm = reduxForm<FormDataType>(
    //uniq name
    {form: 'login'})(LoginForm)
export default LoginReduxForm