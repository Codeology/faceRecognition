import {View, Image, Button, Modal, StyleSheet} from 'react-native'
import React, {useState, useEffect} from 'react'

import {getStorage, ref, getDownloadURL, downloadFile} from 'firebase/storage'


function Fetch(props) {
    const [testImage, setTestImage] = useState(false);
    const [url, setUrl] = useState();
    const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch("http://192.168.1.139:5000/members");
    // }, []);
    fetch("http://192.168.4.23:3000/members");

    const fetchImage = async () => {
        const storage = getStorage();
        const reference = ref(storage, 'attendance/test.jpg');
        await getDownloadURL(reference).then((x) => {
            setUrl(x);
        });
        
    };

    const storage = getStorage();
    const reference = ref(storage, 'attendance/testR.jpg');
    getDownloadURL(reference).then((x) => {
        setUrl(x);
    });
    
        

    return (
    <Modal visible={props.visible} animationType='slide'>

        <View style={styles.inputContainer}>
            
            <Image 
            style={{ width: 400, height: 400 }}
            source = {{uri: url}}
            />


            <View style={styles.button}>
                <Button title= 'Cancel' onPress={props.onCancel}  color='#f31282'/>
            </View>
            
        </View>
        
           

    </Modal>
    
)

}


export default Fetch

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom: 24,
        // borderBottomWidth: 1,
        // borderBottomColor: '#cccccc',
        padding: 20,
        backgroundColor:'#A4E3AA'
    },
    image: {
        width: 350,
        height: 350,
        margin: 20
    },
    imageCont: {
        flex: 3,
        paddingTop: 20
    },
    textinput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor:'#236245',
        color: '#120438',
        width: '100%',
        marginRight: 8,
        padding: 10
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row'
    },
    button: {
        width: 100,
        marginHorizontal: 8
    }
})