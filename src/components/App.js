import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Message from './Message'
import store from '../store'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Route exact path="/" component={Message} />
                </Router>
            </Provider>
        )
    }
}

export default App
