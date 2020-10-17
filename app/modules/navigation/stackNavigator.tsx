import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainView } from '../../view/mainView';
import { WelcomeView } from '../../view/welcomerView';
import { CreateNoteView } from '../../view/creatNote';

const Stack = createStackNavigator();

export const StackNavigator: FC = () => {
    return (
        <Stack.Navigator initialRouteName="WelcomeView" >
            <Stack.Screen name="WelcomeView" component={WelcomeView} options={{ headerShown: false }} />
            <Stack.Screen name="MainView" component={MainView} options={{ headerShown: false }} />
            <Stack.Screen name="CreateNote" component={CreateNoteView} options={{ headerShown: false }} />
        </Stack.Navigator >
    );
};