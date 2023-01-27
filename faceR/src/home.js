import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Pressable, View, Image, Text, Button} from 'react-native';
import React, {useState, useEffect} from 'react'; 
import "react-native-url-polyfill/auto";


export default function Home({navigation}) {
  const [isVisible, setModalIsVisible] = useState(false);
  function closeAttendanceDisplay() {
    setModalIsVisible(false);
  }

  function startFetch(){
    setModalIsVisible(true);

  }
  const PressHandler = () => {
    navigation.navigate('Members');

  }


  return (
    <View style={styles.container}>
        {/* <Image style={styles.image} source={require("../assets/favicon.png")}/> */}
        <View style={styles.headContainer}>
        <Image style={styles.logo} source= {require('../assets/codyLogo.png')} />
        <Text style = {styles.title}> CODEOLOGY </Text>
        </View>   
        <View style = {styles.AppName}>
        <Text style = {styles.Name}> OpenCaVo </Text>
        </View>
        <View style = {styles.AppName}>
            <Pressable style={styles.buttonContainer} onPress={PressHandler}>
                <Text style={styles.button} >START</Text>
            </Pressable>
        </View>
     
        <Image source= {require('../assets/avo_pit.png')} style={styles.avoFAce} />
     
      
      {/* <View style={styles.knownContainer}> 
        <UploadFaceScreen/>
      </View>
      <View style={styles.unkownContainer}>
        <UploadTestScreen/>
      </View>
      <View>
        <Button title='fetch' onPress={startFetch} />
        <Fetch visible={isVisible} onCancel={closeAttendanceDisplay}/>
      </View> */}

    </View>
   
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A4E3AA',
    alignItems: 'center',
    justifyContent: 'center'
  },
  avoFAce: {
    resizeMode:'contain',
    flex: 3,
    alignItems: "flex-end",
    width: 400,
    height: 400,
    marginBottom: 4 
  },
  logo: {
    alignItems: 'center',
    width: 70,
    height: 70
    
  },
  AppName:{
    flex: 1
  },
  Name: {
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 60

  },
  title: {
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10
    
  },
  headContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60
  },
  buttonContainer:{
    margin: 8,
    borderRadius: 6,
    color: '#FFFFF',
    backgroundColor: '#629081',
    width: 200,
    height: 50,
    alignItems: 'center',
  },
 
  knownContainer: {
    flex: 4
  },
  unkownContainer: {
    flex: 4
  },
  fetchCont: {
    flex: 1
  },
  button:{
    color: '#FFFF',
    fontSize: 25,
    fontWeight: 'bold',
    padding: 10
  }
});
