import { Text, TouchableOpacityProps } from "react-native";
import { Container, ContainerIcon, Title } from "./styles";

export type ButtonType = {
    type?: 'SOLID' | 'OUTLINE';
    write?: 'WHITE' | 'BLACK' 
    isActive?: boolean
}

type ButtonProps = TouchableOpacityProps & 
    ButtonType & {
    icon?: React.ReactNode
    title: string
}

export function Button ({title, icon, write='BLACK', type="SOLID", isActive = true, ...props}: ButtonProps) {
    return (
        <Container 
            type={type}
            isActive={isActive}
            disabled={isActive ? false : true }
            {...props}
        >
        <ContainerIcon>
            {icon}
        </ContainerIcon>
        
        <Title write={write}>
            {title}
        </Title>
        </Container>
    )
}