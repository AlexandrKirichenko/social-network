import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Dialogs from "./components/Dialogs/Dialogs";
import s from "./components/Dialogs/Dialogs.module.css";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            {/*<Profile />*/}
            <div className='app-wrapper-profile'>
                <Dialogs/>
            </div>
        </div>
    );
}


export default App;
