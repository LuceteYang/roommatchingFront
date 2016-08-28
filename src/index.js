import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider  } from 'react-redux';
import counterApp from './reducers'; // reducers 폴더에서 actions 폴더를 사용
const store = createStore(counterApp);

import App from './App';
import Main from './Main';
import Chat from './Chat';
import Home from './Home';
import Profile from './Profile'

import { Router, Route, browserHistory, IndexRoute} from 'react-router';

import './index.css';

ReactDOM.render(
    <Provider store={store}>

        <Router history = {browserHistory}>
            <Route path = "/" component = {App}>
            <IndexRoute component = {Home} />
            <Route path = "/main" component = {Main}>
            </Route>
             <Route path = "/chat" component = {Chat}>
            </Route>
             <Route path = "/profile" component = {Profile}>
            </Route>
            </Route>
        </Router>
    </Provider>,
  document.getElementById('root')
);

/*
ReactDOM.render(<App />,
    document.getElementById('root')
);*/
//   <IndexRoute component = {Home} />
//  <Route path = "/home" component = {Home} />
// <Route path = "/pagetwo" component = {PageTwo} />
// <Route path = "/search" component = {Search} />