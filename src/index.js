import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Components/Home';
import PageTwo from './Components/PageTwo';
import Search from './Components/Search';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';

import './index.css';

ReactDOM.render(
    <Router history = {browserHistory}>
        <Route path = "/" component = {App}>
            <IndexRoute component = {Home} />
            <Route path = "home" component = {Home} />
            <Route path = "pagetwo" component = {PageTwo} />
            <Route path = "search" component = {Search} />
        </Route>
    </Router>,
  document.getElementById('root')
);

/*
ReactDOM.render(<App />,
    document.getElementById('root')
);*/
