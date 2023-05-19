import {initialState} from "../../hw08/bll/homeWorkReducer";



const initState = {
    isLoading: false
}

type ActionType = loadingACType;
export const loadingReducer = (state = initState, action: ActionType): typeof initState=> { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case "CHANGE_LOADING":
            return {...state, isLoading: action.payload.isLoading}
        default:
            return state
    }
}


type loadingACType = ReturnType<typeof loadingAC>

export const loadingAC = (isLoading: boolean)=> {
    return  {
        type: "CHANGE_LOADING",
        payload: { isLoading }
    }as const
}
