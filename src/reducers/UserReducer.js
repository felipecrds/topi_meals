const initialState = {
    token: '',
    name: 'Teste'
};

export default (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'SET_TOKEN':
            return { ...state, token: action.payload.token };
        case 'SET_NAME':
            return { ...state, name: action.payload.name };
    }

    return state;
}
