import { FC, useState } from 'react';
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {ActivityIndicator, FlatList, Text, View} from "react-native";
import {CharacterCard} from "../components/CharacterCard.tsx";
import {useQuery} from "@apollo/client/react";
import {gql} from "@apollo/client";
import {useSelector} from "react-redux";

const CHARACTERS = gql`
  query CharactersByIds($ids: [ID!]!) {
    charactersByIds(ids: $ids) {
        id
        name
        status
        species
        image
        location {
          name
        }
    }
  }
`;

type HomeStackParams = {
    HomeList: undefined;
    Details: { id: string };
    Profile: undefined;
    Favorites: undefined;
};

type Props = NativeStackScreenProps<HomeStackParams, 'Favorites'>;

export const FavoritesScreen: FC<Props> = ({navigation}) => {
    const favoriteIds = useSelector((state: any) => state.favorites.items);

    const { data, loading, error } = useQuery(CHARACTERS, {
        variables: { ids: favoriteIds },
        fetchPolicy: 'no-cache',
        skip: favoriteIds.length === 0,
    });

    const list = data?.charactersByIds;

    if (error) {
        return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Error on loading</Text>
        </View>;
    }

    return (
        <View style={{ flex: 1 }}>
            {loading ? (
                <ActivityIndicator style={{ marginTop: 24 }} />
            ) : (
                <FlatList
                    data={list}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <CharacterCard
                            id={item.id}
                            name={item.name}
                            status={item.status}
                            species={item.species}
                            image={item.image}
                            location={item.location}
                            onPress={() => navigation.navigate('Details', { id: item.id })}
                        />
                    )}
                    contentContainerStyle={{ paddingBottom: 24 }}
                />
            )}
        </View>
    );
}