import { DeviceEventEmitter, Platform } from 'react-native';
import { iHealthDeviceManagerModule } from '@ihealth/ihealthlibrary-react-native';
import DeviceEventHandlers from './eventHandlers';

const { 
  Event_Scan_Device, 
  Event_Scan_Finish, 
  Event_Device_Connected,
  Event_Device_Connect_Failed,
  Event_Device_Disconnect
} = iHealthDeviceManagerModule;

let listeners = [];

const addListeners = () => {
  // remove previous listeners, if there are
  listeners.forEach(listener => {
    if(typeof listener.remove === 'function') {
      listener.remove();
    }
  });

  // add listeners
  listeners = [
    DeviceEventEmitter.addListener(Event_Scan_Device, DeviceEventHandlers.handleScanDevice),
    DeviceEventEmitter.addListener(Event_Scan_Finish, DeviceEventHandlers.handleFinishScanDevice),
    DeviceEventEmitter.addListener(Event_Device_Connected, DeviceEventHandlers.handleDeviceConnected),
    DeviceEventEmitter.addListener(Event_Device_Connect_Failed, DeviceEventHandlers.handleDeviceConnectFailed),
    DeviceEventEmitter.addListener(Event_Device_Disconnect, DeviceEventHandlers.handleDeviceDisconnected),
  ];
};

const iHealthAPI = {
  startDiscovery: (type) => {
    iHealthDeviceManagerModule.stopDiscovery();
    // type: AM3S, AM4, BG5, BG5S, BP3L, BP5, BP5S, BP7S, HS2, HS4S, PO3,HS2S,BG1S
    addListeners();
    const deviceType = Platform.OS === 'ios' ? iHealthDeviceManagerModule[type] : type;
    console.log('hereeee', listeners, 'module', iHealthDeviceManagerModule[type], 'typppe', deviceType);
    iHealthDeviceManagerModule.startDiscovery(deviceType);
  },
};

export default iHealthAPI;