import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, View, TextInput, Button } from 'react-native';

import ItemSearch from './components/ItemSearch';
import ItemInput from './components/ItemInput';

export default function App() {	
	const [search, setSearch] = useState([]);
	
	const fn_search = searchValue => {
		console.log(searchValue);
		setSearch(search => [
			...search, 
			{ 
				id: Math.random().toString(), 
				value: searchValue 
			}
		]);
		// setSearch(search => []); -> how to remove state
	};
	const fn_delete = id => {
		setSearch(search => {
			return search.filter( (_search) => _search.id !== id );
		});
	};

  	return (
    	<View style={styles.container}>
			<ItemInput submit={fn_search} />

			<ScrollView style={{ height: 300, marginBottom: 10 }}>
				<View style={{marginBottom: 10}}>
					{search.map( (res) => <ItemSearch item={res.value} id={res.id} deleteItem={fn_delete} /> )}
				</View>
			</ScrollView>

			{/* <View style={{marginTop: 100}}>
				<TextInput
					placeholder="Full Name"
					style={styles.input}
				>
				</TextInput>
				
				<Text>{output}</Text>
				<View style={styles.container}></View>
				
				<Button title="Save" onPress={() => setOutput('Dont do something in here')}></Button>
				<StatusBar style="auto" />
			</View> */}
    	</View>
  	);
}

const styles = StyleSheet.create({
  	container: {
    	padding: 30,
    	paddingTop: 70
	},

	input: {
		borderColor: 'black', 
		borderWidth: 1, 
		marginBottom: 20, 
		marginTop: 20, 
		padding: 10
	},

	list: {
		color: 'white',
		backgroundColor: '#00bcd4',
		// display: ;
		textAlign: 'center',
		marginBottom: 10,
		lineHeight: 40,
		padding: 10,
		color: 'white'
	}
});