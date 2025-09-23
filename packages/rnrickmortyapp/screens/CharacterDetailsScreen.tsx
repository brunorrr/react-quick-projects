import {gql} from "@apollo/client";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {FC} from "react";
import {ActivityIndicator, Button, Image, ScrollView, Text} from "react-native";
import {useQuery} from "@apollo/client/react";
import {useSelector} from "react-redux";
import {useAppDispatch} from "../store";
import {addFavorite, removeFavorite} from "../store/favoritesSlice.ts";

const CHARACTER = gql`
query Character($id: ID!) {
    character(id: $id) {
        id
        name
        status
        species
        image
        location { name }
        episode { id name }
    }
}
`;

type HomeStackParams = {
    HomeList: undefined;
    Details: { id: string };
    Profile: undefined;
    Favorites: undefined;
};

type Props = NativeStackScreenProps<HomeStackParams, 'Details'>;

export const CharacterDetailsScreen: FC<Props> =  ({route}) => {
    const id = route.params.id;

    const isFavorite:boolean = useSelector((state: any) => state.favorites.items.includes(id));
    const dispatch = useAppDispatch();

    const switchFavorite = () => {
        if(isFavorite) {
            dispatch(removeFavorite(id));
        }
        else {
            dispatch(addFavorite(id));
        }
    }

    const { data, loading, error } = useQuery(CHARACTER, { variables: { id }, fetchPolicy: 'no-cache' });

    if (loading) return <ActivityIndicator style={{ marginTop: 24 }} />;
    if (error || !data?.character) return <Text>Error on loading</Text>;

    const character = data.character || {};
    return (
        <ScrollView contentContainerStyle={{ padding: 16 }}>
            <Button title={`${isFavorite ? 'Remove from' : 'Add to'} Favorites`} onPress={switchFavorite} style={{ marginBottom: 12 }} />
            <Image source={{ uri: character.image }} style={{ width: '100%', height: 300, borderRadius: 12 }} />
            <Text style={{ fontSize: 24, fontWeight: '700', marginTop: 12 }}>{character.name}</Text>
            <Text style={{ marginTop: 4 }}>{character.status} - {character.species}</Text>
            <Text style={{ marginTop: 4 }}>Location: {character.location?.name ?? '—'}</Text>

            <Text style={{ fontSize: 18, fontWeight: '600', marginTop: 16, marginBottom: 8 }}>Episodes</Text>
            {character.episode?.map((e: any) => (
                <Text key={e.id} style={{ paddingVertical: 4 }}>- {e.name}</Text>
            ))}
        </ScrollView>
    );
}