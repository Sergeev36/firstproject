import './App.css';
import {BrowserRouter, Route} from "react-router-dom";

import Header from './components/Header/Header';
import Nav from './components/Navbar/Navbar';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogos/DialogsContainer";








const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-contents">
                    <Route path='/profile' render={ () => <Profile store={props.store}/>}/>

                    <Route exact path='/dialogs' render={ () => <DialogsContainer store={props.store}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>

                 </div>
            </div>

        </BrowserRouter>
)
}


export default App;
