import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, View, TextInput, Button, TouchableOpacity } from 'react-native';

const WaifuDetail = props => {
  	return (
        <View style={styles.list}>
			<Text>Waifu Detail!</Text>
		</View>
  	);
}

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

export default WaifuDetail;