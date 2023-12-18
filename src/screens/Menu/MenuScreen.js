import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
const MenuScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Menu Principal</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Adicionar LoadStatus"
                    onPress={() => navigation.navigate('AddLoadStatus')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Listar LoadStatus"
                    onPress={() => navigation.navigate('ListLoadStatus')}
                />
            </View>
            {/* Adicionar mais botões conforme necessário */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        color: '#555',
        fontSize: 20,
        marginBottom: 20
    },
    buttonContainer: {
        marginBottom: 10, // Ajuste este valor conforme necessário
    }
});

export default MenuScreen;