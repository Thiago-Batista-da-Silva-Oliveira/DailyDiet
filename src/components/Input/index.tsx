import { Container, StyledInput, Title } from "./styles";

interface IProps {
    title: string;
    placeholder?: string;
    height?: string;
}

export const Input = ({title, placeholder, height = '48px'}: IProps) => {
    return (
        <Container>
         <Title>{title}</Title>
         <StyledInput height={height} placeholder={placeholder}/>
        </Container>
    )
}