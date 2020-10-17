import React, { FC } from 'react';
import { KeyboardAvoidingView, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { colors } from './app/assets/constants/colors';
import { RootNavigation } from './app/modules/navigation/rootNavigation';
import { store } from './app/modules/redux/store';

const App: FC = () => {
    return (
        <Provider store={store}>
            <StatusBar backgroundColor={colors.barColor}/>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={undefined}>
                <RootNavigation />
            </KeyboardAvoidingView>
        </Provider>
    )
};

export default App;