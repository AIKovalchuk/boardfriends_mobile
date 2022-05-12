import React from 'react'
import { SafeAreaView, StyleSheet, View,Text } from 'react-native'
import { useParams} from "react-router"

type Params = {
  id: string
}

const Event: React.FC = () => {
  const { id } = useParams<Params>();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>{"Event: " + id}</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontFamily: "CircularStd-Book",
    fontSize: 14,
    color: '#2f354b',
    textAlign: 'center'
  }
})

export default Event