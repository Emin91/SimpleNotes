export interface notesI {
    title: string;
};

const initState = {
    title: '',
};

export const notesData = (state: notesI = initState, action: { type: string, payload: any }) => {
    const { type, payload } = action;
    switch (type) {
        case 'SET_TITLE':
            return {
                ...state,
                ...payload
            };
        default:
            return state;
    };
};