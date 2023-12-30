import { useNavigation } from "@react-navigation/native";
import { Container, FormContainer, InputsContainer } from "./styles";
import { Header } from "./components/Header";
import { Text } from "react-native";
import { Button } from "@components/Button";

export const New = () => {
    const navigation = useNavigation();

    const handleBack = () => {
        navigation.navigate("home");
    }
    return (
       <Container>
         <Header title="Refeição" onClickBack={() => handleBack()} />
         <FormContainer>
          <InputsContainer>
           <Text>Inputs</Text>
          </InputsContainer>
          <Button title="Cadastrar refeição" onPress={() => console.log('clicou')} />
         </FormContainer>
       </Container>
    )
}