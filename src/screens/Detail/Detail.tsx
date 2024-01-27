import { Container, StatisticsContainer, Title } from "./styles";
import { Avaliation } from "@screens/Home/components/Avaliation";
import { useNavigation } from "@react-navigation/native";
import { Statistic } from "./components/Statistic";
import { View } from "react-native";
import { useTheme } from "styled-components";
import { useCheckAvaliation } from "@hooks/useCheckAvaliation";

export const Detail = () => {
  const { avaliation, isLoading } = useCheckAvaliation();
  const { COLORS } = useTheme();
  const navigation = useNavigation();

  const onNavigateBack = () => {
    navigation.navigate("home");
  };
  return (
    <Container>
      <Avaliation
        isLoading={isLoading}
        isDetail
        avaliation={avaliation}
        onPressNavigate={() => onNavigateBack()}
      />
      <StatisticsContainer>
        <Title>Estatísticas gerais</Title>
        <Statistic
          title="4"
          subTitle="Melhor sequência de pratos dentro da dieta"
          background={COLORS.GRAY_6}
        />
        <Statistic
          title="14"
          subTitle="Refeições registradas"
          background={COLORS.GRAY_6}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            gap: 10,
          }}
        >
          <View style={{ display: "flex", flex: 1 }}>
            <Statistic
              title="10"
              subTitle="Refeições dentro da dieta"
              background={COLORS.GREEN_LIGHT}
            />
          </View>
          <View style={{ display: "flex", flex: 1 }}>
            <Statistic
              title="4"
              subTitle="Refeições fora da dieta"
              background={COLORS.RED_LIGHT}
            />
          </View>
        </View>
      </StatisticsContainer>
    </Container>
  );
};
