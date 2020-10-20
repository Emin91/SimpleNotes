import React, { FC, useMemo } from 'react';
import { View, Text, Pressable } from 'react-native';
import { colors } from '../../assets/constants/colors';
import { DeleteIcon } from '../../assets/svg/deleteIcon';
import { EditIcon } from '../../assets/svg/editIcon';
import { FavIcon } from '../../assets/svg/favIcon';
import { getStyle } from './styles';

const date = '11 mart 2020';
interface Props { 
    notesList: any;
    title: string; 
    description: string; 
    isFavorite: boolean;
    id: number;
};

export const NotesItemComponent: FC<Props> = ({ title, description, isFavorite, id, notesList }) => {
    const styles = useMemo(() => getStyle(), []);
    
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
                        <Pressable style={({pressed}) => [{opacity: pressed ? 0.5 : 1}]}>
                            <EditIcon />
                        </Pressable>
                        <Pressable style={({pressed}) => [{opacity: pressed ? 0.5 : 1, paddingHorizontal: 3}]}>
                            <FavIcon color={isFavorite ? '' : colors.light}/>
                        </Pressable>
                        <Pressable onPress={()=>{}} style={({pressed}) => [{opacity: pressed ? 0.5 : 1}]}>
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
