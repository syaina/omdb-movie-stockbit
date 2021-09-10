import { ActionTypes } from '../type'

export const setModal = (modal) => {
    return {
        type: ActionTypes.SET_MODAL,
        payload: modal
    }
}