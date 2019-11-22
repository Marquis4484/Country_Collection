import React, { Component } from 'react'
import {Switch,Route} from 'react-router-dom'
import Country from '../components/Country';
import Currency from '../components/Currency';
import Suggestions from '../components/Suggestions';

export default class Content extends Component {
    render() {
        return (
            <div>
        
          <Switch>
            <Route component={Country} exact path='/'/> 
            <Route component={Currency} exact path='/Currency'/> 
            <Route component={Suggestions} exact path='/Suggestions'/> 
          </Switch>
       
            </div>
        )
    }
}


