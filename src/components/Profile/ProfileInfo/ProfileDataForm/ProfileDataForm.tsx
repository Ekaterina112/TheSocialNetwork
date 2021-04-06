import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../../../common/formController/AlternativeFormController';
import {required} from '../../../../utilits/validators/postFormValidators';
import {Textarea} from '../../../common/formController/FormController';
import {UserProfileType} from '../../../../redux/types';
import s from '../../../LoginPage/LoginPage.module.css';
import {Button} from "antd";


export  type FormDataType = {}
export  type IProps = {
    profile: UserProfileType,
    initialValues: UserProfileType
}

const ProfileDataForm: React.FC<InjectedFormProps<FormDataType, IProps> & IProps> = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <Button>SAVE</Button>
        {error && <div className={s.formControlSummaryError}>
            {error}
        </div>}
        <div><b>Full Name</b>: {<Field placeholder={'Full Name'} name={'fullName'} component={Input}
                                       validate={[required]}/>}</div>
        <div><b>About Me</b>: {<Field placeholder={'About Me'} name={'aboutMe'} component={Textarea}
                                      validate={[required]}/>}</div>
        <div><b>Looking For A Job</b>: {<Field type={'checkbox'} value={'LookingForAJob'} name={'LookingForAJob'}
                                               component={Input}/>}</div>
        <div><b>Looking For A Job Description</b>: {<Field placeholder={'Looking For A Job Description'}
                                                           name={'lookingForAJobDescription'} component={Textarea}
                                                           validate={[required]}/>}</div>

        <div><b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key}><b>{key}:</b><Field placeholder={key} name={`contacts.${key}`} component={Input}/>
            </div>
        })}
        </div>
    </form>
}
//name={`contacts.${key}`} remember!!!! for right Object for redux!!!
const ProfileDataReduxForm = reduxForm<FormDataType, IProps>({form: 'edit-mode-profile'})(ProfileDataForm)
export default ProfileDataReduxForm