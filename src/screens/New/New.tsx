import { useNavigation } from "@react-navigation/native";
import {
  Container,
  DateInputsContainer,
  FormContainer,
  InputsContainer,
  OnDietContainer,
  SubTitle,
} from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Header } from "./components/Header";
import { Button } from "@components/Button";
import { ControlledInput } from "@components/Input";
import { useForm } from "react-hook-form";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { Alert, Platform, ScrollView, TouchableOpacity } from "react-native";
import { useDisclosure } from "@hooks/useDisclosure";
import { useState } from "react";
import { format } from "date-fns";
import { OnDietButton } from "./components/OnDietButton";
import { createStorate } from "@storage/createStorage";
import { IMealForm } from "@dtos/index";

const schema = z.object({
  name: z.string({
    required_error: "O nome é obrigatório",
  }),
  description: z.string().optional(),
});

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
  const [isSaving, setIsSaving] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    getValues,
    formState: { errors },
  } = useForm<IMealForm>({
    defaultValues: {
      date: format(selectedTime, "dd/MM/yyyy"),
      time: format(selectedTime, "hh:mm"),
      isOnDiet: true,
    },
    resolver: schema && zodResolver(schema),
  });
  watch("date");
  watch("time");
  watch("isOnDiet");
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.navigate("home");
  };

  const onSubmit = async (data: IMealForm) => {
    setIsSaving(true);
    try {
      const id = Math.random().toString(36).substring(7);
      await createStorate({
        name: getValues("name"),
        date: getValues("date"),
        isOnDiet: getValues("isOnDiet"),
        time: getValues("time"),
        description: getValues("description"),
        id,
      });
      navigation.navigate("feedback", {
        onDiet: getValues("isOnDiet"),
      });
    } catch (err) {
      Alert.alert("Erro ao cadastrar refeição", "Tente novamente mais tarde");
    } finally {
      setIsSaving(false);
    }
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
              errorMessage={errors.name?.message}
              control={control}
              name="name"
              title="Nome"
              placeholder="Sanduíche"
            />
            <ControlledInput
              errorMessage={errors.description?.message}
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
          <Button
            disabled={isSaving}
            title="Cadastrar refeição"
            onPress={handleSubmit(onSubmit)}
          />
        </FormContainer>
      </ScrollView>
    </Container>
  );
};
