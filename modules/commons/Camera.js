import React from 'react';
import { connect } from 'react-redux';

import { RNCamera } from 'react-native-camera';
import { cameraActions } from './redux/actions';

const MyCamera = props => {
  const { onBarCodeRead } = props;

  return <RNCamera 
    captureAudio={false}
    onBarCodeRead={onBarCodeRead}
    barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
    style={{ flex: 1 }}
    type={RNCamera.Constants.Type.back}
    androidCameraPermissionOptions={{
      title: 'Permission to use camera',
      message: 'We need your permission to use your camera',
      buttonPositive: 'Ok',
      buttonNegative: 'Cancel',
    }}
  />;
};

const mapStateToProps = state => {

};

const mapDispatchToProps = dispatch => ({
  setBarcode: barcode => dispatch(cameraActions.setBarcode(barcode))
});

export default connect(mapStateToProps, mapDispatchToProps)(MyCamera);