import { all, spawn } from 'redux-saga/effects'
import { watchNotesData } from './notesData';

export default function* rootSaga() {
    try {
        yield all([
            spawn(watchNotesData),
        ]);
    } catch (error) {
        console.warn('rootSaga: ', error);
    }
}