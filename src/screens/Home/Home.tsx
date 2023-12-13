import { Header } from "@components/Header";
import { useNavigation } from "@react-navigation/native"
import { Container } from "./styles";
import { Avaliation } from "./components/Avaliation";

export const Home = ()=> {
    const navigation = useNavigation();

    const handleNew = () => {
        navigation.navigate("new");
    }

    const handleDetail = () => {
        navigation.navigate("detail");
    }

    return (
        <Container>
           <Header />
           <Avaliation avaliation={90} onPressNavigate={() => handleDetail() } />
        </Container>
    )
}