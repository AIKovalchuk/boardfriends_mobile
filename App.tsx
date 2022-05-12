import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Routing from './src/routing';

const App = () => {

  return (
    <Routing />
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  card: {
    height: 100,
    color: 'white',
    borderRadius: 8,
    margin: 4,
    padding: 12,
    backgroundColor: 'gray',
  },
});

export default App;
