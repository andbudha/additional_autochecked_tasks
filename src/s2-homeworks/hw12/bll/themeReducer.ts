const initState = {
    themeId: 1,
}
export type ThemeStateType = typeof initState;
type ActionType = changeThemeIdType;
export const themeReducer = (state: ThemeStateType = initState, action: ActionType): ThemeStateType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID": {
            return { ...state, themeId: action.id };
        }
        default: {
            return state
        }
    }
}

export type changeThemeIdType = ReturnType<typeof changeThemeId>
export const changeThemeId = (id: number) => {
    return { type: 'SET_THEME_ID', id } as const
} // fix any
