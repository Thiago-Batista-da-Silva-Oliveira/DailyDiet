import { Header } from "@components/Header";
import { useNavigation } from "@react-navigation/native"
import { Container } from "./styles";

export const Home = ()=> {
    const navigation = useNavigation();

    const handleNew = () => {
        navigation.navigate("new");
    }
    return (
        <Container>
           <Header />
        </Container>
    )
}