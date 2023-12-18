import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuScreen from '../screens/Menu/MenuScreen';
import AddLoadStatusScreen from '../screens/AddLoadStatus/AddLoadStatusScreen';
import ListLoadStatusScreen from '../screens/ListLoadStatus/ListLoadStatusScreen';
import EditLoadStatusScreen from '../screens/EditLoadStatus/EditLoadStatusScreen';
// Importe outras telas aqui

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Menu" component={MenuScreen} />
            <Stack.Screen name="AddLoadStatus" component={AddLoadStatusScreen} />
            <Stack.Screen name="ListLoadStatus" component={ListLoadStatusScreen} />
            <Stack.Screen name="EditLoadStatus" component={EditLoadStatusScreen} />
            {/* Configure outras rotas aqui */}
        </Stack.Navigator>
    );
};

export default AppNavigator;
