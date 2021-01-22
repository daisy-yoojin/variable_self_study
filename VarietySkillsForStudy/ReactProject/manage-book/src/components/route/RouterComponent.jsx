import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import InputForm from '../InputForm';

const AppRouter =()=>{
    return (
        <div>
            <BrowserRouter>
                <div style ={style}>
                    <Route exact path="/" component={InputForm}/>
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