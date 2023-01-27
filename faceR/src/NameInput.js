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
            style={styles.textinput}
            placeholder="Input Person name"
            onChangeText={nameHandler}
            value = {enteredName}
            />

            <View style={styles.ButtonContainer}>
                <Button 
                    title='Confirm'
                    onPress={onNameInput}
                    color='#323232'
    
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
    },
    textinput: {
        flex: 2,
        borderWidth: 1,
        borderColor: '#DDEADB',
        backgroundColor:'#DDEADB',
        color: '#3A554C',
        width: '100%',
        marginRight: 20,
        padding: 8,
        borderRadius: 10

    },
    ButtonContainer: {
        flex: 1,
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center'
        
    }
})