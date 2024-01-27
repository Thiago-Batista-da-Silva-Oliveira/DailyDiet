import { getAllStorage } from "@storage/getStorage";
import { useEffect, useState } from "react";

export const useCheckAvaliation = () => {
    const [avaliation, setAvaliation] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      const handleCheck = async () => {
        setIsLoading(true);
        try {
          const storagedMeals = await getAllStorage();
          const storagedMealsLength = storagedMeals.length;
          const onDiet = storagedMeals.filter((item) => item.isOnDiet).length;
          const mealAvaliation = onDiet / storagedMealsLength;
          setAvaliation(mealAvaliation * 100);
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      };
      handleCheck();
    }, []);

    return { avaliation, isLoading };
}