import React from 'react';

type ProfileStatusType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false
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
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}> {this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input value={this.props.status} autoFocus onBlur={this.deactivateEditMode}/>
                    </div>
                }
            </div>
        )
    }
};