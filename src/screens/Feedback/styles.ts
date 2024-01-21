import styled from 'styled-components/native';

interface ITitle {
    onDiet?: boolean;
}

interface IText {
  bold?: boolean;
}

const Container = styled.View`
  height: 100%;
  display: 'flex';
  justify-content: center;
  align-items: center;
  gap: 10px;
`;


const Title = styled.Text<ITitle>`
 color: ${({theme, onDiet = false}) => onDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
 text-align: center;
 font-size: ${({theme}) => theme.FONT_SIZE.XXL};
 font-style: normal;
 font-weight: 700;
`;

const Text = styled.Text<IText>`
 color: ${({theme}) => theme.COLORS.GRAY_1};
 text-align: center;
 font-size: ${({theme}) => theme.FONT_SIZE.LG};
 font-style: normal;
 font-weight: ${({theme, bold}) => bold ? 700 : 400};
`;


export { Container, Title, Text }