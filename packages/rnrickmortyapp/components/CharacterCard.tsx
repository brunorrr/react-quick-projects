import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import FontAwesome from '@react-native-vector-icons/fontawesome';
import { useAppDispatch } from '../store';
import { addFavorite, removeFavorite } from '../store/favoritesSlice.ts';

type Props = {
  onPress: () => void,
  onFavoritePress?: () => void,
  id: number;
  name?: string,
  status?: string,
  species?: string,
  image?: string,
  location?: any
};


export const CharacterCard: React.FC<Props> = ({onPress, onFavoritePress, id, name, status, species, image, location}) => {
  const { t } = useTranslation();
  const isFavorite:boolean = useSelector((state: any) => state.favorites.items).includes(id);
  const dispatch = useAppDispatch();

  const toggleFavorite = () => {
    if(isFavorite) {
      dispatch(removeFavorite(id));
    }
    else {
      dispatch(addFavorite(id));
    }
  }

  return (
      <TouchableOpacity onPress={onPress} style={styles.card}>
          <Image source={{uri: image}} style={styles.image}/>
          <View style={styles.info}>
              <Text style={styles.name}>{name}</Text>
              <Text>{status} • {species}</Text>
              {location.name ? <Text style={styles.location}>{t("home.card.label.location")}: {location.name}</Text> : null}
          </View>
          <TouchableWithoutFeedback onPress={toggleFavorite}>
            <View style={{paddingTop: 20}}>
              <FontAwesome
                name={isFavorite ? 'star' : 'star-o'}
                size={32}
                color={'orange'}
              />
            </View>
          </TouchableWithoutFeedback>
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