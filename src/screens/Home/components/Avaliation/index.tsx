import { ArrowUpRight } from "phosphor-react-native";
import { Container, NavigationButton, SubTitle, Title } from "./styles"

interface IProps {
    avaliation: number;
    onPressNavigate: () => void;
}

export const Avaliation = ({avaliation, onPressNavigate}: IProps ) => {
    return (
        <Container isPositive={avaliation >= 70} >
            <NavigationButton onPress={() => onPressNavigate()}>
             <ArrowUpRight size={32} />
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