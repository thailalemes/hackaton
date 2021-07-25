import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Welcome from './pages/welcome';
import Login from './pages/login';
import Registry from './pages/registry';
import Choose from './pages/choose';
import initTrip from './pages/initTrip';
import initTax from './pages/initTax';
import addTrip from './pages/addTrip';

export default function Routes(){
    return(
<NavigationContainer>

    <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Welcome" component={Welcome} />
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Registry" component={Registry} />
        <AppStack.Screen name="Choose" component={Choose} />
        <AppStack.Screen name="initTrip" component={initTrip} />
        <AppStack.Screen name="initTax" component={initTax} />
        <AppStack.Screen name="addTrip" component={addTrip} />
    </AppStack.Navigator>

</NavigationContainer>
    );
}