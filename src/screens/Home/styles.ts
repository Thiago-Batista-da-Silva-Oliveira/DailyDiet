import styled from 'styled-components/native';

const Container = styled.View`
  background-color: ${({theme}) => theme.COLORS.WHITE};
  padding: 20px;
  gap: 30px;
  height: 100%;
`;

export { Container }