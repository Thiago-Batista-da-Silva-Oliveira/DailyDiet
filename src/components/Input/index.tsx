import { Control, Controller } from "react-hook-form";
import { Container, StyledInput, Title } from "./styles";

interface IProps {
    title: string;
    name: string;
    control: Control<any, any>;
    placeholder?: string;
    height?: string;
}

export const ControlledInput = ({title, name, control, placeholder, height = '48px'}: IProps) => {
    return (
       <Controller name={name} control={control} render={({field: {onChange, value}}) => (
        <Container>
        <Title>{title}</Title>
        <StyledInput onChange={onChange} value={value} height={height} placeholder={placeholder}/>
       </Container>
    )} />
    )
}