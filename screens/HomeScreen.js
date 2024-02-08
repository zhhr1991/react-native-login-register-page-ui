import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HomeScreen() {
  const { logout } = useContext(AuthContext);

  return (
    <SafeAreaView style={{marginTop: 50, flex:1, justifyContent:'center', alignItems: 'center', backgroundColor:'#407BFF' }}>
      <View>
        <Text>HomeScreen</Text>
        <TouchableOpacity onPress={() => {logout()}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="exit-outline" size={22} />
            <Text 
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
     </View>
    </SafeAreaView>
    
  )
}