import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

type Props = {
  style?: object
  placeholder?: string
  value?: string
  onChange: (query: string) => void
}

const Input: React.FC<Props> = ({
  style,
  placeholder,
  value,
  onChange
}) => {

  const handleInput = (text: string) => {
    onChange(text)
  }

  return (
    <TextInput style={[styles.input]} placeholder={placeholder} value={value} onChangeText={handleInput} />
  )
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 16,
    fontFamily: 'Roboto',
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 21,

    backgroundColor: "#C4C4C4",

    
  }
})

export default Input