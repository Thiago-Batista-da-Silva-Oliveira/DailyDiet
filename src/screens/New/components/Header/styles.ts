import styled from 'styled-components/native';

interface IProps {
   isEditing?: boolean
   isOnDiet?: boolean;
}

const Container = styled.View<IProps>`
display: flex;
padding: 40px;
flex-direction: row;
align-items: center;
gap: 2px;
background: ${({theme, isEditing = false, isOnDiet = true}) => isEditing ? isOnDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_5};
`;

const Title = styled.Text`
 font-size: ${({theme}) => theme.FONT_SIZE.XL};
 color: ${({theme}) => theme.COLORS.GRAY_1};
 font-weight: 700;
 text-align: center;
 flex: 1;
`

export { Container, Title }