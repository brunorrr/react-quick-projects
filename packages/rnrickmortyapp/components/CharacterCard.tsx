import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';


type Props = {
    onPress: () => void,
    name?: unknown,
    status?: unknown,
    species?: unknown,
    image?: unknown,
    location?: any
};


export const CharacterCard: React.FC<Props> = ({onPress, name, status, species, image, location}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.card}>
            <Image source={{uri: image}} style={styles.image}/>
            <View style={styles.info}>
                <Text style={styles.name}>{name}</Text>
                <Text>{status} • {species}</Text>
                {location.name ? <Text style={styles.location}>Location: {location.name}</Text> : null}
            </View>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    card: {flexDirection: 'row', padding: 12, gap: 12, borderBottomWidth: StyleSheet.hairlineWidth},
    image: {width: 80, height: 80, borderRadius: 8},
    info: {flex: 1},
    name: {fontSize: 16, fontWeight: '600', marginBottom: 4},
    location: {marginTop: 4, opacity: 0.8},
});