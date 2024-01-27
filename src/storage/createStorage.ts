import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllStorage } from "./getStorage";
import { IMealForm } from "@dtos/index";

export async function createStorate (newMeal: IMealForm) {
    try {
        const meals = await getAllStorage();
        const storage = JSON.stringify([...meals, newMeal]);
        await AsyncStorage.setItem('@storage-daily-diet', storage);
    } catch(err) {
        throw err;
    }
}