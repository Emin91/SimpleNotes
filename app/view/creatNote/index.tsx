import React, { useMemo, useState } from 'react'
import { View, Text } from 'react-native'
import { language } from '../../assets/language';
import { DescriptionInputComponent } from '../../components/descriptionInput';
import { HeaderComponent } from '../../components/header';
import { MainButtonComponent } from '../../components/mainButton';
import { TitleInputComponent } from '../../components/titleInputHeader';
import { getStyle } from './styles';

export const CreateNoteView = () => {
    const styles = useMemo(() => getStyle(), []);
    const [isInputEditable, setIsInputEditable] = useState(true)
    const { title, save, createNote } = language;
    
    return (
        <View style={styles.container}>
            <HeaderComponent title={createNote} />
            <TitleInputComponent hint={title} />
            <DescriptionInputComponent />
            <MainButtonComponent title={save} onClick={()=>{}} />
        </View>    
        )
};
