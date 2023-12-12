import { useNavigation } from "@react-navigation/native"
import { Text, TouchableOpacity, View } from "react-native"

export const Home = ()=> {
    const navigation = useNavigation();

    const handleNew = () => {
        navigation.navigate("new");
    }
    return (
        <View>
            <Text>Home</Text>
            <TouchableOpacity onPress={() => handleNew()}>
                <Text>Nova refeição</Text>
            </TouchableOpacity>
        </View>
    )
}