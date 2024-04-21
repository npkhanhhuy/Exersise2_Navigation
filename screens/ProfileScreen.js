import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProfileScreen = ({navigation, route}) => {
    const {name,age}= route.params

  return (
    <View style={styles.container}>
      <Text>Hello {name}</Text>
      <Text>Tuổi: {age}</Text>
      <Button
      title="Go Back"
        onPress={()=>navigation.goBack()}
      />
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})