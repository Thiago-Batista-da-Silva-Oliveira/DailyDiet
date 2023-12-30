import { ArrowLeft } from "phosphor-react-native";
import { Container, Title } from "./styles"
import { TouchableOpacity } from "react-native";

interface IProps {
    title: string;
    onClickBack: () => void;
    isEditing?: boolean;
    isOnDiet?: boolean;
}

export const Header = ({onClickBack, title, isEditing = false, isOnDiet = true}: IProps) => {
    return (
        <Container isOnDiet={isOnDiet} isEditing={isEditing}>
      <TouchableOpacity onPress={() => onClickBack()}>
        {
          <ArrowLeft size={32} />
        }
      </TouchableOpacity>
            <Title>
                {title}
            </Title>
        </Container>
    )
}