import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from '../components/Menu';
import { Home, About, Posts } from '../pages';

class App extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <Route exact path="/" component={Home}/>                
                {/* Route 배치 순서 중요 */}
                <Switch>
                    <Route path="/about/:name" component={About}/>
                    <Route path="/about" component={About}/>
                </Switch>
                <Route path="/posts" component={Posts}/>
            </div>
        );
    }
}
export default App;