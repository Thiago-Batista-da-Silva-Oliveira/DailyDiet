import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllStorage } from "./getStorage";

export async function createStorate (newMeal: any) {
    try {
        const meals = await getAllStorage();
        const storage = JSON.stringify([...meals, newMeal]);
        await AsyncStorage.setItem('@storage-daily-diet', storage);
    } catch(err) {
        throw err;
    }
}