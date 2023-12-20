import { Container, StatisticsContainer, Title } from "./styles"
import { Avaliation } from "@screens/Home/components/Avaliation"
import { useNavigation } from "@react-navigation/native";

export const Detail = ()=> {
    const navigation = useNavigation();

    const onNavigateBack = () => {
        navigation.navigate("home");
    }
    return (
        <Container>
            <Avaliation isDetail avaliation={90} onPressNavigate={() => onNavigateBack()} />
            <StatisticsContainer>
               <Title>
                  Estatísticas gerais
               </Title>
            </StatisticsContainer>
        </Container>
    )
}