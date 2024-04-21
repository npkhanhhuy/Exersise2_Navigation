import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {Avatar, Icon} from 'react-native-paper'

const Stack = createStackNavigator();
const Logo =()=>{
    return (
        <Avatar.Image
            source={{uri:'https://reactnative.dev/img/tiny_logo.png'}}
            size={60}
        />
    )
}
const MyStack = () => {
  return (
    <Stack.Navigator
    initialRouteName="Home"
    //screenOptions={{ }}
    >
        <Stack.Screen name="Home" component={HomeScreen}
            options={{
                title:"Home Screen",
                headerStyle:{
                    backgroundColor:"aqua"
                },
                headerLeft:()=><Logo/>,
                headerRight:(props) => <Icon source="home" size={40} color="blue"/>
            }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen}/>
    </Stack.Navigator>
  )
}

export default MyStack
