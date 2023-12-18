import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import api from '../../services/api';

const AddLoadStatusScreen = () => {
    const [loadStatusName, setLoadStatusName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await api.post('loadstatus', {
                load_status_name: loadStatusName,
                description: description,
            });
            setLoadStatusName('');
            setDescription('');
            Alert.alert("Sucesso", "LoadStatus criado com sucesso.");
            console.log(response.data);
            // Trate a resposta conforme necessário
        } catch (error) {
            Alert.alert("Erro", "Não foi possível criar o LoadStatus.");
            console.error(error);
            // Trate o erro conforme necessário
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Adicionar LoadStatus</Text>

            <TextInput
                style={styles.input}
                placeholder="Nome do Load Status"
                placeholderTextColor='#999'
                value={loadStatusName}
                onChangeText={setLoadStatusName}
            />

            <TextInput
                style={styles.input}
                placeholder="Descrição"
                placeholderTextColor='#999'
                value={description}
                onChangeText={setDescription}
            />

            <Button
                title="Salvar"
                onPress={handleSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        color: '#555',
        fontSize: 20,
        marginBottom: 20,
    },
    input: {
        color: '#555',
        width: '100%',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
    },
});

export default AddLoadStatusScreen;
