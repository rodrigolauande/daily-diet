import { Image } from "react-native";
import { Container, SubTitle, Title } from "./styles";
import { useTheme } from "styled-components";

import sucess from '../../assets/illustration-happy.png'
import recuse from '../../assets/illustration-sad.png'
import { Button } from "@components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";

type RouteParams = {
    isOnTheDiet: boolean
}

export default function Feedback () {

    const { FONT_FAMILY } = useTheme()

    const navigation = useNavigation()
    const route = useRoute()

    const { isOnTheDiet } = route.params as RouteParams

    function handleGoHome () {
        navigation.navigate('home')
    }

    return(
        <Container>
            {isOnTheDiet ? (
                <>
                    <Title style={{color: 'green'}}>Continue Assim!</Title>
                        <SubTitle>Voce continua{' '}
                        <SubTitle style={FONT_FAMILY.BOLD}>dentro da dieta.</SubTitle>{' '}
                        Muito Bem!
                        </SubTitle>
                    <Image source={sucess}/>
                </>
            ) : (
            <>
                <Title style={{color: 'red'}}>Que Pena!</Title>
                    <SubTitle>Você{' '}
                    <SubTitle style={FONT_FAMILY.BOLD}>saiu da dieta</SubTitle>{' '}
                    dessa vez, mas continue se esforçando e não desista!
                    </SubTitle>
                <Image source={recuse}/>
            </>
            )}
            
            <Button 
                title="Ir para página inicial"
                write="WHITE"
                style={{marginTop: 32, width: '55%', paddingRight: 15}}
                onPress={handleGoHome}
                />
        </Container>
    )
}