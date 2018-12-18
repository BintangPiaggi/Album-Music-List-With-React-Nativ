import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ Tombol }) => {
	return (
	<TouchableOpacity onPress={Tombol} style={styles.Buttonstyle}>
		<Text style={styles.TextStyle}> Click </Text>
	</TouchableOpacity>
	);
};

const styles = {
	TextStyle: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	},
	Buttonstyle: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidht: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5
	}
};

export default Button;