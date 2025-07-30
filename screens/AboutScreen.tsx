import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button } from 'react-native';
import { ScreenProps } from './HomeScreen';
export default function AboutScreen({ navigation }: ScreenProps) {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20}}>About Screen</Text>
            <Button 
                            title='Go to About' 
                            onPress={() => navigation.navigate('Home')}
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