import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { CharacterDetailsScreen } from "../screens/CharacterDetailsScreen.tsx";
import {UserProfileScreen} from "../screens/UserProfileScreen.tsx";
import {FavoritesScreen} from "../screens/FavoritesScreen.tsx";

export type HomeStackParamList = {
    Details: { id: string };
};

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen name="HomeList" component={HomeScreen} options={{ title: 'Characters List' }} />
        <HomeStack.Screen name="Details" component={CharacterDetailsScreen} options={{ title: 'Character Details' }} />
    </HomeStack.Navigator>
);

const FavoritesStack = createNativeStackNavigator();

const FavoritesStackNavigator = () => (
    <FavoritesStack.Navigator>
        <FavoritesStack.Screen name="Favorites" component={FavoritesScreen} />
        <FavoritesStack.Screen name="Details" component={CharacterDetailsScreen} />
    </FavoritesStack.Navigator>
);

const Tab = createBottomTabNavigator();

export const RootNavigator = () => (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStackNavigator} options={{ headerShown: false }} />
            <Tab.Screen name="Favorites" component={FavoritesStackNavigator} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={UserProfileScreen} />
        </Tab.Navigator>
    </NavigationContainer>
);