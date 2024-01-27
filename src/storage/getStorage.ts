import { IMealForm } from "@dtos/index";
import AsyncStorage  from "@react-native-async-storage/async-storage";

export async function getAllStorage(): Promise<IMealForm[]> {
  try {
    const storage = await AsyncStorage.getItem('@storage-daily-diet');
    const meals = storage ? JSON.parse(storage) : [];
  
    return meals;
  } catch(err) {
    throw err;
  }
}

export async function getStorage(id: string): Promise<IMealForm> {
  try {
    const storage = await AsyncStorage.getItem('@storage-daily-diet');
    const meals = storage ? JSON.parse(storage) : [];
  
    return meals[id];
  } catch(err) {
    throw err;
  }
}
