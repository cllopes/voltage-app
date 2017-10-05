import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Provider} from 'react-redux'
import store from './store/createStore'

import Device from './containers/Device'

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Device />
            </Provider>

        );
    }
}

const styles = StyleSheet.create({

});
