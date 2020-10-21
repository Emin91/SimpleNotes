import React, {FC, memo, useMemo, useEffect, useState} from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { sortList } from '../../modules/redux/notes/actions';
import { selectNotesList } from '../../modules/redux/notes/selectors';
import { NotesItemComponent } from '../notesItem';
import { getStyle } from './styles';

interface Props {};

const NotesListComponent: FC<Props> = () => {
  const styles = useMemo(() => getStyle(), []);
  const content = useSelector(selectNotesList, shallowEqual);
  const [render, setRender] = useState<Array<Element>>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    let data = content?.map((item: any) => (
      <NotesItemComponent {...item} notesList={content} key={item.id} />
    ));
    setRender(data);
  }, [content]);
  
  const onSortPress = () => {
    let newData = content.sort((a, b) => b.isFavorite - a.isFavorite).map((item: any) => (
        <NotesItemComponent {...item} notesList={content} key={item.id} />
      ));
    setRender(newData);
    dispatch(sortList());
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onSortPress}>
        <Text>Sort</Text>
      </TouchableOpacity>
      <ScrollView style={{flex: 1, width: '100%', paddingHorizontal: 10}}>
        {render}
      </ScrollView>
    </View>
  );
};

export default memo(NotesListComponent);
