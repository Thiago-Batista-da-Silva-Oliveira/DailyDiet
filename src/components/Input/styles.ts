import styled from 'styled-components/native';

interface IInputProps {
    height: string;
}

const Container = styled.View`
  display: 'flex';
  width: 100%;
  gap: 10px;
`;

const Title = styled.Text`
 font-size: ${({theme}) => theme.FONT_SIZE.MD};
 color: ${({theme}) => theme.COLORS.GRAY_2};
 font-weight: 700;
`

const StyledInput = styled.TextInput<IInputProps>`
 display: flex;
 height: ${({height}) => height};
 padding: 14px;
 align-items: center;
 gap: 8px;
 align-self: stretch;
 border-radius: 6px;
 border-color: ${({theme}) => theme.COLORS.GRAY_5};
`


export { Container, Title, StyledInput }