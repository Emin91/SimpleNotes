export const selectId = (state: any) => {
    return state.notesData.id;
};
export const selectDate = (state: any) => {
    return state.notesData.date;
};
export const selectTitle = (state: any) => {
    return state.notesData.title;
};
export const selectDescription = (state: any) => {
    return state.notesData.description;
};
export const selectIsFavorite = (state: any) => {
    return state.notesData.isFavorite;
};
export const selectNotesList = (state: any) => {
    return state.notesData.notesList;
};