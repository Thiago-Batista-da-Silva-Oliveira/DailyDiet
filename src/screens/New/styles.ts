import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

interface IProps {
   isEditing?: boolean
}

const Container = styled.View<IProps>`
display: flex;
`;

const Title = styled.Text`
 font-size: ${({theme}) => theme.FONT_SIZE.XL};
 color: ${({theme}) => theme.COLORS.GRAY_1};
 font-weight: 700;
`

const NavigationButton = styled(TouchableOpacity)<IProps>`
 position: absolute;
 top: 10px;
 right: 15px;
`

const FormContainer = styled.View`
  display: flex;
  width: 100%;
  padding: 40px 24px;
  justify-content: center;
  align-items: flex-start;
  gap: 148px;
  height: 100%;
  background-color: ${({theme})=> theme.COLORS.GRAY_7};
  border-radius: 20px;
  margin-top: -20px;
`

export { Container, Title, NavigationButton, FormContainer }