import React, { FC, useMemo } from 'react';
import { View, TextInput } from 'react-native';
import { colors } from '../../assets/constants/colors';
import { getStyle } from './styles';

interface Props {
    hint: string;
};

export const TitleInputComponent: FC<Props> = ({ hint }) => {
    const styles = useMemo(() => getStyle(), []);

    return (
        <View style={styles.container}>
            <View style={styles.inputWrapper}>
                <TextInput 
                    numberOfLines={1} 
                    placeholder={hint} 
                    style={styles.input}
                    placeholderTextColor={colors.lightTwo} />
            </View>
        </View>
    )
};
