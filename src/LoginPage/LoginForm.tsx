import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {Input} from '../components/common/formController/AlternativeFormController';
import {required} from '../utilits/validators/postFormValidators';

 export  type FormDataType= {
    login:string,
    password:string,
    rememberMe:boolean
}
//& IProps add if want to give some other props
const LoginForm:React.FC<InjectedFormProps<FormDataType>> =(props) => {

    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"login"} name={'login'} component={Input} validate={[required]}/>
                </div>
                <div>
                    <Field placeholder={"password"} name={'password'} component={Input} validate={[required]}/>
                </div>
                <div>
                    <Field type={"checkbox"} value={'rememberMe'} name={'rememberMe'} component={Input}/>
                </div>
                <div>
                    <button>login</button>
                </div>
            </form>
    )
}
//обертка
const  LoginReduxForm= reduxForm<FormDataType>(
    //уникальное имя
    {form: 'login'})(LoginForm)
export default LoginReduxForm