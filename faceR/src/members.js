import {View, Text, TextInput, Button, Alert, Image , SafeAreaView, StyleSheet, Pressable} from 'react-native';
import React, {useState} from 'react';
import * as ImagePicker from 'expo-image-picker';
import {firebase} from '../config';
import { async } from '@firebase/util';

import NameInput from './NameInput';

const Members = ({navigation}) => {
    const [image, setImage] = useState(false);
    const [imageName, setImageName] = useState('');
    const [uploading, setUploading] = useState(false);


    function onAddName(enteredName) {
        setImageName(enteredName);
    }

    const pressHandler= () =>{
        navigation.goback();
    }


    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4,3],
            quality: 0.5,        
        })
        const source = {uri: result.assets[0].uri};
        console.log(source);
        setImage(source);
    };

    const uploadImage = async () => {
        setUploading(true);
        const response = await fetch(image.uri);
        const blob = await response.blob();
        const filename = imageName + '.jpg'
        // const filename = image.uri.substring(image.uri.lastIndexOf('/')+1);
        var ref = firebase.storage().ref().child(filename).put(blob);

        try {
            await ref;
        } catch (e) {
            console.log(e);
        }
        setUploading(false);
        Alert.alert(
            'Photo uploadeded!'
        );
        setImage(null);
    };
    const resetImage = async() => {
        var source = require('../assets/avo_pit.png');
        setImage(source);
    }


    return (
       
        <View style={styles.container}>
            {/* <View styles={styles.ButtonContainer}>
                <Button title='Select Picture' onPress={pickImage} color='#236245'/>
            </View> */}

            <View style = {styles.AppName}>
                <Pressable style={styles.ButtonContainer} onPress={pickImage}>
                    <Text style={styles.button} >Select Picture</Text>
                </Pressable>
            </View>

            <View style={styles.imageContainer}>
                {!image && <Image source = {require('../assets/avo_pit.png')}  style={{ width: 200, height: 200 }} />}
                {image && <Image source={{ uri: image.uri }} style={{ width: 200, height: 200 }} />}
            </View>
            <Button style={styles.ButtonContainer} title='Clear' onPress={resetImage} color='#236245'/>
            
            <View style={styles.inputContainer}>
                <NameInput onAddName={setImageName} />
            </View>
           

            <View style={styles.uploadCont}>
                <Button title= 'Save Member' onPress={uploadImage}/>
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
    borderTopRightRadius: '100',
    borderTopLeftRadius: '100',
    padding: 20
  },
  ButtonContainer:{
    flex: 1,
    color: '236245',
    padding: 20,
    // margin: 8,
    // borderRadius: 6,
    // color: '#FFFFF',
    // backgroundColor: '#629081',
    // width: 200,
    // height: 50,
    // alignItems: 'center',
  },
  button:{
    color: '#FFFF',
    fontSize: 25,
    fontWeight: 'bold',
    padding: 10
  },
  imageContainer:{
    flex: 3
  },
  inputContainer:{
    flex: 2,
    padding: 20,

  },
  image: {
    width: 300,
    height: 300,
    margin: 20,
  },
  uploadCont: {
    flex: 1,
    padding: 10
  }
});

export default Members
