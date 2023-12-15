import styled from 'styled-components/native';

interface IProps {
    width: string;
}

const Container = styled.TouchableOpacity<IProps>`
  width: ${({width}) => width};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: ${({theme}) => theme.COLORS.GRAY_2};
  border-radius: 6px;
  padding: 16px 24px;
`;

const Title = styled.Text`
 font-size: ${({theme}) => theme.FONT_SIZE.LG};
 color: ${({theme}) => theme.COLORS.WHITE};
 font-weight: ${({theme}) => theme.FONT_FAMILY.REGULAR};
`

export { Container, Title }