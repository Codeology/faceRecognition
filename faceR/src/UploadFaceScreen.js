import {View, TextInput, Button, Alert, Image , SafeAreaView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import * as ImagePicker from 'expo-image-picker';
import {firebase} from '../config';
import { async } from '@firebase/util';

import NameInput from './NameInput';

const UploadFaceScreen = () => {
    const [image, setImage] = useState(false);
    const [imageName, setImageName] = useState('');
    const [uploading, setUploading] = useState(false);
    

    function onAddName(enteredName) {
        setImageName(enteredName);
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


    return (
        <SafeAreaView style={styles.container}>
            <Button title="Pick an image from camera roll" onPress={pickImage} />
            <NameInput onAddName={setImageName} />

            <View>
                {image && <Image source={{ uri: image.uri }} style={{ width: 200, height: 200 }} />}
                <Button title= 'Upload Known Image' onPress={uploadImage}/>
            </View>
            
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 300,
    margin: 20,
  }
});


export default UploadFaceScreen
