export interface notesI {
    id: number;
    date: string;
    title: string;
    description: string;
    isFavorite: boolean;
    notesList: Array<any>;
};

const initState = {
    id: 0,
    date: '',
    title: '',
    description: '',
    isFavorite: false,
    notesList: [],  
};

export const notesData = (state: notesI = initState, action: { type: string, payload: any }) => {
    const { type, payload } = action;
    switch (type) {
        case 'SET_ID': 
            return { ...state, id: payload};       
        case 'SET_DATE': 
            return { ...state, date: payload};       
        case 'SET_TITLE': 
            return { ...state, title: payload};       
        case 'SET_DESCRIPTION': 
            return { ...state, description: payload};       
        case 'SET_IS_FAVORITE': 
            return { ...state, isFavorite: payload};     
        case 'NOTE_ITEM_EDIT': 
            return { 
                ...state, 
                notesList: state.notesList.map((item) => item.id === payload.id ? {...item, ...payload } : item),
            };     
        case 'ADD_TO_FAVORITES': 
            return { 
                ...state, 
                notesList: state.notesList.map((item) => item.id === payload ? {...item, isFavorite: !item.isFavorite} : item),
            };     
        case 'DELETE_NOTES_ITEM': 
            return { 
                ...state, 
                notesList: state.notesList.filter((item) => item.id !== payload),
            };     
        case 'SET_ALL_NOTES':
            const notesList = [...state.notesList, payload]
            return {
                    ...state,
                    notesList,
                };  
        default:
            return state;
    };
};





