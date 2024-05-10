import { StateCreator } from "zustand";
import { getCategories, getRecipes } from "../services/RecipeService";
import { Categories, SearchFilter } from "../types";

export type RecipesSliceType = {
  categories: Categories;
  fetchCategories: () => Promise<void>;
  searchRecipes: (SearchFilters: SearchFilter) => Promise<void>;
};

export const createRecipesSlice: StateCreator<RecipesSliceType> = (set) => ({
  categories: {
    drinks: [],
  },
  fetchCategories: async () => {
    const categories = await getCategories();
    set({
      categories,
    });
  },
  searchRecipes: async (filters) => {
    await getRecipes(filters)
  },
});