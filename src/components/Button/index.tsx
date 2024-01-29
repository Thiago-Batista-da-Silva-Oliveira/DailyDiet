import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

interface IProps {
  Icon?: React.ReactElement;
  onPress: () => void;
  title: string;
  isLoading?: boolean;
  width?: string;
  defaultBgColor?: boolean;
}

type ButtonProps = IProps & TouchableOpacityProps;

export const Button = ({
  Icon,
  onPress,
  title,
  isLoading = false,
  width = "100%",
  defaultBgColor = true,
}: ButtonProps) => {
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
