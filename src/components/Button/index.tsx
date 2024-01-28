import { Container, Title } from "./styles";

interface IProps {
  Icon?: React.ReactElement;
  onPress: () => void;
  title: string;
  isLoading?: boolean;
  width?: string;
  defaultBgColor?: boolean;
}

export const Button = ({
  Icon,
  onPress,
  title,
  isLoading = false,
  width = "100%",
  defaultBgColor = true,
}: IProps) => {
  return (
    <Container
      defaultBgColor={defaultBgColor}
      width={width}
      disabled={isLoading}
      onPress={() => onPress()}
    >
      {Icon && Icon}
      <Title defaultBgColor={defaultBgColor}>{title}</Title>
    </Container>
  );
};
