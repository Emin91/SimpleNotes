import React, { FC, useMemo } from 'react';
import { View, Text, Pressable } from 'react-native';
import { getStyle } from './styles';

interface Props {
    title: string;
    onClick: () => void;
};

export const MainButtonComponent: FC<Props> = ({ title, onClick }) => {
    const styles = useMemo(() => getStyle(), []);

    return (
        <View style={styles.container}>
            <Pressable style={({pressed}) => [{...styles.buttonWrapper}, {opacity: pressed ? 0.7 : 1}]} onPress={onClick}>
                <Text style={styles.buttonTitle}>{title}</Text>
            </Pressable>
        </View>
    )
};
