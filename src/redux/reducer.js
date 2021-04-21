const initialState = {
    favorites: [],
}

const reducer = (state = initialState, action) => {
    if (action.type === 'SET_FAVORITES') {
        return {
            ...state,
            favorites: [
               ...state.favorites,
               action.payload
            ]
        }
    }

    return state;
}

export default reducer;