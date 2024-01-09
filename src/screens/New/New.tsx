import { useNavigation } from "@react-navigation/native";
import { Container, FormContainer, InputsContainer } from "./styles";
import { Header } from "./components/Header";
import { Button } from "@components/Button";
import { ControlledInput } from "@components/Input";
import { useForm } from "react-hook-form";

interface IMealForm {
  name: string;
  description?: string;
  date: Date;
  time: Date;
  isOnDiet: boolean;
}

export const New = () => {

    const { control, handleSubmit } = useForm<IMealForm>();
    const navigation = useNavigation();

    const handleBack = () => {
        navigation.navigate("home");
    }

    const onSubmit = (data: IMealForm ) => {
      console.log(data)
    }

    return (
       <Container>
         <Header title="Refeição" onClickBack={() => handleBack()} />
         <FormContainer>
          <InputsContainer>
           <ControlledInput control={control} name="name" title="Nome" placeholder="Sanduíche"  />
           <ControlledInput control={control} name="description" title="Descrição" height="142px" placeholder=""  />
          </InputsContainer>
          <Button title="Cadastrar refeição" onPress={handleSubmit(onSubmit)} />
         </FormContainer>
       </Container>
    )
}