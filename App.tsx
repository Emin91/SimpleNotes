import React, { FC } from 'react';
import { KeyboardAvoidingView, StatusBar } from 'react-native';
import { colors } from './app/assets/constants/colors';
import { MainView } from './app/view/mainView';
import { WelcomeView } from './app/view/welcomerView';

interface Props {
    navigation: any;
    route: any;
};

const App: FC<Props> = ({ }) => {
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={"padding"}>
            <StatusBar backgroundColor={colors.barColor}/>
            <MainView />
          {/* <WelcomeView /> */}
        </KeyboardAvoidingView>
    )
};

export default App