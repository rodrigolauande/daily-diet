import { Text } from "react-native";
import { Container, Row, Title } from "./styles";
import { Layout } from "@components/Layout";
import { Card } from "@components/Card";
import { useCallback, useState } from "react";
import { mealsGetAll } from "@storage/meal/mealsGetAll";
import { statsSorter } from "@utils/statistics";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

type Statistic = {
	percentage: string
	bestSequenceOfDishesWithinTheDiet: string
	registeredMeals: string
	mealsOnTheDiet: string
	mealsOutOnDiet: string
}

export type StatisticBackground = {
	bg: 'GREEN' | 'RED'
}

export default function Statistic() {

    const [statistic, setStatistic] = useState<Statistic>()
	const [isMealsOnTheDiet, setIsMealsOnTheDiet] = useState(true)

    const navigation = useNavigation()
    
    function handleBackToHome() {
		navigation.navigate('home')
	}

    async function handleReceiveMeal() {
        try {
            const data = await mealsGetAll()

            const statistic = statsSorter(data)

            const isMealsOnTheDiet = statistic.mealsOnTheDiet >= statistic.mealsOutOnDiet ? true : false

            setIsMealsOnTheDiet(isMealsOnTheDiet)

            setStatistic(statistic)
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
        <Container bg={isMealsOnTheDiet ? 'GREEN' : 'RED'}>
            {statistic && (
                <Layout
                    bg={isMealsOnTheDiet ? 'GREEN' : 'RED'} 
                    title={<Card 
                            title={statistic.percentage}
                            subtitle={`das refeições ${isMealsOnTheDiet ? 'dentro' : 'fora'} da dieta`}
                            bg={isMealsOnTheDiet ? 'GREEN' : 'RED'}
                            iconPosition="LEFT"
                            onPress={handleBackToHome}
                            />}
                >
                    <Title>Estatícas gerais</Title>

                    <Row>
                        <Card
                            title={statistic.bestSequenceOfDishesWithinTheDiet}
                            subtitle="melhor sequência de pratos dentro da dieta"
                            bg="GRAY"
                            showIcon={false}
                            />
                    </Row>

                    <Row>
                        <Card
                            title={statistic.registeredMeals}
                            subtitle="Refeições registradas"
                            bg="GRAY"
                            showIcon={false}
                        />
                    </Row>

                    <Row>
                        <Card
                            title={statistic.mealsOnTheDiet}
                            subtitle="refeições dentro da dieta"
                            bg="GREEN"
                            showIcon={false}
                            style={{width: "48%"}}
                        />
                        <Card
                            title={statistic.mealsOutOnDiet}
                            subtitle="refeições fora da dieta"
                            bg="RED"
                            showIcon={false}
                            style={{width: "48%"}}
                        />
                    </Row>
                    
                </Layout>

            )}
        </Container>
    )
}