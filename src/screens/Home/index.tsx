import { Alert, SectionList, View } from "react-native";

import { useCallback, useState } from "react";

import { Plus } from "phosphor-react-native";
import { Container, Title } from "./styles";
import { Header } from "@components/Header";
import { Card } from "@components/Card";
import { Button } from "@components/Button";
import { Meal } from "@components/Meal";
import { ListEmpty } from "@components/ListEmpty";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { mealsGetAll } from "@storage/meal/mealsGetAll";
import { MealDTO } from "src/dtos/MealDto";
import { mealsList } from "@utils/lists";
import { statsSorter } from "@utils/statistics";


type Meals = {
    date: string
    data: MealDTO[]
}

type Statistic = {
    isMealsOnTheDiet: boolean
}

export default function Home() {

    const [meals, setMeals] = useState<Meals[]>([])
    const [statistic, setStatistic] = useState<Statistic>()

    const navigation = useNavigation()

    function handleOpenNewCreateMeal() {
		navigation.navigate('createMeal')
	}

    function handleOpenMeal(id: string) {
        navigation.navigate('meal', { id })
    }

    function handleOpenStatistic () {
        navigation.navigate('statistic')
    }

    async function fetchMeals() {
        try {
          const data = await mealsGetAll()

          const meals = mealsList(data)

          const { percentage, mealsOnTheDiet, mealsOutOnDiet } = statsSorter(data)

          const isMealsOnTheDiet = mealsOnTheDiet >= mealsOutOnDiet ? true : false

          const statistics = { percentage, isMealsOnTheDiet, }

          setStatistic(statistics)

          setMeals(meals);
        } catch(error) {
          Alert.alert('Refeição', 'Não foi possível carregar as refeições');
          console.log(error)
        }
      }

    useFocusEffect(useCallback(() => {
		fetchMeals();
		},[]));
    
    return(
        <Container>
            <Header/>

            {statistic && (
                <Card
                    title={statistic.percentage}
                    subtitle={`das refeições ${
                        statistic.isMealsOnTheDiet ? 'dentro' : 'fora'
                    } da dieta`}
                    bg={statistic.isMealsOnTheDiet ? 'GREEN' : 'RED'}
                    onPress={handleOpenStatistic}
                />
            )}
            
            <View>
                <Title>Refeições</Title>
                <Button
                    type="SOLID"
                    write="WHITE"
                    title="Nova refeição"
                    icon={<Plus color="#fff"/>}
                    activeOpacity={0.5}
                    onPress={handleOpenNewCreateMeal}
                />
            </View>
            <SectionList
                sections={meals}
				keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
					<Meal
						key={item.id}
						onPress={() => handleOpenMeal(item.id)}
						{...item}
					/>
				)}
                renderSectionHeader={({ section: {date} }) => (
                    <Title>
                        {date}
                    </Title>
                )}
                contentContainerStyle={meals.length === 0 && {flex: 1, }}
                ListEmptyComponent={() => (
                    
                    <ListEmpty message="Que tal cadastrar a primeira refeição" />
                    
                )}
                showsVerticalScrollIndicator={false}    
            />
            
        </Container>
    )
}