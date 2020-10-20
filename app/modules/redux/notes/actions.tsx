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