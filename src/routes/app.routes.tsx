import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Detail } from '@screens/Detail/Detail';
import { Feedback } from '@screens/Feedback';
import { Home } from '@screens/Home/Home';
import { MealDetail } from '@screens/MealDetail';
import { New } from '@screens/New/New';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{
            headerShown: false,
        }}>
            <Screen
             name="home"
             component={Home}
            />
            <Screen
             name="detail"
             component={Detail}
            />
            <Screen
             name="new"
             component={New}
            />
           <Screen
             name="feedback"
             component={Feedback}
            />
           <Screen
             name="mealDetail"
             component={MealDetail}
           />
        </Navigator>
    )
}