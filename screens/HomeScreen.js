import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'

const HomeScreen = ({navigation}) => {
    const [count, setCount] = useState(0)
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=><Button title="INFO" onPress={()=>setCount(count+1)}/>
        })
    },[count])
  return (
    <View style={styles.container}>
        <Text>count:{count}</Text>
      <Button
      title="Go to Profile"
      onPress={()=>
        navigation.navigate("Profile",
        {
            name:"Huy",
            age: 22,
        }
      )
    }
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})