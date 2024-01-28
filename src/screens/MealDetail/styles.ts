import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

interface IProps {
  isEditing?: boolean;
}

const Container = styled.KeyboardAvoidingView<IProps>`
  display: flex;
  flex: 1;
  gap: 10px;
`;

const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-weight: 700;
`;

const SubTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  font-weight: 700;
`;

const Description = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  font-weight: 400;
`

const NavigationButton = styled(TouchableOpacity)<IProps>`
  position: absolute;
  top: 10px;
  right: 15px;
`;

const InfoContainer = styled.View`
  display: flex;
  width: 100%;
  padding: 40px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  border-radius: 20px;
  margin-top: -20px;
  flex: 1;
  gap: 10px;
`;

const InputsContainer = styled.View`
  flex: 1;
  margin-bottom: 10px;
  gap: 15px;
`;

const DateInputsContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  gap: 10px;
  max-height: 100px;
`;

const OnDietContainer = styled.View`
  display: flex;
  flex-direction: row;
  gap: 10px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
  align-items: center;
  padding: 10px;
  width: 150px;
  border-radius: 7px;
  margin-top: 10px;
`;

const OnDietCircle = styled.View<{ onDiet: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 7px;
  background-color: ${({ theme, onDiet }) =>
    onDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  `;

const ButtonContainer = styled.View`
  display: flex;
  gap: 10px;
  padding: 10px;
`;

export {
  Container,
  Title,
  NavigationButton,
  InfoContainer,
  InputsContainer,
  DateInputsContainer,
  OnDietContainer,
  SubTitle,
  Description,
  OnDietCircle,
  ButtonContainer,
};
