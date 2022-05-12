import React from 'react'
import { StyleSheet, View } from 'react-native'
import NavigationBar from './components/nav/nav'


const Main: React.FC = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
      <NavigationBar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: "stretch",
    flexDirection: 'column',
    alignSelf: 'stretch',
  }
})

export default Main