import { StatusBar } from 'expo-status-bar';
import React, { useState, useCallback, useEffect } from 'react';
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
	Alert,
	AsyncStorage
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import { WAIFUS, WAIFU_IMAGES } from '../db/waifuDB';
import { HeaderButton } from '../components/HeaderButton';
import { toggleFavorite } from '../models/mWaifuActions';

const WaifuListImage = props => {
	const _id = props.navigation.getParam('id');
	// const _waifuName = props.navigation.getParam('waifuName');
	// const _age = props.navigation.getParam('age');
	// const _avatar = props.navigation.getParam('avatar');
	
	// Ketika diklik add to favourite maka akan menjalankan proses ini
	const dispatch = useDispatch();
	const toggleFavoriteHandler = useCallback(() => {
		dispatch(toggleFavorite(_id));

		Alert.alert(
			"Notification",
			"Your favourited waifu has been updated!",
			[
				// {
					// 	text: "Cancel",
					// 	onPress: () => console.log("Cancel Pressed"),
					// 	style: "cancel"
				// },
				{ 
					text: "OK", 
					onPress: () => console.log('OK') 
				}
			],
			{ cancelable: false }
		);
	}, [dispatch, _id]);

	// Validasi awal ketika sudah difavoritkan atau belum
	const selectedFavourite = useSelector(state =>
		state.waifus.favoriteWaifus.some(item => item.id === _id)
	);
	
	// Untuk callback
	useEffect(() => {
		props.navigation.setParams({ waifuFav: toggleFavoriteHandler});
	}, [toggleFavoriteHandler]);
	useEffect(() => {
		props.navigation.setParams({ selectedFavourite: selectedFavourite});
	}, [selectedFavourite]);

	// Mapping data
	const selectedWaifu = WAIFUS.find(item => item.id === _id);
	const imagesWaifuList = WAIFU_IMAGES.filter(item => item.id === _id);
	const renderGridItem = (data) => {
		return (
			<View style={styles.card}>
				<TouchableOpacity 
					activeOpacity={0.7}
				>
					<ImageBackground
						source={{ uri: data.item.image }}
						style={styles.cardBgImage}
					/>
				</TouchableOpacity>
			</View>
		);
	}
	  
	return (
		<ScrollView>
			<View style={styles.cardWaifuInformation}>
				<View style={styles.cardHead}>
					<View style={styles.cardHeadContent}>
						<Text>Name: {selectedWaifu.waifuName}</Text>
						<Text>Age: {selectedWaifu.age}</Text>
						<Text>Anime From: {selectedWaifu.fromAnime}</Text>
						<Text>Rating: 5 / 5</Text>
					</View>
				</View>
				<View style={styles.cardHead}>
					<Image
						source={{ uri: selectedWaifu.avatar }}
						style={styles.cardHeadImg}
					/>
				</View>
			</View>

			<View>
				{/* <Text style={styles.photoText}>{selectedWaifu.waifuName}'s Photo</Text> */}
				<Text style={styles.photoText}>My Waifu Photo</Text>
			</View>
			<FlatList
				keyExtractor={ (data, index) => data.id}
				data={imagesWaifuList}
				renderItem={renderGridItem}
				numColumns={2}
			/>
		</ScrollView>
  	);
}

WaifuListImage.navigationOptions = navigationData => {
	const waifuId = navigationData.navigation.getParam('id');
	const waifuName = navigationData.navigation.getParam('waifuName');
	const waifuFavHandler = navigationData.navigation.getParam('waifuFav');
	const selectedFavourite = navigationData.navigation.getParam('selectedFavourite');
	
	return {
		headerTitle: waifuName,
		// headerRight: () => {
		// 	<HeaderButtons HeaderButtonComponent={HeaderButton} style={{ color: '#ffffff' }}>
		// 	  	<Item
		// 			title="Add to Favorite"
		// 			iconName="ios-star"
		// 			onPress={waifuHasBeenFavouriteAlert}
		// 			style={{ color: '#ffffff' }}
		// 	  	/>
		// 	</HeaderButtons>
		// },
		
		headerRight: () => (
			<TouchableOpacity 
				activeOpacity={0.7}
				onPress={waifuFavHandler}
			>
				<Text style={{ color: '#ffffff', marginRight: 15 }}>{selectedFavourite ? 'Remove from Favourite' : 'Add to Favourite'}</Text>
			</TouchableOpacity>
		)
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
		elevation: 5,
	},
	cardHead: {
		flex: 1,
		// height: 250,
		// paddingBottom: 50
	},
	cardHeadContent: {
		width: 241
	},
	cardHeadImg: {
		width: 'auto',
		height: 100,
		marginLeft: 250,
		marginTop: -90,
		borderColor: 'black',
		borderRadius: 100,
		resizeMode: 'contain',
		overflow: 'hidden'
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
	cardWaifuInformation: {
		padding: 20,
		backgroundColor: '#ffffff',
		marginBottom: 10
	},

	photoText: {
		fontSize: 20,
		padding: 15,
		paddingTop: 5
	}
});

export default WaifuListImage;