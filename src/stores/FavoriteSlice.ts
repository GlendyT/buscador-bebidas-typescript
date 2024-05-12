import { StateCreator } from "zustand";
import { Recipe } from "../types";

export type FavoriteSliceType = {
    favorites: Recipe[]
}

export const createFavoriteSlice : StateCreator<FavoriteSliceType> = () => ({
    favorites: []
})

//SLICE PATTERN