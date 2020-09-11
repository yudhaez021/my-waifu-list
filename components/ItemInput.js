import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, View, TextInput, Button } from 'react-native';

const ItemInput = props => {
	const [output, setOutput] = useState('');

	const fn_input = (text) => {
		setOutput(text);
	};

  	return (
        <View style={styles.searchContainer}>
            <TextInput
                placeholder="Search"
                style={styles.searchInput}
                onChangeText={fn_input}
                value={output}
            >
            </TextInput>
            <Button title="Save" color="#00bcd4" onPress={props.submit.bind(this, output)}></Button>
        </View>
  	);
};

const styles = StyleSheet.create({
	searchInput: {
		borderColor: '#00bcd4', 
		borderWidth: 1, 
		padding: 10,
		width: '80%',
    },
    
    searchContainer: {
		flexDirection: 'row', 
		justifyContent: 'space-between',
		alignItems: 'center', 
		marginBottom: 30
	},
});

export default ItemInput;