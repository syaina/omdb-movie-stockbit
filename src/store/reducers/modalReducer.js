import { ActionTypes } from '../type'

const initialState = {
    modal: {
        isModal: false,
        message: ""
    }
}

export const modalReducer = (state = initialState, {type, payload}) => {
    switch(type) {

        case ActionTypes.SET_MODAL:
            return {
                ...state,
                modal: payload
            }
        default:
             
            return state;
    }

}