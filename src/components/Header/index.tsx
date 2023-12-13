import { Container, Logo, ProfileContainer, ProfileImage } from "./styles";
import logo from '@assets/logo.png'

export const Header = () => {
    return (
        <Container>
            <Logo source={logo} />
            <ProfileContainer>
                <ProfileImage source={
                    {
                        uri: "https://avatars.githubusercontent.com/u/77520434?s=400&u=47e4c03258eff63f6d0c5abc348712a1383dfc89&v=4"
                    }
                } />
            </ProfileContainer>
        </Container>
    )
}