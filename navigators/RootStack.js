import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './../screen/Login'
import Signup from './../screen/Signup';
import Welcome from './../screen/Welcome';
import { Colors } from '../components/styles';
const { primary, tertiary } = Colors; 

const Stack = createNativeStackNavigator();

const RootStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'transparent'
                    },
                    headerTintColor: tertiary,
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeftContainerStyle: {
                        paddingLeft: 20
                    }
                }}
                initialRouteName="Login"
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} /> 
                <Stack.Screen name="Welcome" component={Welcome} /> 
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack; 