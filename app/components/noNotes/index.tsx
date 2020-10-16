import React, { FC, useMemo } from 'react';
import { View, Text } from 'react-native';
import { language } from '../../assets/language';
import { NoNotesIcon } from '../../assets/svg/noNotes';
import { getStyle } from './styles';

export const NoNotesComponent: FC = () => {
    const styles = useMemo(() => getStyle(), []);
    const { addYourFirstNote } = language;

    return (
        <View style={styles.container}>
            <NoNotesIcon />
            <Text style={styles.text}>{addYourFirstNote}</Text>
        </View>
    )
};
