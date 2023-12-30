import { Button } from '@components/Button'
import { StyleSheet } from 'react-native'
import { Centered, Container, ModalView, Row, Title } from './styles'

type ModalProps = {
	modalVisible: boolean
	setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
	onAction?: () => void
	}

export function Modal({ modalVisible=false, setModalVisible, onAction }: ModalProps) {
	return (
		<Container
			animationType="fade"
			transparent={true}
			visible={modalVisible}
		>
			<Centered>
				<ModalView style={styles.shadow}>
					<Title
						fontSize="title_sm"
						family="bold"
						textAlign="center"
					>
						Deseja realmente excluir o registro da refeição?
					</Title>

					<Row>
						<Button
							type="OUTLINE"
							write='BLACK'
							title="Cancelar"
							onPress={() => setModalVisible(!modalVisible)}
							style={{ width: '48%' }}
						/>

						<Button
							type="SOLID"
							write='WHITE'
							title="Sim, excluir"
							onPress={onAction}
							style={{ width: '48%' }}
						/>
					</Row>
				</ModalView>
			</Centered>
		</Container>
	)
}

const styles = StyleSheet.create({
	shadow: {
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 22,
	},
})