import { Header } from "@screens/New/components/Header";
import { Container, Description, InfoContainer, SubTitle, Title } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { getStorage } from "@storage/getStorage";
import { IMealForm } from "@dtos/index";
import { Loading } from "@components/Loading";
import { View } from "react-native";

interface IParams {
  id: string;
}

export const MealDetail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [meal, setMeal] = useState({} as IMealForm);
  const route = useRoute();
  const { id } = route.params as IParams;

  const navigation = useNavigation();

  const handleBack = () => {
    navigation.navigate("home");
  };

  useEffect(() => {
    const loadMeal = async () => {
      setIsLoading(true);
      try {
        const storagedMeal = await getStorage(id);
        setMeal(storagedMeal);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    loadMeal();
  }, [id]);

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
       <>
        <Header title="Refeição" onClickBack={() => handleBack()} />
        <InfoContainer>
        <View style={{gap: 10}}>
          <Title>{meal?.name}</Title>
          <Description>{meal?.description}</Description>
        </View>
        <View style={{gap: 10}}>
          <SubTitle>Data e hora</SubTitle>
          <Description>{meal?.date} as {meal?.time}</Description>
        </View>
        </InfoContainer>
       </>
      )}
    </Container>
  );
};
