import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import { TextInput } from 'react-native-gesture-handler';

export default function RegisterScreen({navigation}) {
  return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
        <View style={{paddingHorizontal:25}}>
            <View style={{ alignItems: 'center' }}>
            <Image source={require('../assets/images/Signup.png')} style={{transform:[{rotate:'-5deg'}], width:350, height:350}} />  
        </View>
        <Text style={{
              fontSize: 20,
              fontWeight: '500',
              color: '#333',
              marginBottom: 30,
          }}
        >Register</Text> 
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
        <Text style={{ textAlign: 'center', color: '#666', marginBottom: 30 }}>Or, with email</Text>
        <View style={{flexDirection:'row', borderBottomColor: '#ccc', borderBottomWidth:1, paddingBottom:8, marginBottom:8, alignItems:'center'}}>
           <MaterialIcons name='person-outline' size={22} color='#407BFF' style={{marginRight:5}} />
           <TextInput placeholder='User Nmae' style={{flex:1, padding:3}} keyboardType='text' />      
        </View>
        <View style={{flexDirection:'row', borderBottomColor: '#ccc', borderBottomWidth:1, paddingBottom:8, marginBottom:8, alignItems:'center'}}>
           <MaterialIcons name='alternate-email' size={20} color='#407BFF' style={{marginRight:5}} />
           <TextInput placeholder='Email ID' style={{flex:1, padding:3}} keyboardType='email-address' />      
        </View> 
        <View style={{flexDirection:'row', borderBottomColor: '#ccc', borderBottomWidth:1, paddingBottom:8, marginBottom:8, alignItems:'center'}}>
           <Ionicons name='ios-lock-closed-outline' size={20} color='#407BFF' style={{marginRight:5}} />
            <TextInput placeholder='Password' style={{flex: 1, padding: 3 }} secureTextEntry={true} /> 
            <TouchableOpacity onPress={() => {}}>
                <Text style={{color:'#407BFF', fontWeight:'700'}}></Text>   
            </TouchableOpacity> 
        </View>
              <TouchableOpacity onPress={() => {}} style={{backgroundColor:'#407BFF', padding:20, borderRadius:10, marginBottom: 30}}>
                  <Text style={{textAlign:'center', fontWeight:'700', fontSize:16, color:'#fff'}}>Register</Text>
              </TouchableOpacity>
              
              
              <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 30 }}>
                <Text>Already registered?</Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Text style={{color:'#407BFF', fontWeight:'700'}}> Login </Text>
                </TouchableOpacity>
              </View>
              
              
        </View>
         
    </SafeAreaView>
  )
}