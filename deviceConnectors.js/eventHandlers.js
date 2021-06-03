let DeviceEventHandlers = {};

DeviceEventHandlers.handleScanDevice = (e) => {
  console.log('hereeee handleScanDevice', e);
};

DeviceEventHandlers.handleScanDeviceFinished = (e) => {
  console.log('hereeee handleScanDeviceFinished', e);

};

DeviceEventHandlers.handleDeviceConnected = (e) => {
  console.log('hereeee handleDeviceConnected', e);

};

DeviceEventHandlers.handleDeviceConnectFailed = (e) => {
  console.log('hereeee handleDeviceConnectFailed', e);

};

DeviceEventHandlers.handleDeviceDisconnected = (e) => {
  console.log('hereeee handleDeviceDisconnected', e);

};

export default DeviceEventHandlers;

