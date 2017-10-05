const initialState = {
    name: 'Device A',
    powerStatus: true
}

const selectedDevice = (state = initialState, action) => {

    const {type} = action

    switch (type) {
        case 'TOGGLE_POWER':
            console.log('Switching: TOGGLE_POWER to ' + !state.powerStatus)
            return Object.assign({}, state, {powerStatus: !state.powerStatus})
    }

    return state
}

export default selectedDevice