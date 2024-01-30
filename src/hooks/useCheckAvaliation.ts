import { useFocusEffect } from "@react-navigation/native";
import { getAllStorage } from "@storage/getStorage";
import { useCallback, useState } from "react";

export const useCheckAvaliation = () => {
    const [avaliation, setAvaliation] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
  
    useFocusEffect((useCallback(() => {
      const handleCheck = async () => {
        setIsLoading(true);
        try {
          const storagedMeals = await getAllStorage();
          const storagedMealsLength = storagedMeals.length;
          const onDiet = storagedMeals.filter((item) => item.isOnDiet).length;
          const mealAvaliation = parseFloat((onDiet / storagedMealsLength).toFixed(2));
          setAvaliation(mealAvaliation * 100);
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      };
      handleCheck();
    }, [])))

    return { avaliation, isLoading };
}