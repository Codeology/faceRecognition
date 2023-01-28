import {View, TextInput, Button, StyleSheet, Pressable, KeyboardAvoidingView, Text} from 'react-native';
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

    function onNameClear(){
        setEnteredName('');
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={styles.inputContainer}>
                <TextInput 
                style={styles.textinput}
                placeholder="Input Person name"
                onChangeText={nameHandler}
                value = {enteredName}
                />
            </View>
            
            {/* <View style={styles.ButtonContainer}>
                <Button 
                    title='Confirm'
                    onPress={onNameInput}
                    color='#323232'
    
                />

            </View> */}

            <View style={styles.buttonLayout}>
                <View style={styles.ButtonContainer}>
                    <Pressable style={styles.confirmShape} onPress={onNameInput}>
                        <Text style={styles.confirmText}>Confirm</Text>
                    </Pressable>
                </View>

                <View style={styles.ButtonContainer}>
                    <Pressable style={styles.confirmShape} onPress={onNameClear}>
                        <Text style={styles.confirmText}>Cancel</Text>
                    </Pressable>
                </View>

            </View>
            


        </KeyboardAvoidingView>

        

        
    )

}

export default NameInput

const styles = StyleSheet.create({
    inputContainer: {
        width: 350,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        // marginBottom: 24,
        // borderBottomWidth: 1,
        // borderBottomColor: '#cccccc',
        padding: 20,
        backgroundColor:'#DDEADB'
    },
    textinput: {
        flex: 1,
        // borderWidth: 1,
        // borderColor: '#DDEADB',
        backgroundColor:'#DDEADB',
        color: '#3A554C',
        width: '100%',
        marginRight: 20,
        padding: 10,
        borderRadius: 10

    },
    buttonLayout: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ButtonContainer: {
        flex: 1,
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    confirmShape: {
        backgroundColor: '#323232',
        margin: 8,
        marginBottom: 20,
        borderRadius: 6,
        width: 100,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    confirmText: {
        color: '#FFFF'
    }
})