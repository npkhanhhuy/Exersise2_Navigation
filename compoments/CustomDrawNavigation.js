import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Drawer } from 'react-native-paper'

const CustomDrawNavigation = ({navigation}) => {
  return (
    <Drawer.Section style={{paddingTop:40}}>
        <Drawer.Item
        label="Home"
        icon={"home"}
        onPress={()=>navigation.navigate("Home")}
        />
        <Drawer.Item
        label="Profile"
        icon={"account"}
        onPress={()=>
          navigation.navigate("Profile",
          {
              name:"Huy",
              age: 22,
          }
        )
      }
        />
    </Drawer.Section>
  )
}

export default CustomDrawNavigation

const styles = StyleSheet.create({})