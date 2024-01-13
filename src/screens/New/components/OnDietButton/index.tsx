import { Circle, Container, Title } from "./styles"

interface IProps {
    onPress: () => void;
    isOnDietType?: boolean;
    isClicked?: boolean;
}

export const OnDietButton = ({onPress, isClicked = false, isOnDietType = false}: IProps) => {
    return (
        <Container onPress={() => onPress()} isClicked={isClicked} isOnDietType={isOnDietType}>
          <Circle isOnDietType={isOnDietType} />
          <Title>{isOnDietType ? "Sim" : "Não"}</Title>
        </Container>
    )
}