import React from 'react';
import './App.css';
import {Navbar} from "./Components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {RootStateType} from "./Components/redux/redux-store";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {UsersContainer} from "./Components/Users/UsersContainer";
import ProfileContainer, {withRouter} from "./Components/Profile/ProfileContainer";
import {HeaderContainer} from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Components/redux/app-reducer";
import {Preloader} from "./Components/common/Preloader/Preloader";

type AppType = {
    state: RootStateType
    initializeApp: () => void
    initialized: boolean
}

class App extends React.Component<AppType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar state={this.props.state.siteBarPage}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile/:userId'
                               element={<ProfileContainer/>}/>
                        <Route path='/profile' element={<ProfileContainer/>}/>
                        <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/login' element={<Login/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}


type mapStateToPropsType = {
    initialized: boolean
}
const mapStateToProps = (state: RootStateType): mapStateToPropsType => ({
    initialized: state.app.initialized
})

export default compose<typeof React.Component>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)
