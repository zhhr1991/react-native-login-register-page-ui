import { View, Text, ActivityIndicator } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from '../navigation/AuthStack';
import HomeScreen from '../screens/HomeScreen';

export default function NavCont() {

    const {isLoading,userToken}=useContext(AuthContext)

    if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={'large'} />
      </View>
    )
    
  }
  return (
      <NavigationContainer>
        {userToken !== null ? <HomeScreen /> : <AuthStack />}
      </NavigationContainer>
  )
}