import { put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { setNotesId, setNotesList, sortedList } from '../../redux/notes/actions';
import { selectNotesList } from '../../redux/notes/selectors';

export function* workerNotesData(action:{payload:{titleI:string, descriptionI:string, isFavI:boolean, idI:number},type:string}) {
  const {titleI, descriptionI, isFavI, idI} = action.payload;
  yield put(setNotesId(idI));
  yield put(setNotesList({title: titleI,description: descriptionI,isFavorite: isFavI,id: idI + 1}),
  );
};

export function* watchNotesData() {
  yield takeLatest('CALL_MAIN_SAGA', workerNotesData);
};

export function* watcherSortNotes(): Generator {
  yield takeEvery('SORT_NOTES_LIST', workerSortNotes);
};

export function* workerSortNotes(): Generator {
  const content = (yield select(selectNotesList)) as Array<{}>;
  const data = [...content.sort((a, b) => b.isFavorite - a.isFavorite)];
  yield put(sortedList(data));
};
