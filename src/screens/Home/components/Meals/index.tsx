import { Button } from "@components/Button"
import { ComponentTitle, Container } from "./styles"

export const Meals = () => {
    return (
        <Container>
         <ComponentTitle>Refeições</ComponentTitle>
         <Button onPress={() => console.log('clicou')} title="Nova Refeição" />
        </Container>
    )
}