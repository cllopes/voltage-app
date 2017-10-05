import React from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, Text, View, Switch} from 'react-native';


const DeviceDetails = ({name, powerStatus, actions}) => {

    const powerStyle = powerStatus ? 'on' : 'off'
    const backgroundColor = powerStatus ? 'white' : 'black'

    return (
        <View style={[styles.container, {backgroundColor}]}>
            <Text style={[styles.name,styles[powerStyle]]}>{name}</Text>
            <Text style={[styles.power, styles[powerStyle]]}>Power</Text>
            <Switch value={powerStatus} onValueChange={actions.toggleDevicePower}/>
        </View>
    )

}

DeviceDetails.propTypes = {
    name: PropTypes.string,
    powerStatus: PropTypes.bool,
    togglePower: PropTypes.func
}

export default DeviceDetails


const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50
    },

    power: {
        paddingTop: 10,
        fontSize: 25
    },

    name: {
      fontSize: 30
    },

    on: {
        color: 'black'
    },

    off: {
        color: 'white'
    }
});