import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
export const HomeScreen = () => {	
    return (
        <View>
            <Button mode="contained" onPress={() => console.log('Pressed')}>
                Press me
            </Button>
            <Text variant='displaySmall'>
                 HomeScreen
            </Text>
        </View>
    )
}