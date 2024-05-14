import { StateCreator } from "zustand";
import { Recipe } from "../types";
import { RecipesSliceType, createRecipesSlice } from "./recipeSlice";

export type FavoriteSliceType = {
    favorites: Recipe[]
    handleClickFavorite: (recipe: Recipe) => void
    favoriteExist: (id: Recipe["idDrink"]) => boolean
}


//FavoriteSliceType & RecipesSliceType, [], [], FavoriteSliceType  A ESTO SE LE CONOZE COMO NESTED SLICES
export const createFavoriteSlice : StateCreator<FavoriteSliceType & RecipesSliceType, [], [], FavoriteSliceType> = (set, get, api) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
        if(get().favoriteExist(recipe.idDrink)) {
            set((state) => ({
                favorites: state.favorites.filter( favorite => favorite.idDrink !== recipe.idDrink)
            }))
        } else {
            set((state) => ({
                favorites: [...state.favorites, recipe]
            }))
        }
        createRecipesSlice(set, get, api).closeModal()
    },
    favoriteExist: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id)
    }
})

//SLICE PATTERN