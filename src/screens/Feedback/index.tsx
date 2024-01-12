import { useNavigation, useRoute } from "@react-navigation/native"
import { Container, Title } from "./styles"
import { Text } from "react-native";
import { Button } from "@components/Button";

type RouteParams = {
    onDiet: boolean;
}

export const Feedback = () => {
   const route = useRoute();
   const {onDiet} = route.params as RouteParams;

   const navigation = useNavigation();


   const navigateBack = () => {
    navigation.navigate("home");
   }

   const title = onDiet ? "Continue assim!" : "Que pena!"

   const SubTitle = (onDiet = false) => {
   if (onDiet) {
    return (
        <Text>Você continua <Text>dentro da dieta.</Text> Muito bem!</Text>
    )
   }
   return (
    <Text>Você <Text>saiu da dieta</Text> dessa vez, mas continue se esforçando e não desista!</Text>
   )
   }

    return (
        <Container>
           <Title onDiet={onDiet}>
              {title}
           </Title>
           {SubTitle(onDiet)}
         <Button onPress={() => navigateBack()} title="Ir para a página inicial"/>
        </Container>
    )
}