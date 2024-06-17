import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Tela3({ texto, texto2 }) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tela3</Text>
        <Text style={styles.text}>{texto}</Text>
        <Text style={styles.text}>{texto2}</Text>
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
  text: {
    fontSize: 30,
    color: '#a21',
    marginBottom: 10,
  },
});
