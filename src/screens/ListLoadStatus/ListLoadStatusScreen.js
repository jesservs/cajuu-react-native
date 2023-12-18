import React, { useState, useEffect } from 'react';
import { View, Button, Text, FlatList, StyleSheet, Alert } from 'react-native';
import api from '../../services/api'; // Ajuste o caminho conforme necessário

const ListLoadStatusScreen = ({navigation}) => {
    const [loadStatuses, setLoadStatuses] = useState([]);

    const fetchLoadStatuses = async () => {
        try {
            const response = await api.get('loadstatus');
            setLoadStatuses(response.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {

        fetchLoadStatuses();
    }, []);

    const deleteLoadStatus = async (id) => {
        try {
            await api.delete(`loadstatus/${id}`);
            Alert.alert("Sucesso", "LoadStatus excluído com sucesso.");
            fetchLoadStatuses();
        } catch (error) {
            Alert.alert("Erro", "Não foi possível excluir o LoadStatus.");
            console.error(error);
        }
    };

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemTextName}>{item.id} - {item.load_status_name}</Text>
            <Text style={styles.itemTextDescription}>{item.description}</Text>
            <Button title="Editar" onPress={() => navigation.navigate('EditLoadStatus', { item, onGoBack: fetchLoadStatuses })} />
            <Button title="Excluir" onPress={() => deleteLoadStatus(item.id)} />
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={loadStatuses}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()} // Ajuste conforme a chave única do seu item
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff', // Cor de fundo clara
    },
    itemContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    itemTextName: {
        color: '#555',
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemTextDescription: {
        color: '#777', // Cor de texto escura
    },
});

export default ListLoadStatusScreen;
