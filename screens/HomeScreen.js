import React, { useEffect } from 'react';
import { TouchableOpacity, SafeAreaView, Text } from 'react-native';
import { connect } from 'react-redux';
import { globalActions } from '../redux/actions';

import { SUPPORTED_VITALS_DEVICES } from '../constants';

const HomeScreen = props => {
  const { curRoute, navigation, setMeasureType } = props;

  useEffect(() => {
    if(curRoute === 'HomeScreen') {
      setMeasureType(null);
    }
  }, [curRoute]);
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      {
        Object.keys(SUPPORTED_VITALS_DEVICES).map(vital => {
          const path = `${vital}Screen`;
          const onPress = () => {
            setMeasureType(vital);
            navigation.navigate(path);
          };
          return (
            <TouchableOpacity
              key={vital}
              onPress={onPress}
              style={{
                alignItems: "center",
                backgroundColor: "#DDDDDD",
                padding: 10,
                marginTop: 15
              }}
            >
              <Text>Measure {vital}</Text>
            </TouchableOpacity>
          )
        })
      }
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  curRoute: state.globalReducers.curRoute
});

const mapDispatchToProps = dispatch => ({
  setMeasureType: measureType => dispatch(globalActions.setMeasureType(measureType))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);