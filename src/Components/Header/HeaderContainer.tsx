import React from "react";
import {connect} from "react-redux";
import {RootStateType} from "../redux/redux-store";
import {Header} from "./Header";
import {getAuthUserData, logout} from "../redux/auth-reducer";

type HeaderContainerComponentPropsType = {
    isAuth: boolean,
    login: string
    logout: () => void
}

class HeaderContainerComponent extends React.Component<HeaderContainerComponentPropsType> {
    render() {
        return (
            <>
                <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout}/>
            </>
        )
    }
}

type mapStateToPropsType = {
    isAuth: boolean,
    login: string
}
const mapStateToProps = (state: RootStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export const HeaderContainer = connect(mapStateToProps, {logout})(HeaderContainerComponent)