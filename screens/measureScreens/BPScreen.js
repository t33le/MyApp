import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { globalActions } from '../../redux/actions';

const BPScreen = props => {
  const { setBPDevice } = props;

  return (
    <View style={{ flex: 1 }}>
      <Text>BP Screen</Text>
      <View style={{ flex: 1 }}>
        <Button
          title='Test'
          onPress={() => {
            setBPDevice('heyeyeyeyeye');
          }}
        />
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  BPDevice: state.globalReducers.savedDevices.BP,
});

const mapDispatchToProps = dispatch => ({
  setBPDevice: deviceInfo => dispatch(globalActions.setDevice('BP3L', deviceInfo))
});

export default connect(mapStateToProps, mapDispatchToProps)(BPScreen);