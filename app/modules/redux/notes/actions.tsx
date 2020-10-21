export const setNotesId = (payload: number) => {
    return { type: 'SET_ID', payload };
};

export const setNotesDate = (payload: Object) => {
    return { type: 'SET_DATE', payload };
};

export const setNotesTitle = (payload: string) => {
    return { type: 'SET_TITLE', payload };
};

export const setNotesDescription = (payload: string) => {
    return { type: 'SET_DESCRIPTION', payload };
};

export const setNotesIsFavorite = (payload: boolean) => {
    return { type: 'SET_IS_FAVORITE', payload };
};

export const setNotesList = (payload: object) => {
    return { type: 'SET_ALL_NOTES', payload };
};

export const deleteNotesList = (payload: number) => {
    return { type: 'DELETE_NOTES_ITEM', payload };
};

export const addToFavorites = (payload: number) => {
    return { type: 'ADD_TO_FAVORITES', payload };
};

export const noteEdit = (payload: object) => {
    return { type: 'NOTE_ITEM_EDIT', payload };
};

export const sortList = () => {
    return { type: 'SORT_NOTES_LIST' };
};

export const sortedList = (payload: any) => {
    return { type: 'SORTED_NOTES_LIST', payload };
};