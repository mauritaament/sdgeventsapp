import React from 'react'
import Cookies from 'universal-cookie';
import './App.css'
import Login from './views/Login/Login'
import SignUp from './views/Login/SignUp'
import PersistentDrawerLeft from './Layout/Layout'
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom'
const cookies = new Cookies();


const App = (props) => {

    return(
            <Switch> /*TO DO: This allows the user to route wherever even if they aren't logged in. need to use cookies to validated authentication and change how this is setup*/
                <Route exact path={'/login'} component={Login}/>
                <Route path={'/signup'} component={SignUp}/>
                <PersistentDrawerLeft/>
                /*<Route path={'/home2'} component={PersistentDrawerLeft} />*/
            </Switch>
    )


}

export default App
