import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ExtraComponent from '../todoList/ExtraComponent';
import ToodListComponent from '../todoList/ToodListComponent';
import AccountListComponent from '../user/AccountListComponent';
import AddAccountComponent from '../user/AddAccountComponent';
import EditAccountComponent from '../user/EditAccountComponent';
import NavBar from './NavBar';

const AppRouter =()=>{
    return (
        <div>
            <BrowserRouter>
                <div style ={style}>
                    <NavBar/>
                    <Switch>
                        <Route exact path="/" component={AccountListComponent}/>
                        <Route path="/accounts" component={AccountListComponent} />
                        <Route path="/add-account" component={AddAccountComponent}/>
                        <Route path="/edit-account" component={EditAccountComponent}/>
                        <Route path="/signup" />
                        <Route path="/Manage-book" component={AccountListComponent}/>
                        <Route path="/Todos" component={ToodListComponent} />
                        <Route path="/Extra" component={ExtraComponent} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

const style={
    color: 'red',
    margin: '10px'
}

export default AppRouter;