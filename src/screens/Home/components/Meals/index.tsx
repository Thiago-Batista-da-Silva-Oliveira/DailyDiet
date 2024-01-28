import { Button } from "@components/Button";
import {
  ComponentTitle,
  Container,
  Divisor,
  Meal,
  MealContainer,
  OnDietCircle,
  RegisteredMealsContainer,
  SubTitle,
  Title,
} from "./styles";
import { Plus } from "phosphor-react-native";
import { ActivityIndicator, FlatList } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getAllStorage } from "@storage/getStorage";
import { groupByDate } from "@utils/groupMealsByDate";
import { useCallback, useState } from "react";
import { IGroupedMeals } from "@dtos/index";

export const Meals = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [meals, setMeals] = useState<IGroupedMeals[]>([]);

  useFocusEffect(useCallback(() => {
    const loadMeels = async () => {
      setIsLoading(true);
      try {
        const storagedMeals = await getAllStorage();
        const groupedMealsByDate = groupByDate(storagedMeals);
        setMeals(groupedMealsByDate);
      } catch (error) {
         console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadMeels();
  }, []))
  const navigation = useNavigation();
  
  const onClickMeal = (id: string) => {
    navigation.navigate("mealDetail", {id});
  };


  const handleNew = () => {
    navigation.navigate("new");
  };

  return (
    <Container>
      <ComponentTitle>Refeições</ComponentTitle>
      <Button
        Icon={<Plus color="#FFFFFF" size={24} />}
        onPress={() => handleNew()}
        title="Nova Refeição"
      />
    {
      isLoading ? (
        <ActivityIndicator size="large" color="#007AFF" />
      ) : (
        <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RegisteredMealsContainer>
            <Title>{item.date}</Title>
            {item.data.map((meal) => (
              <MealContainer onPress={() => onClickMeal(meal.id)} key={meal.id}>
                <SubTitle>{meal.time}</SubTitle>
                <Divisor />
                <Meal>
                  <ComponentTitle>{meal.name}</ComponentTitle>
                  <OnDietCircle onDiet={meal.isOnDiet} />
                </Meal>
              </MealContainer>
            ))}
          </RegisteredMealsContainer>
        )}
        showsVerticalScrollIndicator={false}
      />
      )
    }
    </Container>
  );
};
