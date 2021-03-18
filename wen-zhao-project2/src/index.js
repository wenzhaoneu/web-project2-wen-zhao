import React from 'react';
import { render } from 'react-dom'
import { createStore} from 'redux'
import { Provider } from 'react-redux'
import Home from './Home.js';
import Rule from './Rule.js';
import Game from './Game.js';
import './index.css';
import reducer from "./Reducers"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


export const store = createStore(reducer);

render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route exact path={"/home"} component={Home}/>
                <Route exact path={"/Rule"} component={Rule} />
                <Route exact path={"/Game"} component={Game}>
                    <Game />
                </Route>
                <Route render={() => <h1>Not found!</h1>} />
            </Switch>
        </Router>
     </Provider>,
    document.getElementById('root')
);