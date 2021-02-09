import React from 'react';
import {ScrollView, View} from 'react-native';
import Communication from './pages/Communication';
// import SampleComponet from './pages/SampleComponent';
import StylingComponent from './pages/StylingComponent';
// import FlexBox from './pages/FlexBox';
import Position from './pages/Position';
import PropsDynamic from './pages/PropsDynamic';
import StateDynamic from './pages/StateDynamic';
import ReactNativeSvg from './pages/ReactNativeSvg';
import CallAPIVanilla from './pages/CallAPIVanilla';
import CallAPIAxios from './pages/CallAPIAxios';
import LocalAPI from './pages/LocalAPI';

// arrow function
const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponet /> */}
        {/* <StylingComponent /> */}
        {/* <Position /> */}
        {/* <FlexBox /> */}
        {/* <PropsDynamic /> */}
        {/* <StateDynamic /> */}
        {/* <Communication /> */}
        {/* <ReactNativeSvg /> */}
        {/* <CallAPIVanilla /> */}
        {/* <CallAPIAxios /> */}
        <LocalAPI />
      </ScrollView>
    </View>
  );
};

export default App;
