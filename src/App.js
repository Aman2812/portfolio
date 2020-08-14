import React from 'react';
import Home from './components/Home';
import Resume from './components/Resume';
import About from './components/About';
import Navbar from './components/Navbar';
import {Switch, Route,} from "react-router-dom";

const App= () => {
    return (
        <div>
            <Navbar/>
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/resume" component={Resume}/>
            <Route exact path="/about" component={About}/>
           </Switch>
        </div>
    );
};

export default App;