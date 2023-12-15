import styled from 'styled-components/native';

const Container = styled.View`
display: flex;
gap: 10px;
`;

const ComponentTitle = styled.Text`
 font-size: ${({theme}) => theme.FONT_SIZE.LG};
 color: ${({theme}) => theme.COLORS.GRAY_1};
 font-weight: ${({theme}) => theme.FONT_FAMILY.REGULAR};
`

const Title = styled.Text`
 font-size: ${({theme}) => theme.FONT_SIZE.XL};
 color: ${({theme}) => theme.COLORS.GRAY_1};
 font-weight: ${({theme}) => theme.FONT_FAMILY.BOLD};
`

const SubTitle = styled.Text`
 font-size: ${({theme}) => theme.FONT_SIZE.LG};
 color: ${({theme}) => theme.COLORS.GRAY_2};
 font-weight: ${({theme}) => theme.FONT_FAMILY.REGULAR};
`


export { Container, ComponentTitle, Title, SubTitle }