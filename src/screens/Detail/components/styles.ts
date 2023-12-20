import styled from 'styled-components/native';

interface IProps {
  background: string;
}

const Container = styled.View<IProps>`
display: flex;
padding: 16px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 8px;
align-self: stretch;
background: ${({theme, background}) => background ?? theme.COLORS.GRAY_6};
border-radius: 8px;
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
 text-align: center;
`

export { Container, Title, SubTitle }