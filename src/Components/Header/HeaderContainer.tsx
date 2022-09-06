import React from "react";
import {connect} from "react-redux";
import {RootStateType} from "../redux/redux-store";
import {Header} from "./Header";
import {setAuthDataOfUser} from "../redux/auth-reducer";

type HeaderContainerComponentPropsType = {
    isAuth: boolean,
    login: string
    setAuthDataOfUser: () => void
}

class HeaderContainerComponent extends React.Component<HeaderContainerComponentPropsType> {
    componentDidMount() {
        this.props.setAuthDataOfUser()
    }

    render() {
        return (
            <>
                <Header isAuth={this.props.isAuth} login={this.props.login}/>
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

export const HeaderContainer = connect(mapStateToProps, {setAuthDataOfUser})(HeaderContainerComponent)