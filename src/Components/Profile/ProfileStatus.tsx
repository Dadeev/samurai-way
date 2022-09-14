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

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
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