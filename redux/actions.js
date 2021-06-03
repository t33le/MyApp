export const globalTypes = {
  'ROUTE_CHANGED': 'ROUTE_CHANGED',
  'SET_MEASURE_TYPE': 'SET_MEASURE_TYPE',
  'SET_DEVICE': 'SET_DEVICE',

};

export const globalActions = {
  setNavigationRoutes: (prevRoute, curRoute) => ({
    type: globalTypes.ROUTE_CHANGED,
    prevRoute,
    curRoute
  }),

  setMeasureType: measureType => ({
    type: globalTypes.SET_MEASURE_TYPE,
    measureType
  }),

  setDevice: (deviceType, deviceInfo) => ({
    type: globalTypes.SET_DEVICE,
    deviceType,
    deviceInfo
  }),
};