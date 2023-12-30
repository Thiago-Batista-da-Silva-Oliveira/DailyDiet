import { Button } from "@components/Button"
import { ComponentTitle, Container, Divisor, Meal, MealContainer, OnDietCircle, RegisteredMealsContainer, SubTitle, Title } from "./styles"
import { Plus } from "phosphor-react-native"
import { FlatList } from "react-native"
import { useNavigation } from "@react-navigation/native"

export const Meals = () => {
    const navigation = useNavigation();

    const handleNew = () => {
        navigation.navigate("new");
    }

    const dummyData = [
        {
            id: '1',
            date: '12.08.23',
            data: [
                {
                    id: '1',
                    title: 'X-tudo',
                    isOnDiet: false,
                    time: '20:00'
                },
                {
                    id: '2',
                    title: 'Whey protein com leite',
                    isOnDiet: true,
                    time: '16:00'
                },
                {
                    id: '3',
                    title: 'Salada',
                    isOnDiet: true,
                    time: '13:00'
                },
            ]
        },
        {
            id: '2',
            date: '11.08.23',
            data: [
                {
                    id: '1',
                    title: 'Pizza',
                    isOnDiet: false,
                    time: '20:00'
                },
                {
                    id: '2',
                    title: 'Whey protein com leite',
                    isOnDiet: true,
                    time: '16:00'
                },
                {
                    id: '3',
                    title: 'Salada',
                    isOnDiet: true,
                    time: '13:00'
                },
            ]
        }
    ]
    return (
        <Container>
            <ComponentTitle>Refeições</ComponentTitle>
            <Button 
              Icon={<Plus color="#FFFFFF" size={24} />}
              onPress={() => handleNew()} title="Nova Refeição" />
              <FlatList
        data={dummyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
         <RegisteredMealsContainer>
            <Title>
                {item.date}
            </Title>
            {
                    item.data.map((meal) => (
                        <MealContainer key={meal.id}>
                           <SubTitle>{meal.time}</SubTitle>
                           <Divisor />
                           <Meal>
                            <ComponentTitle>{meal.title}</ComponentTitle>
                            <OnDietCircle onDiet={meal.isOnDiet} />
                           </Meal>
                        </MealContainer>
                    ))
                }
         </RegisteredMealsContainer>
        )}
        showsVerticalScrollIndicator={false}
      />
        </Container>
    )
}