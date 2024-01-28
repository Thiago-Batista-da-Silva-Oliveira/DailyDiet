import styled from 'styled-components/native';

interface IProps {
    width: string;
    defaultBgColor: boolean;
}

const Container = styled.TouchableOpacity<IProps>`
  width: ${({width}) => width};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: ${({theme, defaultBgColor}) => defaultBgColor ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE};
  border-radius: 6px;
  padding: 16px 24px;
  border: 1px solid ${({theme}) => theme.COLORS.GRAY_2};
`;

const Title = styled.Text<{
  defaultBgColor: boolean;
}>`
 font-size: ${({theme}) => theme.FONT_SIZE.MD};
 color: ${({theme, defaultBgColor}) => defaultBgColor ? theme.COLORS.WHITE : theme.COLORS.GRAY_2};
 font-weight: 400;
`

export { Container, Title }