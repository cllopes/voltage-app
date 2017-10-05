import { createStore } from 'redux'
import selectedDevice from '../reducers/selectedDeviceReducer'


const store = createStore(selectedDevice)

export default store
