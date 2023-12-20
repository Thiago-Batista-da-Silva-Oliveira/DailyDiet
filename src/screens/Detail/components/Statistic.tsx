import { Title } from "../styles"
import { Container, SubTitle } from "./styles"

interface IProps {
    background: string;
    title: string;
    subTitle: string;
}

export const Statistic = ({background, subTitle, title}: IProps) => {
    return (
        <Container background={background}>
           <Title>
               {title}
           </Title>
           <SubTitle>
              {subTitle}
           </SubTitle>
        </Container>
    )
}