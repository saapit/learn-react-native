import React from 'react';
import {ScrollView, View} from 'react-native';
import SampleComponet from './pages/SampleComponent';
import StylingComponent from './pages/StylingComponent';
import FlexBox from './pages/FlexBox';
import Position from './pages/Position';

// arrow function
const App = () => {
  return (
    <View>
      <ScrollView>
        <SampleComponet />
        <StylingComponent />
        <FlexBox />
        <Position />
      </ScrollView>
    </View>
  );
};

export default App;
