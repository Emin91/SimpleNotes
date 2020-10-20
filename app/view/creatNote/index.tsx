import React, { FC, useMemo, useRef, useState } from 'react'
import { View, StatusBar } from 'react-native'
import DropdownAlert from 'react-native-dropdownalert';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { colors } from '../../assets/constants/colors';
import { language } from '../../assets/language';
import { DescriptionInputComponent } from '../../components/descriptionInput';
import { HeaderComponent } from '../../components/header';
import { MainButtonComponent } from '../../components/mainButton';
import { TitleInputComponent } from '../../components/titleInputHeader';
import { selectId } from '../../modules/redux/notes/selectors';
import { startSaga } from '../../modules/saga/notesData/actions';
import { getStyle } from './styles';

interface Props {
    navigation: any;
};

export const CreateNoteView: FC<Props> = ({ navigation }) => {
    const styles = useMemo(() => getStyle(), []);
    const { title, titleEmpty, fillField, save, createNote } = language;
    const idFromState: number = useSelector(selectId, shallowEqual);
    const [titleValue, setTitleValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');
    const [isFavorite, setIsFavorite] = useState(false);
    const dispatch = useDispatch();
    let dropDownAlertRef = useRef();
    
    const showAlert = (type: string, title: string, message: string) => {
        dropDownAlertRef.alertWithType(type, title, message);
    };

    const onSave = () => {
        const payload = {titleI: titleValue, descriptionI: descriptionValue, isFavI: isFavorite, idI: idFromState + 1}
        if(!titleValue.trim() && !descriptionValue.trim()) {
            navigation.navigate('MainView');
        } else if(titleValue.trim() && !descriptionValue.trim()) {
            dispatch(startSaga(payload))
            navigation.navigate('MainView');
        } else if(descriptionValue && titleValue) {
            console.log('filled');
            dispatch(startSaga(payload))
            navigation.navigate('MainView');
        } else if(descriptionValue) {
            showAlert('info', titleEmpty, fillField);

        };
    };

    return (
        <View style={styles.container}>
            <DropdownAlert 
                showCancel
                closeInterval={1000} 
                infoColor={'#745896'} 
                ref={ref => dropDownAlertRef = ref} />
            <StatusBar backgroundColor={colors.mainPink}/>
            <HeaderComponent title={createNote} />
            <TitleInputComponent 
                hint={title} 
                value={titleValue} 
                setValue={setTitleValue}/>
            <DescriptionInputComponent 
                value={descriptionValue} 
                isFavorite={isFavorite}
                setValue={setDescriptionValue}
                setFavorite={setIsFavorite} />
            <MainButtonComponent title={save} onClick={onSave} />
        </View>    
        )
};
