import { put, select, takeLatest } from 'redux-saga/effects';
import { setNotesDescription, setNotesId, setNotesIsFavorite, setNotesList, setNotesTitle } from '../../redux/notes/actions';
import { selectDescription, selectId, selectIsFavorite, selectTitle } from '../../redux/notes/selectors';

export function* workerNotesData({ payload }) {
    const { titleI, descriptionI, isFavI, idI } = payload;
    yield put(setNotesTitle(titleI));
    yield put(setNotesDescription(descriptionI));
    yield put(setNotesIsFavorite(isFavI));
    yield put(setNotesId(idI));
    const title = yield select(selectTitle);
    const description = yield select(selectDescription);
    const isFavorite = yield select(selectIsFavorite);
    const id = yield select(selectId);
    yield put(setNotesList({title, description, isFavorite, id}))
};

export function* watchNotesData() {
    yield takeLatest('CALL_MAIN_SAGA', workerNotesData);
};