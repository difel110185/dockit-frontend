import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/login/login';
import colors from './constants/colors';

export default function App() {
	return (
		<View style={styles.container}>
			<Login/>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.dockitWhite,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
