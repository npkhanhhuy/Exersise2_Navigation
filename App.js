import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MyDrawer from './routers/MyDrawer'
import MyStack from './routers/MyStack'
import MyBottomTab from './routers/MyBottomTab'

const App = () => {
  return (
      <NavigationContainer>
        {/*<MyStack/>*/}
        {/*<MyDrawer/>*/}
        {/**/}
        <MyBottomTab/>
      </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})