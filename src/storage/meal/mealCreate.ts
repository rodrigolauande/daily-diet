import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealsGetAll } from "./mealsGetAll";
import { MealDTO } from "src/dtos/MealDto";

export async function mealCreate(newMeal: MealDTO) {
    try {

        const storedMeals = await mealsGetAll();

        // const mealAlreadyExists = storedMeals.includes(newMeal);

        // if (mealAlreadyExists) {
        //     console.log('Já existe uma refeição cadastrada com esse nome.')
        // }

        const storage = JSON.stringify([...storedMeals, newMeal]);
        await AsyncStorage.setItem(MEAL_COLLECTION, storage);

    } catch (error) {
        throw error;
    }
}