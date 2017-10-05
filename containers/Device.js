import React from 'react'
import {connect} from 'react-redux'
import toggleDevicePower from '../actions/actionCreators'
import { bindActionCreators } from 'redux'

import DeviceDetails from '../views/DeviceDetails'

const mapStateToProps = state => {
    const selectedDevice = state
    const {name, powerStatus} = selectedDevice
    return {
        name,
        powerStatus
    }
}

const mapDispatchToProps = dispatch => {
    return {actions: bindActionCreators({ toggleDevicePower }, dispatch)}
}

const Device = props => <DeviceDetails {...props}/>

export default connect(mapStateToProps, mapDispatchToProps)(Device)
