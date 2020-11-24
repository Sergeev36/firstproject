import './App.css';
import {BrowserRouter, Route} from "react-router-dom";

import Header from './components/Header/Header';
import Nav from './components/Navbar/Navbar';
import Content from './components/Profile/Profile';
import Dialogs from "./components/Dialogos/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";






const App = () => {
    return (
        <BrowserRouter>
            < div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-contents">
                    <Route path='/profile' component={Content}/>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                 < /div>
            < /div>

        </BrowserRouter>
)
}


export default App;
