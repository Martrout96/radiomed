import {ADD_SYMPTOM} from 'actions';

export const symptoms  = (state = [], action) => {
    switch (action.type){
        case ADD_SYMPTOM:
            return state.push(action.payload)
        default :
            return state
    }
}