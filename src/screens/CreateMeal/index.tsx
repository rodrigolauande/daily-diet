import { Layout } from "@components/Layout";
import { Container, Form, Row, Title } from "./styles";
import { Alert, Text } from "react-native";
import { Input } from "@components/Input";
import { Select } from "@components/Select";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { mealCreate } from "@storage/meal/mealCreate";
import { uuid } from "@utils/uuid";

export default function CreateMeal() {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [hour, setHour] = useState("");
    const [isOnTheDiet, setIsOnTheDiet] = useState(true);

    const navigation = useNavigation()

    const alertError = (message: string) => Alert.alert("Nova refeição", message);

    async function AddMeal () {          
        try {
            const data = {
                id: uuid(),
                name: name.trim(),
                description: description.trim(),
                date,
                hour,
                isOnTheDiet,
              };
              
              if (name.trim().length === 0) {
                return alertError("Informe o nome da refeição.");
              }
        
              if (description.trim().length === 0) {
                return alertError("Informe a descrição da refeição.");
              }
        
              if (date.trim().length === 0) {
                return alertError("Informe a data da refeição.");
              }
        
              if (date.length < 10) {
                return alertError("O formato da data não é válida.");
              }
        
              if (hour.trim().length === 0) {
                return alertError("Informe a hora da refeição.");
              }
        
              if (hour.length < 5) {
                return alertError("O formato da hora não é válido.");
              }
            
            await mealCreate(data);

            navigation.navigate('feedback', { isOnTheDiet });

            } catch (error) {
            alertError("Não foi possível cadastrar nova refeição");
            console.log(error);
            }
        }

    return (
        <Container>
            <Layout title="Nova Refeição">
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
                    title="Cadastrar refeição" 
                    write="WHITE"
                    activeOpacity={0.5}
                    onPress={AddMeal}
                />          
            </Layout>
        </Container>
    )
}