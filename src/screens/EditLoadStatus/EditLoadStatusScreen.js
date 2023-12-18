import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import api from '../../services/api';

const EditLoadStatusScreen = ({route, navigation}) => {
    const { item } = route.params;

    const [loadStatusName, setLoadStatusName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        setLoadStatusName(item.load_status_name);
        setDescription(item.description);
    }, [item]);

    const handleUpdate = async () => {
        try {
            console.log("teste: " + loadStatusName + " " + description);
            await api.put(`loadstatus/${item.id}`, {
                load_status_name: loadStatusName,
                description: description,
            });
            Alert.alert("Sucesso", "LoadStatus atualizado com sucesso.");

            if (route.params?.onGoBack) {
                // execute the function fetchLoadStatuses to update list values
                route.params.onGoBack();
            }

            navigation.goBack();
            
        } catch (error) {
            console.error(error);
            Alert.alert("Erro", "Não foi possível atualizar o LoadStatus.");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Editar LoadStatus</Text>

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
                title="Atualizar"
                onPress={handleUpdate}
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

export default EditLoadStatusScreen;