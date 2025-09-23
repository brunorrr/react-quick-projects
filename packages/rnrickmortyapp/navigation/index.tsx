import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';


export type HomeStackParamList = {
    HomeList: undefined;
    Details: { id: string };
};


const HomeStack = createNativeStackNavigator<HomeStackParamList>();


const HomeStackNavigator = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen name="HomeList" component={HomeScreen} options={{ title: 'Personagens' }} />
    </HomeStack.Navigator>
);


const Tab = createBottomTabNavigator();


export const RootNavigator = () => (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStackNavigator} options={{ headerShown: false }} />
        </Tab.Navigator>
    </NavigationContainer>
);