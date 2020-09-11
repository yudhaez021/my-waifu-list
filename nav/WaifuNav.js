import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import { Ionicons } from '@expo/vector-icons';

import WaifuList from '../controllers/WaifuList';
import WaifuListImage from '../controllers/WaifuListImage';
import WaifuDetail from '../controllers/WaifuDetail';
import FavouriteWaifuList from '../controllers/FavouriteWaifuList';
const defaultNavSettings = {
	headerStyle: {
		backgroundColor: '#00bcd4'
	},
	headerTintColor: '#ffffff'
};

const WaifuNavigator = createStackNavigator(
	{
		WaifuList: WaifuList, // CategoriesScreen
		WaifuListImage: { // CategoryMealsScreen
			screen: WaifuListImage
		},
		WaifuDetail: WaifuDetail, // MealDetails
		FavouriteWaifuList: FavouriteWaifuList
	},
	{
		defaultNavigationOptions: defaultNavSettings
	}
);
const FavouritesNavigator = createStackNavigator(
	{
		FavouriteWaifuList: FavouriteWaifuList,
		WaifuList: WaifuList, // CategoriesScreen
		WaifuListImage: { // CategoryMealsScreen
			screen: WaifuListImage
		},
		WaifuDetail: WaifuDetail, // MealDetails
	},
	{
		defaultNavigationOptions: defaultNavSettings
	}
);

const mainNavigator = createBottomTabNavigator(
	{
		List: {
			screen: WaifuNavigator,
			navigationOptions: {
				tabBarLabel: 'Waifu',
				tabBarIcon: (tabInfo) => {
					return <Ionicons name='ios-list' size={25} color={tabInfo.tintColor} />;
				}
			},
		},
		Favorites: {
			screen: FavouritesNavigator,
			navigationOptions: {
				tabBarLabel: 'Favourite',
				tabBarIcon: (tabInfo) => {
					return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />;
				}
			},
		},
	},
	{
		tabBarOptions: {
			activeTintColor: '#00bcd4'
		}
	}
)
export default createAppContainer(mainNavigator);