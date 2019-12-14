import React from 'react';

import ErrorIndicator from '../error-indicator';
import './error-boundry.css';

export default class ErrorBoundry extends React.Component{

    state = {
        errorStatus: false,
    }

    componentDidCatch() {
        this.setState({
            errorStatus: true
        })
    }

    render(){

        if(this.state.errorStatus){
            return <ErrorIndicator />
        }


        return this.props.children
    }
}