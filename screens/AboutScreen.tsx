import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20}}>About Screen</Text>
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