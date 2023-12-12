import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native"

export const New = () => {
    const navigation = useNavigation();

    const handleBack = () => {
        navigation.navigate("home");
    }
    return (
        <View>
            <Text>Nova refeição</Text>
            <TouchableOpacity onPress={() => handleBack()}>
                <Text>Home</Text>
            </TouchableOpacity>
        </View>
    )
}