import React, { FC, useMemo } from 'react';
import { View, Text, Pressable } from 'react-native';
import { DeleteIcon } from '../../assets/svg/deleteIcon';
import { EditIcon } from '../../assets/svg/editIcon';
import { FavIcon } from '../../assets/svg/favIcon';
import { getStyle } from './styles';

const date = '11 mart 2020';
const title = 'Need to pay for the internet pay for the internet';
const description = 'Lorem Ipsum is simply dummy text of the printing and type setting industry';

export const NotesItemComponent: FC = () => {
    const styles = useMemo(() => getStyle(), []);

    return (
        <View style={styles.container}>
            <View style={styles.favWrapper}>
                {true ? <View style={styles.favLine}/> : null}
            </View>
            <View style={{flex: 0.97}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.titleWrapper}>
                        <Text style={styles.titleText} numberOfLines={1}>{title}</Text>
                        <Text style={styles.dateText}>{date}</Text>
                    </View>
                    <View style={styles.iconsWrapper}>
                        <Pressable style={({pressed}) => [{opacity: pressed ? 0.5 : 1}]}>
                            <EditIcon />
                        </Pressable>
                        <Pressable style={({pressed}) => [{opacity: pressed ? 0.5 : 1, paddingHorizontal: 3}]}>
                            <FavIcon />
                        </Pressable>
                        <Pressable style={({pressed}) => [{opacity: pressed ? 0.5 : 1}]}>
                            <DeleteIcon />
                        </Pressable>                    
                    </View>
                </View>
                <View style={styles.descriptionWrapper}>
                    <Text style={styles.descriptionText} numberOfLines={4}>{description}</Text>
                </View>
            </View>
        </View>
    )
};
