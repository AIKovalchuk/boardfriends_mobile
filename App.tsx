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

const App = () => {

  return (
  <View style={styles.container}>
    <View style={styles.card}><Text>Hello, world! 1</Text></View>
    <View style={styles.card}><Text>Hello, world! 2</Text></View>
    <View style={styles.card}><Text>Hello, world! 3</Text></View>
  </View>
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
