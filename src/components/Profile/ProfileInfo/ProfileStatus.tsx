import React from 'react';

//типизаця state!!!

type PropsType = {
    status: string
}

class ProfileStatus extends React.Component<PropsType>
{
    state = {
        editMode:false
    }

    activatedMode(){
     this.setState({
         editMode:true
     })
    }
    deactivatedMode=()=>{
        this.setState({
            editMode:false
        })
    }
    render() {
        return <div>
            <div>
                {this.state.editMode && <input onBlur={this.deactivatedMode}
                    value={this.props.status}/>}
            </div>
            <div>
                {!this.state.editMode &&<span  onDoubleClick={this.activatedMode.bind(this)}>{this.props.status}</span>}

            </div>
        </div>
    }


}
export default ProfileStatus