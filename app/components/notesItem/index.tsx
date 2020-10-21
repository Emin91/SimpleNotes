import { useNavigation } from '@react-navigation/native';
import React, { FC, useMemo } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { colors } from '../../assets/constants/colors';
import { DeleteIcon } from '../../assets/svg/deleteIcon';
import { EditIcon } from '../../assets/svg/editIcon';
import { FavIcon } from '../../assets/svg/favIcon';
import { addToFavorites, deleteNotesList } from '../../modules/redux/notes/actions';
import { getStyle } from './styles';

interface Props { 
    title: string; 
    description: string; 
    isFavorite: boolean;
    id: number;
};

const date = '11 mart 2020';

export const NotesItemComponent: FC<Props> = ({ title, description, isFavorite, id }) => {
    const styles = useMemo(() => getStyle(), []);
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const onEditPress = () => {
        navigation.navigate('CreateNote', {id, isEdit: true});
    };

    const onFavoritePress = () => {
        dispatch(addToFavorites(id));
    };

    const onDeletePress = () => {
        dispatch(deleteNotesList(id));
    };

    return (
        <View style={styles.container}>
            <View style={styles.favWrapper}>
                {isFavorite ? <View style={styles.favLine}/> : null}
            </View>
            <View style={{flex: 0.97}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.titleWrapper}>
                        <Text style={styles.titleText} numberOfLines={1}>{title}</Text>
                        <Text style={styles.dateText}>{date} {id}</Text>
                    </View>
                    <View style={styles.iconsWrapper}>
                        <Pressable onPress={onEditPress} style={({pressed}) => [{opacity: pressed ? 0.5 : 1}]}>
                            <EditIcon />
                        </Pressable>
                        <Pressable onPress={onFavoritePress} style={({pressed}) => [{opacity: pressed ? 0.5 : 1, paddingHorizontal: 3}]}>
                            <FavIcon color={isFavorite ? '' : colors.light}/>
                        </Pressable>
                        <Pressable onPress={onDeletePress} style={({pressed}) => [{opacity: pressed ? 0.5 : 1}]}>
                            <DeleteIcon />
                        </Pressable>                    
                    </View>
                </View>
                <Pressable style={({pressed})=>[{...styles.descriptionWrapper}, {opacity: pressed ? 0.7 : 1}]}>
                    <Text style={styles.descriptionText} numberOfLines={4}>{description}</Text>
                </Pressable>
            </View>
        </View>
    )
};
