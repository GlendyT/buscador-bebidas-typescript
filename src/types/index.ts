import { z } from "zod";
import { CategoriesApiResponseSchema, DrinksAPIResponse, DrinkAPIResponse, SearchFilterSchema,RecipeAPIResponseSchema } from "../utils/recipes-schema";

export type Categories = z.infer<typeof CategoriesApiResponseSchema>;
export type SearchFilter = z.infer<typeof SearchFilterSchema>
export type Drinks = z.infer<typeof DrinksAPIResponse>
export type Drink = z.infer<typeof DrinkAPIResponse>
export type Recipe = z.infer<typeof RecipeAPIResponseSchema> 
