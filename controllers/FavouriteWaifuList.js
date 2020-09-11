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
	Image,
	AsyncStorage
} from 'react-native';
import { useSelector } from 'react-redux';

import { WAIFUS } from '../db/waifuDB';

const uriWaifuNotFound = 'https://myhartono.com/images/static/forbidden/waifuNotFound.jpg';
var dataFavourite = [];

// var _retrieveFavourites;
// _retrieveFavourites = async () => {
// 	try {
// 	  	const value = await AsyncStorage.getItem('waifuId');
// 	  	if (value !== null) {
// 			dataFavourite = [value];
// 	  	}
// 	} catch (error) {
// 		console.log(error);
// 	}

// 	if (dataFavourite) {
// 		console.log(dataFavourite);

// 		var _tmpdataFavourite;
// 		_tmpdataFavourite = WAIFUS.filter(item => item.id == dataFavourite[0]);

// 		dataFavourite = _tmpdataFavourite; 
// 	}
// };
// _retrieveFavourites();

const FavouriteWaifuList = props => {
	dataFavourite = useSelector(state => state.waifus.favoriteWaifus);

	const renderGridItem = (data) => {
		return (
			<View style={styles.card}>
				<TouchableOpacity 
					activeOpacity={0.7}
				>
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
	  
	if (dataFavourite.length > 0) {
		return (
			<FlatList
				keyExtractor={ (data, index) => data.id}
				data={dataFavourite}
				renderItem={renderGridItem}
				numColumns={2}
			/>
		);
	} else {
		return (
			<View>
				<Image
					source={{ uri: uriWaifuNotFound }}
					style={styles.waifuImgNotFound}
				/>
				<Text style={styles.waifuNotFound}>You don't have favourite waifu, let's search a waifu and add to your list favourite waifu!</Text>
			</View> 
		);	
	}
}

FavouriteWaifuList.navigationOptions = navigationData => {
	return {
		headerTitle: 'My Favourite Waifu',
		headerStyle: {
			backgroundColor: '#00bcd4'
		},
		headerTintColor: '#ffffff'
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
	},

	waifuNotFound: {
		padding: 40,
		textAlign: 'center',
		marginTop: -175
	},
	waifuImgNotFound: {
		width: 'auto',
		height: 500,
		borderColor: 'black',
		borderRadius: 0,
		resizeMode: 'contain',
		overflow: 'hidden',
		margin: 20,
		marginTop: 60
	},
});

export default FavouriteWaifuList;