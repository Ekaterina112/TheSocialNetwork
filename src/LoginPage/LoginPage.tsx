import React from 'react';
import LoginReduxForm, {FormDataType} from './LoginForm';

const LoginPage = () => {
    const onSubmitMy = (formData:FormDataType)=> {
       console.log(formData)
    }
    return (<div>
            <h1>Login here please</h1>
           <LoginReduxForm onSubmit={onSubmitMy}/>
        </div>
    )
}


export default LoginPage