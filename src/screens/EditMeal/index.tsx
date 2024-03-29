import { useNavigation, useRoute } from "@react-navigation/native";
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
import { Button } from "@components/Button";
import { ControlledInput } from "@components/Input";
import { useForm } from "react-hook-form";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { Alert, Platform, ScrollView, TouchableOpacity } from "react-native";
import { useDisclosure } from "@hooks/useDisclosure";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { IMealForm } from "@dtos/index";
import { OnDietButton } from "@screens/New/components/OnDietButton";
import { getStorage } from "@storage/getStorage";
import { Loading } from "@components/Loading";
import { updateStorage } from "@storage/updateStorage";
import { Header } from "@screens/New/components/Header";

interface IParams {
  id: string;
}

const schema = z.object({
  name: z.string({
    required_error: "O nome é obrigatório",
  }),
  description: z.string().optional(),
});

export const EditMeal = () => {
  const {
    isOpen: isDatePickerOpen,
    open: openDatePicker,
    close: closeDatePicker,
  } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [meal, setMeal] = useState({} as IMealForm);
  const route = useRoute();
  const { id } = route.params as IParams;

  const {
    isOpen: isTimePickerOpen,
    open: openTimePicker,
    close: closeTimePicker,
  } = useDisclosure();
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
      date: meal?.date,
      time: meal?.time,
      isOnDiet: meal?.isOnDiet,
      description: meal?.description,
      id: meal?.id,
      name: meal?.name,
    },
    resolver: schema && zodResolver(schema),
  });
  useEffect(() => {
    const loadMeal = async () => {
      setIsLoading(true);
      try {
        const storagedMeal = await getStorage(id);
        setMeal(storagedMeal);
        console.log(storagedMeal);
        setValue("name", storagedMeal.name);
        setValue("description", storagedMeal.description);
        setValue("date", storagedMeal.date);
        setValue("time", storagedMeal.time);
        setValue("isOnDiet", storagedMeal.isOnDiet);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    loadMeal();
  }, [id]);
  watch("date");
  watch("time");
  watch("isOnDiet");
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.navigate("home");
  };

  const onSubmit = async (data: IMealForm) => {
    setIsEditing(true);
    try {
     await updateStorage({
        date: getValues("date"),
        description: getValues("description"),
        isOnDiet: getValues("isOnDiet"),
        name: getValues("name"),
        time: getValues("time"),
        id: meal.id,
      });
      navigation.navigate("home");
    } catch (err) {
      Alert.alert("Erro ao editar refeição", "Tente novamente mais tarde");
    } finally {
      setIsEditing(false);
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
      {isLoading ? (
        <Loading />
      ) : (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Header title="Editar refeição" onClickBack={() => handleBack()} />
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
              isLoading={isEditing}
              disabled={isEditing}
              title="Salvar alterações"
              onPress={handleSubmit(onSubmit)}
            />
          </FormContainer>
        </ScrollView>
      )}
    </Container>
  );
};
