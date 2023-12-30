import { MealDTO } from "src/dtos/MealDto"
import { mealCreate } from "./mealCreate"
import { mealRemove } from "./mealRemove"

export async function mealUpdate(id: string, meal: MealDTO) {
    try {
        await mealRemove(id)

        await mealCreate(meal)
    } catch (error) {
        throw error
    }
}