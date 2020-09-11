import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { WAIFUS } from '../db/waifuDB';

const WaifuListImage = props => {
	const _id = props.navigation.getParam('id');
	// const _waifuName = props.navigation.getParam('waifuName');
	// const _age = props.navigation.getParam('age');
	// const _avatar = props.navigation.getParam('avatar');
	const _selectedWaifu = WAIFUS.find(item => item.id === _id);
	
  	return (
        <View style={styles.list}>
			<Text>Waifu List Image!</Text>
			<Text>{_selectedWaifu.waifuName}</Text>
			<Button
				title="Waifu Detail" 
				// onPress={() => props.navigation.navigate({routeName: 'WaifuDetail'})}
				onPress={() => props.navigation.push('WaifuDetail')}
			/>
		</View>
  	);
}

WaifuListImage.navigationOptions = navigationData => {
	const waifuName = navigationData.navigation.getParam('waifuName');
	return {
		headerTitle: waifuName
	};
};

const styles = StyleSheet.create({
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

export default WaifuListImage;