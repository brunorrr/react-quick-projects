import {FC} from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {Image, ScrollView, Text} from "react-native";

type HomeStackParams = {
    HomeList: undefined;
    Details: { id: string };
    Profile: undefined;
};

type Props = NativeStackScreenProps<HomeStackParams, 'Profile'>;

export const UserProfileScreen: FC = (Props) => {

    const userInfo = {
        name: "Samwise Gange",
        email: "samwise@hotmail.com",
        avatar: "https://static.wikia.nocookie.net/lotr/images/2/20/Sam.jpg",
        bio: "A loyal hobbit and Frodo's steadfast companion on the quest to destroy the One Ring.",
    };

    return (
        <ScrollView contentContainerStyle={{ padding: 16 }}>
            <Image source={{ uri: userInfo.avatar }} style={{ width: '100%', height: 500, borderRadius: 12 }} />
            <Text style={{ fontSize: 24, fontWeight: '700', marginTop: 12 }}>{userInfo.name}</Text>
            <Text style={{ marginTop: 4 }}>{userInfo.bio}</Text>
            <Text style={{ marginTop: 4 }}>{userInfo.email}</Text>
        </ScrollView>
    );
}