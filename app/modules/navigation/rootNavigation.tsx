import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { StackNavigator } from './stackNavigator';

export const RootNavigation: FC = () => {
//   const navigationRef: any = useRef();

  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer >
    </View>
  );
};
