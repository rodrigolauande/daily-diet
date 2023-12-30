import { TouchableOpacityProps } from "react-native/Libraries/Components/Touchable/TouchableOpacity";
import { Container, Divider, Status, SubTitle, Title } from "./styles";
import { PressableProps } from "react-native";

export type MealType = {
    // type?: 'GREEN' |'RED'; 
    isOnTheDiet: boolean
}
type MealProps = PressableProps & MealType &{
    hour: string
    name: string
}

export function Meal ({hour, name, isOnTheDiet, ...props}: MealProps) {
    return (
        <Container {...props} >
            <Title>
                {hour}
            </Title>
            <Divider/>
            <SubTitle style={{flex: 1}} numberOfLines={1}>
                {name}
            </SubTitle>
            <Status isOnTheDiet={isOnTheDiet}/>
        </Container>
    )
}