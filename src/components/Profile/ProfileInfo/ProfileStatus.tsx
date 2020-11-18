import React, {ChangeEvent} from 'react';

//типизаця state!!!

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<PropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activatedMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivatedMode = () => {

        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }

  /*  componentDidUpdate(prevProps: any, prevState: any) {
        if (prevProps.props.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }*/
//don't working, check it later'
    render() {
        return <div>
            <div>
                {this.state.editMode && <input
                    autoFocus={true}
                    onBlur={this.deactivatedMode}
                    onChange={this.onStatusChange}
                    value={this.state.status}/>}
            </div>
            <div>
                {!this.state.editMode && <span
                    onDoubleClick={this.activatedMode}>
                    {this.props.status || '_______'}
                </span>}

            </div>
        </div>
    }
}

export default ProfileStatus