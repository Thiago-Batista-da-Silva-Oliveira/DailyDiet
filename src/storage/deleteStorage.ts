import AsyncStorage from "@react-native-async-storage/async-storage";

export async function deleteStorage(id: string) {
    try {
        const storage = await AsyncStorage.getItem('@storage-daily-diet');
        const meals = storage ? JSON.parse(storage) : [];
        const newMeals = meals.filter((meal: any) => meal.id !== id);
        const newStorage = JSON.stringify(newMeals);
        await AsyncStorage.setItem('@storage-daily-diet', newStorage);
    } catch(err) {
        throw err;
    }
}