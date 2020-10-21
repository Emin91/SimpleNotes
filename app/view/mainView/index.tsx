import React, { FC, memo, useMemo, useState } from 'react';
import { View, StatusBar } from 'react-native';
import { shallowEqual, useSelector } from 'react-redux';
import { colors } from '../../assets/constants/colors';
import { language } from '../../assets/language';
import { HeaderComponent } from '../../components/header';
import { MainButtonComponent } from '../../components/mainButton';
import { NoNotesComponent } from '../../components/noNotes';
import  NotesListComponent  from '../../components/notesList';
import { SearchBarComponent } from '../../components/searchBar';
import { TotalNotesComponent } from '../../components/totalNotes';
import { selectNotesList } from '../../modules/redux/notes/selectors';
import { getStyle } from './styles';

interface Props { 
    navigation: any;
};

const MainView: FC<Props> = ({ navigation }) => {
    const styles = useMemo(() => getStyle(), []);
    const [isInputEditable, setIsInputEditable] = useState(true);
    const { myNotes, search, cannotEdit, addNote } = language;
    const content: Array<Object> = useSelector(selectNotesList, shallowEqual);
    
    const onAddPress = () => {
        navigation.navigate('CreateNote');
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.mainPink}/>
            <HeaderComponent title={myNotes} />
            <SearchBarComponent hint={isInputEditable ? search : cannotEdit} isEditable={isInputEditable} />
            <TotalNotesComponent count={content.length} />
            {content.length 
                ? <NotesListComponent/>
                : <NoNotesComponent />}
            <MainButtonComponent title={addNote} onClick={onAddPress} />
        </View>    
        )
};

export default memo(MainView);