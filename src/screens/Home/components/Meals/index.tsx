import { Button } from "@components/Button"
import { ComponentTitle, Container } from "./styles"
import { Plus } from "phosphor-react-native"

export const Meals = () => {
    return (
        <Container>
            <ComponentTitle>Refeições</ComponentTitle>
            <Button 
              Icon={<Plus color="#FFFFFF" size={24} />}
              onPress={() => console.log('clicou')} title="Nova Refeição" />
        </Container>
    )
}