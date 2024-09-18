import { ADD_WORD, REMOVE_WORD, TRANSLATE_WORD } from './dictionaryTypes';

export const addWord = (word) => {
    return {
        type: ADD_WORD,
        payload: word,
    };
};

export const removeWord = (id) => {
    return {
        type: REMOVE_WORD,
        payload: { id },
    };
};

export const translateWord = (word) => {
    return {
        type: TRANSLATE_WORD,
        payload: word,
    };
};