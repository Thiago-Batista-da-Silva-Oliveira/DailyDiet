import { Container, Title } from "./styles"

interface IProps {
    Icon?: React.ReactElement;
    onPress: () => void;
    title: string;
    isLoading?: boolean;
    width?: string;
}

export const Button = ({ Icon, onPress, title, isLoading = false, width = '100%' }: IProps) => {
    return (
        <Container width={width} disabled={isLoading} onPress={() => onPress()}>
            {Icon && Icon}
            <Title>{title}</Title>
        </Container>
    )
}