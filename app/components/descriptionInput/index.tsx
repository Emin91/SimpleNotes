import React, { FC, useMemo } from 'react';
import { View, Pressable, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { colors } from '../../assets/constants/colors';
import { FavIcon } from '../../assets/svg/favIcon';
import { getStyle } from './styles';

interface Props {
    value: string;
    setValue: any;
    isFavorite: boolean;
    setFavorite: any;
};

export const DescriptionInputComponent: FC<Props> = ({ value, setValue, isFavorite, setFavorite }) => {
    const styles = useMemo(() => getStyle(), []);

    const onFavPress = () => {
        setFavorite(!isFavorite);
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
                        value={value}
                        onChangeText={setValue}
                        textAlignVertical={'top'} 
                        placeholder={'Your text...' }
                        placeholderTextColor={colors.light}/>
                </View>
                <Pressable style={({pressed}) => [{...styles.favButton}, {opacity: pressed ? 0.5 : 1}]} onPress={onFavPress}>
                    <FavIcon width={46} height={46} color={isFavorite ? '' : colors.lightTwo} />
                </Pressable>
            </View>
        </View>
    )
};
