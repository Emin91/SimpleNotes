import React, { FC, useMemo } from 'react';
import { View, TextInput } from 'react-native';
import { colors } from '../../assets/constants/colors';
import { getStyle } from './styles';

interface Props {
    hint: string;
    value: string;
    setValue: any;
};

export const TitleInputComponent: FC<Props> = ({ hint, value, setValue }) => {
    const styles = useMemo(() => getStyle(), []);

    return (
        <View style={styles.container}>
            <View style={styles.inputWrapper}>
                <TextInput 
                    value={value}
                    numberOfLines={1} 
                    placeholder={hint} 
                    style={styles.input}
                    onChangeText={(text) => setValue(text)}
                    placeholderTextColor={colors.lightTwo} />
            </View>
        </View>
    )
};
