import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Login, Register } from '../pages'

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <Auth.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#312e38' }
        }}>
            
        <Auth.Screen name='Login' component={Login} />
        <Auth.Screen name='Register' component={Register} />
    </Auth.Navigator>
);


export { AuthRoutes }