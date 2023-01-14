import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View } from 'react-native';
import UploadFaceScreen from './src/UploadFaceScreen';
import Fetch from './src/Fetch.js';
import React, {useState, useEffect} from 'react'; 
import UploadTestScreen from './src/UploadTestScreen';
import "react-native-url-polyfill/auto";

export default function App() {

  const [isVisible, setModalIsVisible] = useState(false);
  function closeAttendanceDisplay() {
    setModalIsVisible(false);
  }

  function startFetch(){
    setModalIsVisible(true);

  }

  return (
    <View style={styles.container}>
      <View style={styles.knownContainer}> 
        <UploadFaceScreen/>
      </View>
      <View style={styles.unkownContainer}>
        <UploadTestScreen/>
      </View>
      <View>
        <Button title='fetch' onPress={startFetch} />
        <Fetch visible={isVisible} onCancel={closeAttendanceDisplay}/>
      </View>
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  knownContainer: {
    flex: 4
  },
  unkownContainer: {
    flex: 4
  },
  fetchCont: {
    flex: 1
  }
});
