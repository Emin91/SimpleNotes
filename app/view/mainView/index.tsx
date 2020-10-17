import React, { useMemo, useState } from 'react'
import { View, Text } from 'react-native'
import { language } from '../../assets/language';
import { HeaderComponent } from '../../components/header';
import { MainButtonComponent } from '../../components/mainButton';
import { NoNotesComponent } from '../../components/noNotes';
import { NotesListComponent } from '../../components/notesList';
import { SearchBarComponent } from '../../components/searchBar';
import { TotalNotesComponent } from '../../components/totalNotes';
import { getStyle } from './styles';

export const MainView = () => {
    const styles = useMemo(() => getStyle(), []);
    const [isInputEditable, setIsInputEditable] = useState(true)
    const { myNotes, search, cannotEdit, totalNotes, addNote } = language;
    
    return (
        <View style={styles.container}>
            <HeaderComponent title={myNotes} />
            <SearchBarComponent hint={isInputEditable ? search : cannotEdit} isEditable={isInputEditable} />
            <TotalNotesComponent count={0} />
            {false 
                ? <NoNotesComponent />
                : <NotesListComponent />}
            <MainButtonComponent title={addNote} onClick={()=>{}} />
        </View>    
        )
};
