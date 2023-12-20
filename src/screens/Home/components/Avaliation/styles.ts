import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

interface IProps {
    isPositive?: boolean;
    isDetail?: boolean;
}

const Container = styled.View<IProps>`
display: flex;
padding: 20px 16px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 2px;
border-radius: ${({isDetail}) => isDetail ? '0px' : '8px'};
height: ${({isDetail}) => isDetail && '200px'} ;
background: ${({theme, isPositive = true}) => isPositive ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

const Title = styled.Text`
 font-size: ${({theme}) => theme.FONT_SIZE.XXXL};
 color: ${({theme}) => theme.COLORS.GRAY_1};
 font-weight: 700;
`

const SubTitle = styled.Text`
 font-size: ${({theme}) => theme.FONT_SIZE.MD};
 color: ${({theme}) => theme.COLORS.GRAY_2};
 font-weight: 400;
`

const NavigationButton = styled(TouchableOpacity)<IProps>`
 position: absolute;
 top: 10px;
 right: ${({isDetail}) => !isDetail && '15px'};
 left: ${({isDetail}) => isDetail && '15px'};
`

export { Container, Title, SubTitle, NavigationButton }