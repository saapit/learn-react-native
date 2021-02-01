import React from 'react';
import {ScrollView, View} from 'react-native';
import SampleComponet from './SampleComponent';
import StylingReactNativeComponent from './StylingReactNativeComponent';

// arrow function
const App = () => {
  return (
    <View>
      <ScrollView>
        <SampleComponet />
        <StylingReactNativeComponent />
      </ScrollView>
    </View>
  );
};

export default App;
