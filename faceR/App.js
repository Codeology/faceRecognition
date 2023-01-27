import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Pressable, View, Image, Text, Button} from 'react-native';
import UploadFaceScreen from './src/UploadFaceScreen';
import Fetch from './src/Fetch.js';
import React, {useState, useEffect} from 'react'; 
import UploadTestScreen from './src/UploadTestScreen';
import "react-native-url-polyfill/auto";
import Navigator from './routes/homestack';

export default function App() {

  const [isVisible, setModalIsVisible] = useState(false);
  function closeAttendanceDisplay() {
    setModalIsVisible(false);
  }

  function startFetch(){
    setModalIsVisible(true);

  }


  return (
    <Navigator></Navigator>
    // <View style={styles.container}>
    //   {/* <Image style={styles.image} source={require("../assets/favicon.png")}/> */}
    //   <View style={styles.headContainer}>
    //     <Image style={styles.logo} source= {require('./assets/codyLogo.png')} />
    //     <Text style = {styles.title}> CODEOLOGY </Text>
    //   </View>   
    //   <View style = {styles.AppName}>
    //     <Text style = {styles.Name}> OpenCaVo </Text>
    //   </View>

    //   <View style = {styles.buttonContainer}>
    //     <Button title='START' onPress={startFetch}></Button>
    //     {/* <Fetch visible={isVisible} onCancel={closeAttendanceDisplay}></Fetch> */}
    //   </View>



  // <View>
  //   <Image source= {require('./assets/avo_pit.png')} />
  // </View>     
      
  // {/* <View style={styles.knownContainer}> 
  //   <UploadFaceScreen/>
  // </View>
  // <View style={styles.unkownContainer}>
  //   <UploadTestScreen/>
  // </View>
  // <View>
  //   <Button title='fetch' onPress={startFetch} />
  //   <Fetch visible={isVisible} onCancel={closeAttendanceDisplay}/>
  // </View> */}

  //   </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A4E3AA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    alignItems: 'center'
    
  },
  AppName:{
    flex: 1

  },
  Name: {
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: '50'

  },
  title: {
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: '20',
    padding: 10
    
  },
  headContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60
  },
  buttonContainer:{
    
    flexDirection:'row',
    margin: 8,
    borderRadius: 6,
    color: '#629081'

    
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
