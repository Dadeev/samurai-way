import React from 'react';
import {Navigate} from "react-router-dom";
import {RootStateType} from "../redux/redux-store";
import {connect} from "react-redux";

const mapStateToPropsForNavigate = (state: RootStateType) => ({
    isAuth: state.auth.isAuth
})


export const withAuthNavigate = (Component: Function) => {
    class NavigateComponent extends React.Component<any> {
        render() {
            if (!this.props.isAuth) return <Navigate to={'/login'}/>
            return <Component {...this.props}/>
        }
    }

    return connect(mapStateToPropsForNavigate)(NavigateComponent)
};
