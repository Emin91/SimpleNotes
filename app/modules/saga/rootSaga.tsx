import { all, spawn } from 'redux-saga/effects'
import { watcherSortNotes, watchNotesData } from './notesData';

export default function* rootSaga() {
    try {
        yield all([
            spawn(watchNotesData),
            spawn(watcherSortNotes),
        ]);
    } catch (error) {
        console.warn('rootSaga: ', error);
    };
};