import { useNavigation } from "@react-navigation/native";
import { Container, DateInputsContainer, FormContainer, InputsContainer } from "./styles";
import { Header } from "./components/Header";
import { Button } from "@components/Button";
import { ControlledInput } from "@components/Input";
import { useForm } from "react-hook-form";
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { Pressable } from "react-native";
import { useDisclosure } from "@hooks/useDisclosure";

interface IMealForm {
  name: string;
  description?: string;
  date: Date;
  time: Date;
  isOnDiet: boolean;
}

export const New = () => {

    const {isOpen: isDatePickerOpen, toggle: toggleDatePicker} = useDisclosure();
    const {isOpen: isTimePickerOpen, toggle: toggleTimePicker} = useDisclosure();
    const { control, handleSubmit, setValue, watch, getValues } = useForm<IMealForm>({
      defaultValues: {
        date: new Date(),
        time: new Date(),
      }
    });
    watch('date')
    watch('time')
    const navigation = useNavigation();

    const handleBack = () => {
        navigation.navigate("home");
    }

    const onSubmit = (data: IMealForm ) => {
      console.log(data)
    }

    const setTime = (date: DateTimePickerEvent) => {
      console.log(date)
       // setValue('date', date)
    }

    console.log(isDatePickerOpen)

    return (
       <Container>
         <Header title="Refeição" onClickBack={() => handleBack()} />
         <FormContainer>
          <InputsContainer>
           <ControlledInput control={control} name="name" title="Nome" placeholder="Sanduíche"  />
           <ControlledInput control={control} name="description" title="Descrição" height="142px" placeholder=""  />
           <DateInputsContainer>
           <Pressable style={{flex: 1,  zIndex: 999}} onPress={() => toggleDatePicker()}>
             <ControlledInput editable={false} control={control} name="date" title="Data" placeholder="01/01/2024"  />
           </Pressable>
          <Pressable style={{flex: 1,  zIndex: 999}} onPress={() => toggleTimePicker()}>
           <ControlledInput editable={false} control={control} name="time" title="Hora" placeholder="10:00"  />
          </Pressable>
            {
              isDatePickerOpen && (
                <DateTimePicker value={getValues("date")} onChange={(date) => setTime(date)} mode="date" />
              )
            }
            {
              isTimePickerOpen && (
                <DateTimePicker value={getValues("time")} onChange={(date) => setTime(date)} mode="time" />
              )
            }
           </DateInputsContainer>
          </InputsContainer>
          <Button title="Cadastrar refeição" onPress={handleSubmit(onSubmit)} />
         </FormContainer>
       </Container>
    )
}