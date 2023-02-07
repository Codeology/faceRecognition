import {View, Text, TextInput, Button, Alert, Image , SafeAreaView, StyleSheet, Pressable} from 'react-native';
import React, {useState} from 'react';
import * as ImagePicker from 'expo-image-picker';
import {firebase} from '../config';
import { async } from '@firebase/util';

import NameInput from './NameInput';

const Selection = ({navigation}) => {
    const [image, setImage] = useState(false);
    const [imageName, setImageName] = useState('');
    const [uploading, setUploading] = useState(false);


    function onAddName(enteredName) {
        setImageName(enteredName);
    }

    const pressHandler= () =>{
        navigation.goback();
    }


    const nextScreen = () => {
      navigation.navigate('Members');
    }

    const atScreen = () => {
      navigation.navigate('test');
    }

    const allMemberScreen = () => {
      navigation.navigate('listMembers');
    }


    return (
       
        <View style={styles.container}>

            <View style={styles.imageContainer}>
                {!image && <Image source = {require('../assets/avo_pit.png')}  style={styles.image} />}
                {image && <Image source={{ uri: image.uri }} style={styles.image} />}
            </View>

            <View style={styles.ButtonContainer}>
                <Pressable style={styles.ButtonShape} onPress={nextScreen}>
                    <Text style={styles.buttonText}>Add Members</Text>
                </Pressable>
            </View>

            <View style={styles.ButtonContainer}>
                <Pressable style={styles.ButtonShape} onPress={atScreen}>
                    <Text style={styles.buttonText}> Attendance </Text>
                </Pressable>
            </View>

            <View style={styles.ButtonContainer}>
                <Pressable style={styles.ButtonShape} onPress={allMemberScreen}>
                    <Text style={styles.buttonText}> All Members </Text>
                </Pressable>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A4E3AA',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    padding: 20
  },
  ButtonContainer: {
    flex: 1,
    padding: 10
  },
  ButtonShape:{
    backgroundColor: '#236245',
    margin: 8,
    marginBottom: 20,
    borderRadius: 6,
    width: 250,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText:{
    color: '#FFFF',
    fontSize: 25,
    padding: 10,
    textAlignVertical: 'center'
  },
  clearShape:{
    backgroundColor: '#236245',
    margin: 8,
    borderRadius: 6,
    width: 90,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  clearText:{
    color: '#FFFF',
    fontSize: 17,
    padding: 10,
    textAlignVertical: 'center'
  },
  imageContainer:{
    flex: 5,
    padding: 5,
  },
  inputContainer:{
    flex: 2,
    padding: 20,

  },
  image: {
    width: 300,
    height: 300,
    margin: 10,
  },
  uploadCont: {
    flex: 1,
    padding: 10
  }
});

export default Selection
