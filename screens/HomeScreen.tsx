import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
export type RootStackParamList = {
    Home: undefined;
    About: undefined;
    // Add other screens here as needed
};

 export type ScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

export default function HomeScreen({ navigation }: ScreenProps) {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20}}>Home Screen</Text>
            <Button 
                title='Go to About' 
                onPress={() => navigation.navigate('About')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
});