import { Layout } from "@components/Layout";
import { Container, Content, Row, Status, SubTitle, Tag, Title } from "./styles";
import { Button } from "@components/Button";
import { PencilSimpleLine, Trash } from "phosphor-react-native";
import { Modal } from "@components/Modal";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { mealsGetAll } from "@storage/meal/mealsGetAll";
import { Alert } from "react-native";
import { useCallback, useState } from "react";
import { MealDTO } from "src/dtos/MealDto";
import { mealRemove } from "@storage/meal/mealRemove";

type RouteParams = { id: string }

export type MealStatus = { isOnTheDiet: boolean }
export type MealBackground = { bg: 'GREEN' | 'RED' }

export default function Meal () {
	const [meal, setMeal] = useState<MealDTO>()
    const [modalVisible, setModalVisible] = useState(false)


    const navigation = useNavigation()
    const route = useRoute()

    const { id } = route.params as RouteParams

    function handleEditMeal () {
        navigation.navigate('editMeal', { id })
    }

    const alertError = (message: string) => Alert.alert('Refeição', message)
    
    async function fetchMeal() {
        try {
            const data = await mealsGetAll()

            const meal = data.filter((meal) => meal.id === id)[0]

            setMeal(meal)
        } catch (error) {
            alertError('Não foi possível visualizar a refeição')
			console.log(error)        }
    }

    async function handleDeleteMeal (id: string) {
        try {
            await mealRemove(id)
        } catch (error) {
            console.log(error)
        }
        navigation.navigate('home')
    }

    useFocusEffect(
		useCallback(() => {
			fetchMeal()
		}, []),
	)
    
    return (
        <Container 
        bg={meal?.isOnTheDiet ? 'GREEN' : 'RED'}>
            <Layout title="Refeição"
            bg={meal?.isOnTheDiet ? 'GREEN' : 'RED'}
            >
                <Content>
                <Row>
                    <Title>
                        {meal?.name}
                    </Title>
                </Row>
                <Row>
                    <SubTitle>
                        {meal?.description}
                    </SubTitle>
                </Row>
                <Row>
                    <Title>
                        Data e hora
                    </Title>
                </Row>
                <Row>
                    <SubTitle>
                    {meal?.date} às {meal?.hour}
                    </SubTitle>
                </Row>
                <Row>
                    {meal?.isOnTheDiet ? (
                        <Tag>
                            <Status isOnTheDiet={meal?.isOnTheDiet ? true : false}/>
                            <SubTitle>
                            dentro da dieta
                            </SubTitle>
                        </Tag>
                    ):(
                        <Tag>
                            <Status isOnTheDiet={meal?.isOnTheDiet ? true : false}/>
                            <SubTitle>
                            fora da dieta
                            </SubTitle>
                        </Tag>
                    )}
                </Row>
                </Content>
                
                {meal && modalVisible && (
					<Modal
                        modalVisible={modalVisible}
                        setModalVisible={setModalVisible}
                        onAction={() => handleDeleteMeal(meal.id)}
                    />
                )}
				
                <Button 
                    title="Editar Refeição" 
                    type="SOLID" write="WHITE" 
                    icon={<PencilSimpleLine color="white"/>} 
                    style={{ marginBottom: 8 }}
                    onPress={handleEditMeal}
                />
                <Button 
                    title="Excluir Refeição" 
                    type="OUTLINE" 
                    write="BLACK" 
                    icon={<Trash color="black"/>}
                    onPress={() => setModalVisible(true)}
                />
            </Layout>
        </Container>
    )
}