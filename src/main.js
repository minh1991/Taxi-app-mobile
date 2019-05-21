import React, { Component } from 'react'
import { View, Text } from 'react-native';

import { createStore } from './store/createStore';
import AppContainer from './AppContainer/index';

export default class Root extends Component {
    renderApp() {
        const initialState = window.___INTITIAL_STATE__;
        const store = createStore(initialState);
        return (
            <AppContainer store={store} />
        );
    }

    render() {
        return this.renderApp();
    }
}
