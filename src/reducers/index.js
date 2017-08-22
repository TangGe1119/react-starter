const initialState = {
    isAuthenticated: false
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_STATUS':
            return {...state, isAuthenticated: action.status}
        default:
            return state
    }
}

export default rootReducer