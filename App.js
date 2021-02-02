import React from 'react';
import {ScrollView, View} from 'react-native';
import MaterialFlexBlox from './MaterialFlexBox';
import PositionReactNative from './PositionReactNative';
import SampleComponet from './SampleComponent';
import StylingReactNativeComponent from './StylingReactNativeComponent';

// arrow function
const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponet />
        <StylingReactNativeComponent />
        <MaterialFlexBlox /> */}
        <PositionReactNative />
      </ScrollView>
    </View>
  );
};

export default App;
