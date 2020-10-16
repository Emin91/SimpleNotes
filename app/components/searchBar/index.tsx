import React, { FC, useMemo } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import { LockIcon } from '../../assets/svg/lockIcon';
import { SearchIcon } from '../../assets/svg/searchIcon';
import { getStyle } from './styles';

interface Props {
    hint: string;
    isEditable: boolean;
};

export const SearchBarComponent: FC<Props> = ({ hint, isEditable }) => {
    const styles = useMemo(() => getStyle(), []);

    return (
        <View style={styles.container}>
            <View style={styles.inputWrapper}>
                <View style={styles.icon}>
                    {isEditable ? <SearchIcon /> : <LockIcon />}
                </View>
                <TextInput placeholder={hint} editable={isEditable} underlineColorAndroid='transparent' placeholderTextColor={'#c1c1c1'} numberOfLines={1} style={styles.input}/>
            </View>
        </View>
    )
};
