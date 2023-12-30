import { useTheme } from "styled-components/native";
import { Container, Label, InputContainer } from "./styles";
import { TextInput, TextInputProps } from "react-native";
import { dateMask, hourMask } from "@utils/mask";


type Props = TextInputProps & {
    mask?: 'date' | 'hour'
	onInputMaksChange?: (text: string) => void
    inputRef?: React.RefObject<TextInput>
    label: string
}

export function Input ({label, inputRef, mask, onInputMaksChange, ...props}: Props) {

    const { COLORS } = useTheme();

    function handleChange(text: string) {
		onInputMaksChange &&
			mask === 'date' &&
			onInputMaksChange(dateMask(text))
		onInputMaksChange &&
			mask === 'hour' &&
			onInputMaksChange(hourMask(text))
	}
    
    return (
        <Container style={props.style}>
            <Label>
                {label}
            </Label>
            <InputContainer
                ref={inputRef}
                placeholderTextColor={COLORS.GRAY_3}
                cursorColor={COLORS.GRAY_1}
                multiline={true}
				numberOfLines={1}
                maxLength={mask === 'date' ? 10 : mask === 'hour' ? 5 : 50}
                onChangeText={(text) => handleChange(text)}
                {...props}
            />
        </Container>
    )
}