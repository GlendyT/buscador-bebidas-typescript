import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { RecipesSliceType, createRecipesSlice } from "./recipeSlice";
import { FavoriteSliceType, createFavoriteSlice } from "./FavoriteSlice";

export const useAppStore = create<RecipesSliceType & FavoriteSliceType>()(devtools((...a) => ({
  ...createRecipesSlice(...a),
  ...createFavoriteSlice(...a),
})));


