import { Header } from "@components/Header";
import { useNavigation } from "@react-navigation/native";
import { Container } from "./styles";
import { Avaliation } from "./components/Avaliation";
import { Meals } from "./components/Meals";
import { getAllStorage } from "@storage/getStorage";
import { useEffect, useState } from "react";
import { useCheckAvaliation } from "@hooks/useCheckAvaliation";

export const Home = () => {
  const navigation = useNavigation();

  const handleDetail = () => {
    navigation.navigate("detail");
  };

  const {avaliation, isLoading} = useCheckAvaliation()

  return (
    <Container>
      <Header />
      <Avaliation
        isLoading={isLoading}
        avaliation={avaliation}
        onPressNavigate={() => handleDetail()}
      />
      <Meals />
    </Container>
  );
};
