import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20}}>Home Screen</Text>
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