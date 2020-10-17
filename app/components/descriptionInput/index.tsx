import React, { FC, useMemo, useState } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import { colors } from '../../assets/constants/colors';
import { FavIcon } from '../../assets/svg/favIcon';
import { getStyle } from './styles';

interface Props {};

export const DescriptionInputComponent: FC<Props> = () => {
    const styles = useMemo(() => getStyle(), []);
    const [isFavorite, setIsFavorite] = useState(false)

    const onFavButtonPress = () => {
        setIsFavorite(prevState => !prevState)
    };

    return (
        <View style={styles.container}>
            <View style={styles.favWrapper}>
                {isFavorite ? <View style={styles.favLine} /> : null}
            </View>
            <View style={styles.inputWrapper}>
                <View style={{flex: 0.9}}>
                    <TextInput 
                        multiline
                        style={styles.input} 
                        textAlignVertical={'top'} 
                        placeholder={'Your text...' }
                        placeholderTextColor={colors.light}/>
                </View>
                <Pressable style={({pressed}) => [{...styles.favButton}, {opacity: pressed ? 0.5 : 1}]} onPress={onFavButtonPress}>
                    <FavIcon width={46} height={46} color={isFavorite ? '' : colors.lightTwo} />
                </Pressable>
            </View>
        </View>
    )
};
