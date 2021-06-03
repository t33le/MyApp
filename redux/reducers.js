import { SUPPORTED_VITALS_DEVICES } from '../constants';
import { globalTypes } from './actions';

const initState = {
  savedDevices: {}
};

export default (state = initState, action) => {
  switch(action.type) {
    case globalTypes.ROUTE_CHANGED:
      return {...state, prevRoute: action.prevRoute, curRoute: action.curRoute};

    case globalTypes.SET_MEASURE_TYPE:
      return {...state, measureType: action.measureType};

    case globalTypes.SET_DEVICE:
      const newSavedDevices = {...state.savedDevices};
      const setDeviceType = action.deviceType;
      const setDeviceInfo = action.setDeviceInfo;
      switch(setDeviceType) {
        case SUPPORTED_VITALS_DEVICES.BP:
          if(SUPPORTED_VITALS_DEVICES.BP.includes(setDeviceType)) {
            newSavedDevices.BP = setDeviceInfo;
            break;
          }
        default:
      }
      return {...state, savedDevices: newSavedDevices }

    default:
      return state;
  }
};