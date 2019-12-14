import React,{Component} from 'react';
import ErrorIndicator from '../error-indicator';
import ErrorBoundry from '../error-boundry';
import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
export default class App extends Component{

    render(){

        return(
            <ErrorBoundry>
                <div className="stardb-app">
                    <Header />
                    <RandomPlanet />
                </div>
            </ErrorBoundry>
        )
    }
}