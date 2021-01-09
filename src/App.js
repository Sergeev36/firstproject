import './App.css';
import {BrowserRouter, Route} from "react-router-dom";


import Nav from './components/Navbar/Navbar';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HederContainer";
import Login from "./components/Login/Login";










const App = (props) => {


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <Nav/>
                <div className="app-wrapper-contents">
                    <Route path='/profile/:userId?' render={ () => <ProfileContainer />}/>
                    <Route exact path='/dialogs' render={ () => <DialogsContainer />}/>
                    <Route exact path='/users' render={ () => <UsersContainer/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/login' component={Login}/>




                </div>
            </div>

        </BrowserRouter>
)
}


export default App;
