import React, { FC, useMemo } from 'react';
import { View, ScrollView } from 'react-native';
import { shallowEqual, useSelector } from 'react-redux';
import { selectNotesList } from '../../modules/redux/notes/selectors';
import { NotesItemComponent } from '../notesItem';
import { getStyle } from './styles';

export const NotesListComponent: FC = () => {
    const styles = useMemo(() => getStyle(), []);
    const notesList: Array<Object> = useSelector(selectNotesList, shallowEqual);

    console.log('notesList', notesList)
    return (
        <View style={styles.container}>
            <ScrollView style={{flex: 1, width: '100%', paddingHorizontal: 10}}>
                {notesList?.map((item) => <NotesItemComponent {...item} notesList={notesList} key={item.id}/>)}
            </ScrollView>
        </View>
    )
};
