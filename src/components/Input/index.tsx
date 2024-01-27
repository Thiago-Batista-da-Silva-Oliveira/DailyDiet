import { Control, Controller } from "react-hook-form";
import { Container, ErrorMessage, StyledInput, Title } from "./styles";
import { TextInputProps } from "react-native";

interface IProps extends TextInputProps {
  title: string;
  name: string;
  control: Control<any, any>;
  placeholder?: string;
  errorMessage?: string;
  height?: string;
}

export const ControlledInput = ({
  title,
  name,
  control,
  placeholder,
  height = "48px",
  errorMessage,
  ...rest
}: IProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Container>
          <Title>{title}</Title>
          <StyledInput
            onChangeText={onChange}
            value={value}
            height={height}
            placeholder={placeholder}
            {...rest}
          />
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </Container>
      )}
    />
  );
};
