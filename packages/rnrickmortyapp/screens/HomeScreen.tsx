import {FC, useMemo, useState} from 'react';
import { View, FlatList, ActivityIndicator, Button, Text } from 'react-native';
import { gql } from '@apollo/client';
import { CharacterCard } from '../components/CharacterCard';
import {useQuery} from "@apollo/client/react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

const CHARACTERS = gql`
  query Characters($page: Int) {
    characters(page: $page) {
      info { next }
      results {
        id
        name
        status
        species
        image
        location { name }
      }
    }
  }
`;

type HomeStackParamList = {
    HomeList: undefined;
    Details: { id: string };
};


type Props = NativeStackScreenProps<HomeStackParamList, 'HomeList'>;

export const HomeScreen: FC<Props> = ({ navigation }) => {
    const [page, setPage] = useState(1);
    const { data, loading, error, fetchMore } = useQuery(CHARACTERS, {
        variables: { page },
        fetchPolicy: 'no-cache',
    });

    const list = useMemo(() => data?.characters?.results ?? [], [data]);
    const nextPage = data?.characters?.info?.next as number | null | undefined;

    if (error) {
        return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Error on loading</Text>
        </View>;
    }

    return (
        <View style={{ flex: 1 }}>
            {loading && page === 1 ? (
                <ActivityIndicator style={{ marginTop: 24 }} />
            ) : (
                <FlatList
                    data={list}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <CharacterCard
                            name={item.name}
                            status={item.status}
                            species={item.species}
                            image={item.image}
                            location={item.location}
                            onPress={() => navigation.navigate('Details', { id: item.id })}
                        />
                    )}
                    contentContainerStyle={{ paddingBottom: 24 }}
                    ListFooterComponent={() => (
                        nextPage ? (
                            <View style={{ padding: 16 }}>
                                <Button
                                    title={`Load${loading ? 'ing' : ` More (Page ${nextPage})`}`}
                                    onPress={async () => {
                                        if (!nextPage) return;
                                        await fetchMore({ variables: { page: nextPage } });
                                        setPage(nextPage);
                                    }}
                                />
                            </View>
                        ) : null
                    )}
                />
            )}
        </View>
    );
};
