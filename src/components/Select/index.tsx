import { PressableProps } from "react-native";
import { Container, SelectTypeStylesProps, Status, Title } from "./styles";

export type SelectType = {
    type?: 'BASE' | 'PRIMARY' | 'SECONDARY';
    isSelected?: boolean
}

type SelectProps = PressableProps & 
    SelectType & {
    title: string
}

export function Select ({title, isSelected, type="BASE", ...props}: SelectProps) {
    return (
        <Container
            type={type}
            isSelected={isSelected}
            {...props}
        >
            <Status type={type}/>
            <Title>{title}</Title>
            
        </Container>
    )
}