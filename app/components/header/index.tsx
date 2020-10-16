import React, { FC, useMemo } from 'react';
import { View, Text, Pressable } from 'react-native';
import { SettingsIcon } from '../../assets/svg/settingsIcon';
import { getStyle } from './styles';

interface Props {
    title: string;
};

export const HeaderComponent: FC<Props> = ({ title }) => {
    const styles = useMemo(() => getStyle(), []);

    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>{title}</Text>
            <Pressable style={({pressed}) => [{opacity: pressed ? 0.5 : 1}]}>
                <SettingsIcon />
            </Pressable>
        </View>
    )
};
