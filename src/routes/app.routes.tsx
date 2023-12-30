import { createNativeStackNavigator } from "@react-navigation/native-stack"

import CreateMeal from "@screens/CreateMeal";
import EditMeal from "@screens/EditMeal";
import Feedback from "@screens/Feedback";
import Home from "@screens/Home";
import Meal from "@screens/Meal";
import Statistic from "@screens/Statistic";

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes() {
    
    return(
        <Navigator screenOptions={{ headerShown: false}}>
            <Screen
                name='home'
                component={Home}
            />
            <Screen 
                name='statistic'
                component={Statistic}
            />
            <Screen
                name='createMeal'
                component={CreateMeal}
            />
            <Screen
                name='meal'
                component={Meal}
            />
            <Screen
                name='editMeal'
                component={EditMeal}
            />
            <Screen
                name='feedback'
                component={Feedback}
            />
        </Navigator>
    );
}