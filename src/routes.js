import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SingIn from './pages/SingIn/index'
import SingUp from './pages/SingUp/index'
import Ambientes from './pages/Ambientes/index'


const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator
            screenOptions={{
                headerTitle: '',
                headerTransparent: true,
                headerTintColor: '#FFF',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen
            name='SingIn'
            component={SingIn}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name='SingUp'
            component={SingUp}
            options={{headerShown: true}}
            />
            <Stack.Screen
            name='Ambientes'
            component={Ambientes}
            options={{headerShown: false}}
            />

        </Stack.Navigator>
    )
}