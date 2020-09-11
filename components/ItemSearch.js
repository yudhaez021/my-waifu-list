import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, View, TextInput, Button, TouchableOpacity } from 'react-native';

const ItemSearch = props => {
  	return (
        <TouchableOpacity activeOpacity={0.7} onPress={props.deleteItem.bind(this, props.id)} >
            <View style={styles.list}>
                <Text style={{color: 'white'}}>{props.item}</Text>
            </View>
        </TouchableOpacity>
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

export default ItemSearch;