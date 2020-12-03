import reportWebVitals from './reportWebVitals';
import state, {subscribe} from "./redux/State";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from './redux/State'

export let renderEntireTree = (state) => {

    ReactDOM.render (
        <React.StrictMode>
            <App state={state}
                 updateNewPostText={updateNewPostText}
                 addPost={addPost}
                 updateNewMessageText={updateNewMessageText}
                 addMessage={addMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    )
}




renderEntireTree(state);
subscribe(renderEntireTree);



reportWebVitals();
