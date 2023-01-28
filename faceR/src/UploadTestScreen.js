import {View, Button, Alert, Image , SafeAreaView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import * as ImagePicker from 'expo-image-picker';
import {firebase} from '../config';


const Attendance = ({navigation}) => {
    const [testImage, setTestImage] = useState(false);
    const [uploading, setUploading] = useState(false);


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
        const filename = 'test' + '.jpg'
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


    return (
        <SafeAreaView style={styles.container}>
            <Button title="Pick a test image from camera roll" onPress={pickTestImage} />
            <View>
                {testImage && <Image source={{ uri: testImage.uri }} style={{ width: 400, height: 300 }} />}
                <Button title= 'Upload Test Image' onPress={uploadTestImage}/>
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
  }
});


export default Attendance
