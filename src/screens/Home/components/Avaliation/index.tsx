import { ArrowLeft, ArrowUpRight } from "phosphor-react-native";
import { Container, NavigationButton, SubTitle, Title } from "./styles"
import { useTheme } from "styled-components";

interface IProps {
  avaliation: number;
  onPressNavigate: () => void;
  isDetail?: boolean;
}

export const Avaliation = ({ avaliation, onPressNavigate, isDetail = false }: IProps) => {
  const { COLORS } = useTheme();
  return (
    <Container isDetail={isDetail} isPositive={avaliation >= 70} >
      <NavigationButton isDetail={isDetail} onPress={() => onPressNavigate()}>
        {
          isDetail ? <ArrowLeft color={avaliation >= 70 ? COLORS.GREEN_DARK : COLORS.RED_DARK} size={32} /> : <ArrowUpRight color={avaliation >= 70 ? COLORS.GREEN_DARK : COLORS.RED_DARK} size={32} />
        }
      </NavigationButton>
      <Title>
        {avaliation}%
      </Title>
      <SubTitle>
        das refeições dentro da dieta
      </SubTitle>
    </Container>
  )
}