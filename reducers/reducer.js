const initialUser = { authorised: false, username: null }

export default function reducer(state = initialUser, action) {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                authorised: true,
                token: action.payload,
            }
        case "LOGIN_FAILURE":
            return {
                ...state,
                authorised: false,
            }
        default:
            return state;

    }

}