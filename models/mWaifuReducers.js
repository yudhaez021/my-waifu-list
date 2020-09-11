import { WAIFUS } from '../db/waifuDB';
import { TOGGLE_FAVORITE } from '../models/mWaifuActions';

const initialState = {
    waifuList: WAIFUS,
    filteredWaifus: WAIFUS,
    favoriteWaifus: []
};

const addFavouriteWaifu = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteWaifus.findIndex(
                meal => meal.id === action.id
            );
            if (existingIndex >= 0) {
                // Menghapus Favourite apabila sudah ada
                const deleteExistingFavorite = [...state.favoriteWaifus];
                deleteExistingFavorite.splice(existingIndex, 1);       

                return { ...state, favoriteWaifus: deleteExistingFavorite };
            } else {
                // Menambahkan Favourite
                const itemData = state.waifuList.find(itemData => itemData.id === action.id);

                return { ...state, favoriteWaifus: state.favoriteWaifus.concat(itemData) };
            }
        default:
        return state;
    }
};

export default addFavouriteWaifu;
