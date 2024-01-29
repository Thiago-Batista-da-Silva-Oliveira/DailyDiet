import { Header } from "@screens/New/components/Header";
import {
  ButtonContainer,
  Container,
  Description,
  InfoContainer,
  ModalContainer,
  ModalContent,
  OnDietCircle,
  OnDietContainer,
  SubTitle,
  Title,
  TitleAlignedToCenter,
} from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { getStorage } from "@storage/getStorage";
import { IMealForm } from "@dtos/index";
import { Loading } from "@components/Loading";
import { Alert, Modal, View } from "react-native";
import { Button } from "@components/Button";
import { useDisclosure } from "@hooks/useDisclosure";
import { deleteStorage } from "@storage/deleteStorage";

interface IParams {
  id: string;
}

export const MealDetail = () => {
  const {
    isOpen: isDeleteModalOpen,
    open: openDeleteModal,
    close: closeDeleteModal,
  } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [meal, setMeal] = useState({} as IMealForm);
  const route = useRoute();
  const { id } = route.params as IParams;

  const navigation = useNavigation();

  const handleBack = () => {
    navigation.navigate("home");
  };

  useEffect(() => {
    const loadMeal = async () => {
      setIsLoading(true);
      try {
        const storagedMeal = await getStorage(id);
        setMeal(storagedMeal);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    loadMeal();
  }, [id]);

  const handleDelete = () => {
    setIsDeleting(true);
    try {
      deleteStorage(id);
      closeDeleteModal();
      handleBack();
    } catch (err) {
      Alert.alert(
        "Erro ao excluir refeição",
        "Não foi possível excluir a refeição, tente novamente mais tarde."
      );
    }finally {
      setIsDeleting(false);
    }
  };

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header title="Refeição" onClickBack={() => handleBack()} />
          <InfoContainer>
            <View style={{ flex: 1 }}>
              <View style={{ gap: 10 }}>
                <Title>{meal?.name}</Title>
                <Description>{meal?.description}</Description>
              </View>
              <View style={{ gap: 10 }}>
                <SubTitle>Data e hora</SubTitle>
                <Description>
                  {meal?.date} as {meal?.time}
                </Description>
              </View>
              <OnDietContainer>
                <OnDietCircle onDiet={meal?.isOnDiet} />
                <SubTitle>
                  {meal?.isOnDiet ? "dentro da dieta" : "fora da dieta"}
                </SubTitle>
              </OnDietContainer>
            </View>
            <ButtonContainer>
              <Button
                title="Editar Refeição"
                onPress={() => navigation.navigate("editMeal", { id })}
              />
              <Button
                defaultBgColor={false}
                title="Excluir refeição"
                onPress={() => openDeleteModal()}
              />
            </ButtonContainer>
          </InfoContainer>
          {isDeleteModalOpen && (
            <Modal
              animationType="slide"
              transparent={true}
              visible={isDeleteModalOpen}
              onRequestClose={closeDeleteModal}
            >
              <ModalContainer>
                <ModalContent>
                  <TitleAlignedToCenter>
                    Deseja realmente excluir o registro desta refeição?
                  </TitleAlignedToCenter>
                  <View
                    style={{ display: "flex", flexDirection: "row", gap: 10 }}
                  >
                    <Button
                      defaultBgColor={false}
                      width="150px"
                      title="Cancelar"
                      disabled={isDeleting}
                      onPress={closeDeleteModal}
                    />
                    <Button
                      width="150px"
                      disabled={isDeleting}
                      title="Sim, excluir"
                      onPress={() => handleDelete()}
                    />
                  </View>
                </ModalContent>
              </ModalContainer>
            </Modal>
          )}
        </>
      )}
    </Container>
  );
};
