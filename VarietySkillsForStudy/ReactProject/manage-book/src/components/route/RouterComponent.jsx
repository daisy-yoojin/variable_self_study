import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import InputForm from '../InputForm';
import AccountListComponent from '../user/AccountListComponent';
import AddAccountComponent from '../user/AddAccountComponent';
import EditAccountComponent from '../user/EditAccountComponent';

const AppRouter =()=>{
    return (
        <div>
            <BrowserRouter>
                <div style ={style}>
                    <Switch>
                        <Route exact path="/" component={AccountListComponent}/>
                        <Route path="/accounts" component={AccountListComponent} />
                        <Route path="/add-account" component={AddAccountComponent}/>
                        <Route path="/edit-account" component={EditAccountComponent}/>
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