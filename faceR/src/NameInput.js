import {View, TextInput, Button, StyleSheet, ProgressViewIOSComponent} from 'react-native';
import React, {useState} from 'react';


function NameInput(props) {

    const [enteredName, setEnteredName] = useState('');

    function nameHandler(enteredText){
        setEnteredName(enteredText);
    }

    function onNameInput(){
        props.onAddName(enteredName)
        setEnteredName('');
    }

    return (
        <View>
            <TextInput 
            style={{height: 40}}
            placeholder="Input Person name"
            onChangeText={nameHandler}
            value = {enteredName}
            />

            <View>
                <Button 
                    title='Confirm'
                    onPress={onNameInput}
                    color='#b180f0'
                />

            </View>


        </View>

        

        
    )

}

export default NameInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom: 24,
        // borderBottomWidth: 1,
        // borderBottomColor: '#cccccc',
        padding: 20,
        backgroundColor:'#311b6b'
    }
})