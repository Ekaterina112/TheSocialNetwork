import React from 'react';
import { Field, reduxForm } from 'redux-form'
const LoginForm = () => {

    return (
            <form>
                <div>
                    <Field placeholder={"login"} name={'login'} component={'input'}/>
                </div>
                <div>
                    <Field placeholder={"password"} name={'password'} component={'input'}/>
                </div>
                <div>
                    <Field type={"checkbox"} value={'remember me'} name={'remember me'} component={'input'}/>
                </div>
                <div>
                    <button>login</button>
                </div>
            </form>
    )
}

const  LoginReduxForm= reduxForm({form: 'login'})(LoginForm)
export default LoginReduxForm