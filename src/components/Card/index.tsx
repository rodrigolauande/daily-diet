import { ViewProps } from "react-native";
import { ButtonLeft, ButtonRight, Container, IconLeft, IconRight, SubTitle, Title } from "./styles";

export type CardColor = { bg?: 'GRAY' | 'GREEN' | 'RED' }

type CardProps = ViewProps & CardColor & {
    iconPosition?: 'LEFT' | 'RIGHT'
    showIcon?: boolean
    title: string
    subtitle: string
    onPress?: () => void
}

export function Card ({title, subtitle, bg='GRAY', iconPosition = 'RIGHT', showIcon = true, onPress, ...props}: CardProps) {
        
    return(
        <Container 
            bg={bg}
            {...props}
        >
            {showIcon &&
                (iconPosition === 'LEFT' ? (
                    <ButtonLeft onPress={onPress}>
                        <IconLeft bg={bg}/>
                    </ButtonLeft>
                ) : (
                    <ButtonRight onPress={onPress}>
                        <IconRight bg={bg}/>
                    </ButtonRight>
                ))}
            <Title>
                {title}
            </Title>
            <SubTitle>
                {subtitle}
            </SubTitle>
        </Container>
    )
}