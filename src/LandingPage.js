import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const LandingPage = () => {
    const [text, setText] = useState('');

    return (
        <View style={styles.container}>
            <Text>Welcome</Text>
            <TextInput
                style={styles.textInputContainer}
                onChangeText={t => setState({ 
                    ...text,
                    text: t
                })}
                placeholder="Please type here..."
            />
        </View>
    )
}

export default LandingPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInputContainer: {
        width: 300,
        color: '#252525'
    }
})