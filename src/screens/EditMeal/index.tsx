import { Layout } from "@components/Layout";
import { Container, Form, Row, Title } from "./styles";
import { Input } from "@components/Input";
import { Select } from "@components/Select";
import { Button } from "@components/Button";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { Alert } from "react-native";
import { mealsGetAll } from "@storage/meal/mealsGetAll";
import { mealUpdate } from "@storage/meal/mealUpdate";

type RouteParams = { id: string }

export default function EditMeal() {

    const route = useRoute()
    const { id } = route.params as RouteParams

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [hour, setHour] = useState("");
    const [isOnTheDiet, setIsOnTheDiet] = useState(true);

    const navigation = useNavigation()

    function handlegoHome () {
        navigation.navigate('home')
    }

    const alertError = (message: string) => Alert.alert('Editar refeição', message)

    async function handleReceiveMeal() {
        try {
            const data = await mealsGetAll()

            const meal = data.filter((item) => item.id === id)[0]

            setName(meal.name)
            setDescription(meal.description)
            setDate(meal.date)
            setHour(meal.hour)
            setIsOnTheDiet(meal.isOnTheDiet)
        } catch (error) {
            console.log(error)
        }
    }

    async function handleSaveUpdate () {
        try {
			const newMeal = {
				id,
				name: name.trim(),
				description: description.trim(),
				date,
				hour,
				isOnTheDiet,
			}

			if (name.trim().length === 0) {
				return alertError('Informe o nome da refeição.')
			}

			if (description.trim().length === 0) {
				return alertError('Informe a descrição da refeição.')
			}

			if (date.trim().length === 0) {
				return alertError('Informe a data da refeição.')
			}

			if (date.length < 10) {
				return alertError('O formato da data não é válida.')
			}

			if (hour.trim().length === 0) {
				return alertError('Informe a hora da refeição.')
			}

			if (hour.length < 5) {
				return alertError('O formato da hora não é válido.')
			}

			await mealUpdate(id, newMeal)

			handlegoHome()
		} catch (error) {
			console.log(error)
		}
    }

    useFocusEffect(
        useCallback(() => {
            handleReceiveMeal()
        }, []),
    )

    return (
        <Container>
            <Layout title="Editar Refeição">
                <Form>
                    <Row>
                        <Input
                            label="Nome"
                            placeholder="Nome da refeição"
                            value={name}
                            onChangeText={(text: string) => setName(text)}
                        />
                    </Row>

                    <Row>
                        <Input 
                            label="Descrição"
                            placeholder="Descrição da refeição"
                            value={description}
                            onChangeText={(text: string) => setDescription(text)}
                            />
                    </Row>

                    <Row>
                        <Input 
                            label="Data"
                            placeholder="dd/mm/aaaa"
                            style={{width: '99%', marginRight: 4}}
                            keyboardType="numbers-and-punctuation"
                            value={date}
                            onChangeText={(text: string) => setDate(text)}
                            // onInputMaksChange={(text: string) => setDate(text)}
                            />
                        <Input 
                            label="Hora"
                            placeholder="HH:mm"
                            style={{width: '99%', marginLeft: 4}}
                            keyboardType="numbers-and-punctuation"
                            value={hour}
                            onChangeText={(text: string) => setHour(text)}
                            // onInputMaksChange={(text: string) => setHour(text)}
                            />
                    </Row>

                    <Row>
                        <Title>Está dentro da dieta?</Title>
                    </Row>
                    <Row style={{marginTop: -4}}>
                        <Select
                            title="Sim"
                            style={{width: "48%"}}
                            type="PRIMARY"
                            isSelected={isOnTheDiet}
                            onPress={() => setIsOnTheDiet(true && true)}/>
                        <Select
                            title="Não"
                            style={{width: "48%"}}
                            type="SECONDARY"
                            isSelected={!isOnTheDiet}
                            onPress={() => setIsOnTheDiet(false && false)}/>
                    </Row>
                </Form>

                <Button 
                    title="Salvar alterações" 
                    write="WHITE"
                    onPress={handleSaveUpdate}
                />          
            </Layout>
        </Container>
    )
}