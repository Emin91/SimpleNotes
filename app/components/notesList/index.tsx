import React, { FC, useMemo } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { language } from '../../assets/language';
import { NoNotesIcon } from '../../assets/svg/noNotes';
import { NotesItemComponent } from '../notesItem';
import { getStyle } from './styles';

export const NotesListComponent: FC = () => {
    const styles = useMemo(() => getStyle(), []);
    const { addYourFirstNote } = language;

    return (
        <View style={styles.container}>
            <ScrollView style={{flex: 1, width: '100%', paddingHorizontal: 10}}>
                <NotesItemComponent />
                <NotesItemComponent />
                <NotesItemComponent />
                <NotesItemComponent />
                <NotesItemComponent />
                <NotesItemComponent />
                <NotesItemComponent />
                <NotesItemComponent />
                <NotesItemComponent />
                <NotesItemComponent />
                <NotesItemComponent />
                <NotesItemComponent />
                <NotesItemComponent />
                <NotesItemComponent />
                <NotesItemComponent />
            </ScrollView>
        </View>
    )
};
