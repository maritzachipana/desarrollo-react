import { ADD_WORD, REMOVE_WORD, TRANSLATE_WORD } from './dictionaryTypes';

const initialState = {
    words: [],
    translatedWord: null,
    error: null,
};

const dictionaryReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_WORD:
            return {
                ...state,
                words: [...state.words, action.payload],
            };
        case REMOVE_WORD:
            return {
                ...state,
                words: state.words.filter(word => word.id !== action.payload.id),
            };
        case TRANSLATE_WORD:
            const word = state.words.find(
                w => w.spanish === action.payload || w.english === action.payload || w.portuguese === action.payload
            );
            return word
                ? { ...state, translatedWord: word, error: null }
                : { ...state, error: 'Palabra no encontrada', translatedWord: null };
        default:
            return state;
    }
};

export default dictionaryReducer;