import React, {ChangeEvent} from 'react';

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        console.log(this.props.status)
        return (
            <div>
                {!this.state.editMode &&
                    <span
                        onDoubleClick={this.activateEditMode}>{!this.props.status ? 'status not found' : this.props.status}</span>
                }
                {this.state.editMode &&
                    <input onChange={this.onStatusHandler} value={this.state.status} autoFocus
                           onBlur={this.deactivateEditMode}/>
                }
            </div>
        )
    }
};