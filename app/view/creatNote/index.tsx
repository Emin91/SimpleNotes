import React, { FC, useMemo, useState } from 'react'
import { View, Text, StatusBar } from 'react-native'
import { colors } from '../../assets/constants/colors';
import { language } from '../../assets/language';
import { DescriptionInputComponent } from '../../components/descriptionInput';
import { HeaderComponent } from '../../components/header';
import { MainButtonComponent } from '../../components/mainButton';
import { TitleInputComponent } from '../../components/titleInputHeader';
import { getStyle } from './styles';

interface Props {
    navigation: any;
};

export const CreateNoteView: FC<Props> = ({ navigation }) => {
    const styles = useMemo(() => getStyle(), []);
    const [isInputEditable, setIsInputEditable] = useState(true)
    const { title, save, createNote } = language;

    const onSavePress = () => {
        navigation.navigate('MainView')
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.mainPink}/>
            <HeaderComponent title={createNote} />
            <TitleInputComponent hint={title} />
            <DescriptionInputComponent />
            <MainButtonComponent title={save} onClick={onSavePress} />
        </View>    
        )
};
