import './App.css';
import React,{Suspense} from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {initializeThunk} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloager";
import store from "./redux/redux-store";
import Nav from './components/Navbar/Navbar';
import HeaderContainer from "./components/Header/HederContainer";
const Music = React.lazy(() => import("./components/Music/Music"));
const Settings = React.lazy(() => import("./components/Settings/Settings"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));
const News = React.lazy(() => import("./components/News/News"));
const Login = React.lazy(() => import("./components/Login/Login"));









class App extends React.Component {

    componentDidMount() {
        this.props.initializeThunk()
    }




    render () {

    if (!this.props.initialized) { return <Preloader/> }

    return (

        <div className="app-wrapper">
                <HeaderContainer/>
                <Nav/>
                <div className="app-wrapper-contents">
                   <Suspense fallback={<Preloader/>}>
                       <Switch>
                    <Route path='/profile/:userId?' render={ () => <ProfileContainer />}/>
                    <Route exact path='/dialogs' render={ () => <DialogsContainer />}/>
                    <Route exact path='/users' render={ () => <UsersContainer/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/' render={ () => <ProfileContainer />}/>
                    <Route path='*' render={ () => <div>404 NOT FOUND</div>}/>
                       </Switch>
                </Suspense>
                </div>
            </div>

)}
}

const mapStateToProps = (state) => {
  return {
      initialized:state.app.initialized
  }
}

const AppContainer = connect (mapStateToProps,{initializeThunk}) (App);

const AppJS = () => {
    return <HashRouter >

        <Provider store={store}>
            <AppContainer/>
        </Provider>

            </HashRouter>
}

export default AppJS;