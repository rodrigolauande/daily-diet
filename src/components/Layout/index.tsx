import { ViewProps } from "react-native";
import { Back, Container, Header, LayoutTypeStylesProps, Main, Title } from "./styles";
import { ArrowLeft } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";

export type LayoutType = {
    bg?: 'GRAY' | 'GREEN' | 'RED'; 
}
type LayoutProps = ViewProps & 
    LayoutType & {
    title: string | JSX.Element
    children: React.ReactNode
}

export function Layout({title, bg='GRAY', ...props}: LayoutProps) {
    
    const navigation = useNavigation()

    function handleGoBack() {
        navigation.navigate('home')
    }

    return (
        <Container bg={bg}>
            <Header>
                {typeof title === 'string' ? (
                <>    
                    <Back onPress={handleGoBack}>
                        <ArrowLeft /> 
                    </Back>
                <Title>
                    {title}
                </Title>

                <Title style={{width: '15%'}}/>
                </>
                ) : (
                    <>
                        {title}
                    </>
                )}
            </Header>
            <Main>{props.children}</Main>
        </Container>
    )
}