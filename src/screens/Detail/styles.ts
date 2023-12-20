import styled from 'styled-components/native';

const Container = styled.View`
  height: 100%;
  display: 'flex';
`;

const StatisticsContainer = styled.View`
  display: 'flex';
  height: 100%;
  background-color: ${({theme})=> theme.COLORS.GRAY_7};
  padding: 33px 24px 261px 24px;
  align-items: center;
  gap: 23px;
  border-radius: 20px;
  margin-top: -20px;
`

const Title = styled.Text`
 color: ${({theme}) => theme.COLORS.GRAY_1};
 text-align: center;
 font-size: ${({theme}) => theme.FONT_SIZE.MD};
 font-style: normal;
 font-weight: 700;
`;

export { Container, StatisticsContainer, Title }