import styled from 'styled-components/native';

interface IProps {
    isOnDietType?: boolean;
    isClicked?: boolean;
}

const Container = styled.TouchableOpacity<IProps>`
flex-direction: row;
display: flex;
padding: 16px;
justify-content: center;
align-items: center;
gap: 8px;
flex: 1 0 0;
border-radius: 6px;
background-color: ${({theme, isOnDietType, isClicked }) => isClicked ? isOnDietType ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_6};
border-width: ${({isClicked }) => isClicked ? '1px' : '0px'};
border-color: ${({theme, isOnDietType }) => isOnDietType ? theme.COLORS.GREEN_DARK :  theme.COLORS.RED_DARK };
`;

const Circle = styled.View<IProps>`
 height: 10px;
 width: 10px;
 border-radius: 50px;
 background-color: ${({theme, isOnDietType }) =>isOnDietType ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`

const Title = styled.Text`
 font-size: ${({theme}) => theme.FONT_SIZE.MD};
 color: ${({theme}) => theme.COLORS.GRAY_1};
 font-weight: 700;
 text-align: center;
`

export { Container, Title, Circle }