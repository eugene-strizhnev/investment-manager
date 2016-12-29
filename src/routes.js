import React from 'react';
import { IndexRoute, Route }  from 'react-router';
import App from 'components/App';
import CounterPage from 'components/CounterPage';
import HelloWorld from 'components/HelloWorld';
import TimePage from 'components/TimePage';

export default (
    <Route component={App} path='/'>
        <IndexRoute component={HelloWorld}/>
        <Route component={CounterPage} path='counters'/>
        <Route component={TimePage} path='time'/>
    </Route>
);
