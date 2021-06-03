export const commonTypes = {
  'SET_BARCODE': 'SET_BARCODE',

};

export const cameraActions = {
  setBarcode: barcode => ({
    type: commonTypes.SET_BARCODE,
    barcode
  }),


};