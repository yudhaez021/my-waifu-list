import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { 
	StyleSheet, 
	Text, 
	ScrollView, 
	View, 
	TextInput, 
	Button, 
	TouchableOpacity, 
	FlatList,
	Platform,
	ImageBackground,
	Image
} from 'react-native';
import { WAIFUS } from '../db/waifuDB';

const WaifuList = props => {
	const renderGridItem = (data) => {
		return (
			<View style={styles.card}>
				<TouchableOpacity 
					activeOpacity={0.7}
					onPress={
						() => props.navigation.navigate({
							routeName: 'WaifuListImage',
							params: {
								id: data.item.id,
								waifuName: data.item.waifuName,
								age: data.item.age,
								avatar: data.item.avatar
							}
						})
					}
				>
					{/* <Image source={{ uri: data.item.avatar }}  resizeMode="contain" /> */}
					<ImageBackground
						source={{ uri: data.item.avatar }}
						style={styles.cardBgImage}
					>
						<View>
							<Text style={styles.cardText}>{data.item.waifuName}</Text>
						</View>
					</ImageBackground>
				</TouchableOpacity>
			</View>
		);
	}
	  
	return (
        // <View style={styles.list}>
		// 	<Text>Waifu List!</Text>
		// 	<Button
		// 		title="Waifu List Image" 
		// 		// onPress={() => props.navigation.navigate({routeName: 'WaifuListImage'})}
		// 		onPress={() => props.navigation.push('WaifuListImage')}
		// 	/>
		// </View>

		<FlatList
			keyExtractor={ (data, index) => data.id}
			data={WAIFUS}
			renderItem={renderGridItem}
			numColumns={2}
		/>
  	);
}

WaifuList.navigationOptions = navigationData => {
	return {
		headerTitle: 'My Waifu List',
	};
};

const styles = StyleSheet.create({
	card: {
		flex: 1,
		margin: 15,
		height: 250,
		borderRadius: 10,
		overflow:
		  Platform.OS === 'android' && Platform.Version >= 21
			? 'hidden'
			: 'visible',
		elevation: 5
	},
	cardBgImage: {
		width: '100%',
		height: '100%',
		justifyContent: 'flex-end',
	},
	cardText: {
		color: 'white',
		padding: 10,
		backgroundColor: 'rgba(0,0,0,0.3)'
	}
});

export default WaifuList;