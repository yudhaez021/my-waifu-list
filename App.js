import React, { useState } from 'react';
import { Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import WaifuNav from './nav/WaifuNav'
import WaifuReducer from './models/mWaifuReducers';

const rootReducer = combineReducers({
	waifus: WaifuReducer
}); 
const store = createStore(rootReducer);

const getFonts = () => {
    Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSansRegular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSansBold.ttf'),
    });
};

export default function App() {
    const [fontLoaded, setFontLoaded] = useState(false);
    if (!fontLoaded) {
        return (
            <AppLoading 
                startAsync={getFonts}
                onFinish={ () => setFontLoaded(true) }
            />
        );
    }
    
    return (
		<Provider store={store}>
        	<WaifuNav />
		</Provider>
    );
}