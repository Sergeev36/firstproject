import './App.css';
import {BrowserRouter, Route} from "react-router-dom";

import Header from './components/Header/Header';
import Nav from './components/Navbar/Navbar';
import Dialogs from "./components/Dialogos/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Profile from "./components/Profile/Profile";








const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav state={props.state.friendsPage}/>
                <div className="app-wrapper-contents">
                    <Route path='/profile' render={ () => <Profile profilePage={props.state.profilePage}
                                                                   updateNewPostText={props.updateNewPostText}
                                                                   addPost={props.addPost}/>}/>
                    <Route exact path='/dialogs' render={ () => <Dialogs dialogsPage={props.state.dialogsPage}
                                                                         updateNewMessageText={props.updateNewMessageText}
                                                                         addMessage={props.addMessage}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>

                 </div>
            </div>

        </BrowserRouter>
)
}


export default App;
