import {UserType} from '../HW8'

export type initialState = UserType[]

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: initialState, action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name

            return state // need to fix
        }
        case 'check': {

            return state.filter(user=>user.age >= action.payload) // need to fix
        }
        default:
            return state
    }
}
