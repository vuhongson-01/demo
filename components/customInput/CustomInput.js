import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder, srt, inputType='default'}) => {
  return (
    <View style={styles.input_container}>
        <TextInput 
          placeholder={placeholder}
          style={styles.input}
          value={value}
          onChangeText={setValue}
          secureTextEntry={srt}
          keyboardType={inputType}
          />
    </View>
  )
}

const styles = StyleSheet.create({
    input_container:{
        marginVertical: 5,
        width: '100%',
        backgroundColor: 'white',
        borderColor: '#e8e8e8',
        borderWidth: 0.5,
        paddingVertical: 15,
        borderRadius: 5,
        paddingHorizontal: 15,
    },

    input: {
        // color: 'black',
        // width: '100%',
        // padding: 15,
    }
})

export default CustomInput