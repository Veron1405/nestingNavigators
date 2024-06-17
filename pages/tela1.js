import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';


export default function Tela1({ textoPronto, textoPronto2 }) {
    const [input, setInput] = useState('');
    const [input2, setInput2] = useState('');

    function passarTexto(input) {
        setInput(input);
        textoPronto(input);

    }
    function passarTexto2(input2) {
        setInput2(input2);
        textoPronto2(input2);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tela 1</Text>
            <TextInput
                value={input}
                onChangeText={passarTexto}
            />
            <TextInput
                value={input2}
                onChangeText={passarTexto2}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f8',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    input: {
        width: "100%",
        padding: 15,
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        fontSize: 16,
        color: '#333',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5
    },
});
