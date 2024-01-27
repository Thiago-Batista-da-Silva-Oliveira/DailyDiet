import { useNavigation } from "@react-navigation/native";
import {
  Container,
  DateInputsContainer,
  FormContainer,
  InputsContainer,
  OnDietContainer,
  SubTitle,
} from "./styles";
import { Header } from "./components/Header";
import { Button } from "@components/Button";
import { ControlledInput } from "@components/Input";
import { useForm } from "react-hook-form";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { Platform, ScrollView, TouchableOpacity } from "react-native";
import { useDisclosure } from "@hooks/useDisclosure";
import { useState } from "react";
import { format } from "date-fns";
import { OnDietButton } from "./components/OnDietButton";
import { createStorate } from "@storage/createStorage";
import { IMealForm } from "@dtos/index";

export const New = () => {
  const {
    isOpen: isDatePickerOpen,
    open: openDatePicker,
    close: closeDatePicker,
  } = useDisclosure();
  const {
    isOpen: isTimePickerOpen,
    open: openTimePicker,
    close: closeTimePicker,
  } = useDisclosure();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const { control, handleSubmit, setValue, watch, getValues } =
    useForm<IMealForm>({
      defaultValues: {
        date: format(selectedTime, "dd/MM/yyyy"),
        time: format(selectedTime, "hh:mm"),
        isOnDiet: true,
      },
    });
  watch("date");
  watch("time");
  watch("isOnDiet");
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.navigate("home");
  };

  const onSubmit = (data: IMealForm) => {
    const id = Math.random().toString(36).substring(7);
    createStorate({
      ...data,
      id,
    });
    navigation.navigate("feedback", {
      onDiet: data.isOnDiet,
    });
  };

  const closePicker = () => {
    closeDatePicker();
    closeTimePicker();
  };

  const setDate = (event: DateTimePickerEvent, selectedDate: any) => {
    if (event.type === "dismissed") {
      closePicker();
      return;
    }
    closePicker();
    setSelectedDate(selectedDate);
    setValue("date", format(selectedDate, "dd/MM/yyyy"));
  };

  const setTime = (event: DateTimePickerEvent, selectedDate: any) => {
    if (event.type === "dismissed") {
      closePicker();
      return;
    }
    closePicker();
    setSelectedTime(selectedDate);
    setValue("time", format(selectedDate, "hh:mm"));
  };

  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Header title="Refeição" onClickBack={() => handleBack()} />
        <FormContainer style={{ flexGrow: 1 }}>
          <InputsContainer>
            <ControlledInput
              control={control}
              name="name"
              title="Nome"
              placeholder="Sanduíche"
            />
            <ControlledInput
              control={control}
              name="description"
              title="Descrição"
              height="142px"
              placeholder=""
            />
            <DateInputsContainer>
              <TouchableOpacity
                style={{ flex: 1, zIndex: 999 }}
                onPress={() => {
                  closeTimePicker();
                  openDatePicker();
                }}
              >
                <ControlledInput
                  editable={false}
                  control={control}
                  name="date"
                  title="Data"
                  placeholder="01/01/2024"
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ flex: 1, zIndex: 999 }}
                onPress={() => {
                  closeDatePicker();
                  openTimePicker();
                }}
              >
                <ControlledInput
                  editable={false}
                  control={control}
                  name="time"
                  title="Hora"
                  placeholder="10:00"
                />
              </TouchableOpacity>
              {isDatePickerOpen && (
                <DateTimePicker
                  value={selectedDate}
                  onChange={setDate}
                  mode="date"
                />
              )}
              {isTimePickerOpen && (
                <DateTimePicker
                  value={selectedTime}
                  onChange={setTime}
                  mode="time"
                />
              )}
            </DateInputsContainer>
            <SubTitle>Está dentro da dieta?</SubTitle>
            <OnDietContainer>
              <OnDietButton
                isClicked={getValues("isOnDiet")}
                isOnDietType
                onPress={() => {
                  setValue("isOnDiet", true);
                }}
              />
              <OnDietButton
                isClicked={getValues("isOnDiet") === false}
                isOnDietType={false}
                onPress={() => {
                  setValue("isOnDiet", false);
                }}
              />
            </OnDietContainer>
          </InputsContainer>
          <Button title="Cadastrar refeição" onPress={handleSubmit(onSubmit)} />
        </FormContainer>
      </ScrollView>
    </Container>
  );
};
