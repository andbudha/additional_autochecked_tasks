import {initialState} from "../../hw08/bll/homeWorkReducer";

const initState = {
    isLoading: false,
}

type ActionType = LoadingActionType;
export const loadingReducer = (state = initState, action: ActionType): {} => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case "CHANGE_LOADING":
            return {...state, loading: action.isLoading }
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
