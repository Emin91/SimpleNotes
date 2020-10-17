import React, { FC, useMemo } from 'react';
import { View, Text } from 'react-native';
import { language } from '../../assets/language';
import { getStyle } from './styles';

interface Props {
    count: number;
};

export const TotalNotesComponent: FC<Props> = ({ count }) => {
    const styles = useMemo(() => getStyle(), []);
    const { totalNotes } = language;

    return (
        <View style={styles.totalNotesWrapper}>
            <Text style={styles.totalText}>{totalNotes} {count}</Text>
        </View>
    )
};
