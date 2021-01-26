import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

class LandingPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
            inputText: ''
		};
	}

	render() {
		return <View style={styles.container}>
			<Text>Welcome</Text>
			<Text>{this.state.inputText}</Text>
            <TextInput
                style={styles.inputText}
                onChangeText={text => this.setState({inputText: text})}
            /> 
		</View>;
	}
}

export default LandingPage;

const styles = StyleSheet.create({
	container: {
		flex: 1, alignItems: 'center', justifyContent: 'center',
    },
    inputText: {
		width: 300,
		borderWidth: 1,
		borderColor: '#DEDEDE',
		height: 40,
		padding: 10,
		borderRadius: 3
    }
});