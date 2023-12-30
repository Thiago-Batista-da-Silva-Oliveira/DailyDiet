import { useNavigation } from "@react-navigation/native";
import { Container, FormContainer } from "./styles";
import { Header } from "./components/Header";
import { Text } from "react-native";

export const New = () => {
    const navigation = useNavigation();

    const handleBack = () => {
        navigation.navigate("home");
    }
    return (
       <Container>
         <Header title="Refeição" onClickBack={() => handleBack()} />
         <FormContainer>
           <Text>Inputs</Text>
         </FormContainer>
       </Container>
    )
}