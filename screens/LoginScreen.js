import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';
//import { AuthContext } from '../context/AuthContext';
//import { TextInput } from 'react-native-gesture-handler';

export default function LoginScreen({ navigation }) {
  //const [email, setEmail] = useState(null);
  //const [password, setPassword] = useState(null);

  const { login } = useContext(AuthContext);
  
  return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
        <View style={{paddingHorizontal:25}}>
            <View style={{ alignItems: 'center' }}>
            <Image source={require('../assets/images/Login.png')} style={{transform:[{rotate:'-5deg'}], width:350, height:350}} />  
        </View>
        <Text style={{
              fontSize: 20,
              fontWeight: '500',
              color: '#333',
              marginBottom: 30,
          }}
        >Login</Text> 
        <View style={{flexDirection:'row', borderBottomColor: '#ccc', borderBottomWidth:1, paddingBottom:8, marginBottom:8, alignItems:'center'}}>
           <MaterialIcons name='alternate-email' size={20} color='#407BFF' style={{marginRight:5}} />
          <TextInput placeholder='Email ID' style={{ flex: 1, padding: 3 }} keyboardType='email-address' /*value={email} onChangeText={ text => setEmail(text)}*/ />      
        </View> 
        <View style={{flexDirection:'row', borderBottomColor: '#ccc', borderBottomWidth:1, paddingBottom:8, marginBottom:8, alignItems:'center'}}>
           <Ionicons name='ios-lock-closed-outline' size={20} color='#407BFF' style={{marginRight:5}} />
          <TextInput placeholder='Password' style={{ flex: 1, padding: 3 }} secureTextEntry={true}/*value={password} onChangeText={text => setPassword(text)} *//> 
            <TouchableOpacity onPress={() => {}}>
                <Text style={{color:'#407BFF', fontWeight:'700'}}>Forgot?</Text>   
            </TouchableOpacity> 
        </View>
              <TouchableOpacity onPress={() => {login(/*email, password*/)}} style={{backgroundColor:'#407BFF', padding:20, borderRadius:10, marginBottom: 30}}>
                  <Text style={{textAlign:'center', fontWeight:'700', fontSize:16, color:'#fff'}}>Login</Text>
              </TouchableOpacity>
              <Text style={{ textAlign: 'center', color: '#666', marginBottom: 30 }}>Or, login with ...</Text>
              <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:30}}>
                <TouchableOpacity onPress={() => { }} style={{borderColor:'#ddd', borderWidth:2, borderRadius:10, paddingHorizontal:30, paddingVertical:10}}>
                  <Image source={require('../assets/images/google-48.png')} style={{width:30, height:30}} />
                </TouchableOpacity> 
                <TouchableOpacity onPress={() => { }} style={{borderColor:'#ddd', borderWidth:2, borderRadius:10, paddingHorizontal:30, paddingVertical:10}}>
                  <Image source={require('../assets/images/facebook-48.png')} style={{width:35, height:35}} />
                </TouchableOpacity> 
                <TouchableOpacity onPress={() => { }} style={{borderColor:'#ddd', borderWidth:2, borderRadius:10, paddingHorizontal:30, paddingVertical:10}}>
                  <Image source={require('../assets/images/twitter-48.png')} style={{width:30, height:30}} />
                </TouchableOpacity>  
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 30 }}>
                <Text>New to the app?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                  <Text style={{color:'#407BFF', fontWeight:'700'}}> Register </Text>
                </TouchableOpacity>
              </View>
              
              
        </View>
         
    </SafeAreaView>
  )
}