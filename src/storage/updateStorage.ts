import { IMealForm } from "@dtos/index";
import { getAllStorage } from "./getStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { deleteStorage } from "./deleteStorage";


export async function updateStorage (meal: IMealForm) {
    try {
        await deleteStorage(meal.id);
        const meals = await getAllStorage();
        const storage = JSON.stringify([...meals, meal]);
        await AsyncStorage.setItem('@storage-daily-diet', storage);
    } catch(err) {
        throw err;
    }
}