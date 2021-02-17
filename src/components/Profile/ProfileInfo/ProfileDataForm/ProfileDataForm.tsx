import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../../../common/formController/AlternativeFormController';
import {required} from '../../../../utilits/validators/postFormValidators';
import {Textarea} from '../../../common/formController/FormController';


export  type FormDataType = {}
const ProfileDataForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        <button>SAVE</button>
        <div><b>Full Name</b>: {<Field placeholder={'Full Name'} name={'fullName'} component={Input} validate={[required]}/>}
        </div>
        <div><b>About Me</b>: {<Field placeholder={'About Me'} name={'aboutMe'} component={Textarea} validate={[required]}/>}
        </div>
        <div><b>Looking For A Job</b>: {<Field type={'checkbox'} value={'LookingForAJob'} name={'LookingForAJob'}
                                               component={Input}/>}</div>
        <div><b>Looking For A Job Description</b>: {<Field placeholder={'Looking For A Job Description'} name={'lookingForAJobDescription'} component={Textarea}
                                                           validate={[required]}/>}</div>
        {/*  <div><b>Contacts</b>: {Object.keys().map(key => {
            // @ts-ignore
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>*/}
    </form>
}


const ProfileDataReduxForm = reduxForm<FormDataType>({form: 'edit-mode-profile'})(ProfileDataForm)
export default ProfileDataReduxForm