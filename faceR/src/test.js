import {View, Button, Alert, Image , SafeAreaView, StyleSheet, Pressable, Text} from 'react-native';
import React, {useState} from 'react';
import * as ImagePicker from 'expo-image-picker';
import {firebase} from '../config';
import Fetch from './Fetch';



const test = ({navigation}) => {
    const [testImage, setTestImage] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [isVisible, setModalIsVisible] = useState(false);
    function closeAttendanceDisplay() {
        setModalIsVisible(false);
    }

    function startFetch(){
        setModalIsVisible(true);

    }

    const pickTestImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,        
        })
        const source = {uri: result.assets[0].uri};
        console.log(source);
        setTestImage(source);
    };

    const uploadTestImage = async () => {
        setUploading(true);
        const response = await fetch(testImage.uri);
        const blob = await response.blob();
        const filename = "/attendance/" + 'test' + '.jpg'
        // const filename = image.uri.substring(image.uri.lastIndexOf('/')+1);
        var ref = firebase.storage().ref().child(filename).put(blob);

        try {
            await ref;
        } catch (e) {
            console.log(e);
        }
        setUploading(false);
        Alert.alert(
            'Test Photo uploadeded!'
        );
        setTestImage(null);
    };
    
    // const getRes = async () => {
    //     fetch("http://192.168.4.23:3000/members");
    // }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageCont}>
                {!testImage && <Image source = {require('../assets/appLogo.png')}  style={styles.image} />}
                {testImage && <Image source={{ uri: testImage.uri }} style={styles.image} />}
            </View>

            <View style={styles.ButtonContainer}>
                <Pressable style={styles.ButtonShape} onPress={pickTestImage}>
                    <Text style={styles.buttonText}>Select Image</Text>
                </Pressable>
            </View>

            <View style={styles.ButtonContainer}>
                <Pressable style={styles.ButtonShape} onPress={uploadTestImage}>
                    <Text style={styles.buttonText}>Confirm</Text>
                </Pressable>
            </View>
            

            <View style={styles.ButtonContainer}>
                <Pressable style={styles.RButtonShape} onPress={startFetch}>
                    <Text style={styles.buttonText}>Get Results</Text>
                </Pressable>
                <Fetch visible={isVisible} onCancel={closeAttendanceDisplay}/>
            
            </View>

        </SafeAreaView>
    )
           
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A4E3AA',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopEndRadius: 100,
    borderTopStartRadius: 100
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
  RButtonShape:{
    backgroundColor: '#323232',
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
  image: {
    width: 350,
    height: 350,
    margin: 20
  },
  imageCont: {
    flex: 3,
    paddingTop: 20
  }
});
export default test