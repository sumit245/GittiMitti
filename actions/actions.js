export const loginUser = (userId, password) => async (dispatch) => {
    if (userId === 'sumit' && password === '1234') {
        await dispatch({ type: "LOGIN_SUCCESS", payload: 'Mytoken124' })
    } else {
        await dispatch({ type: "LOGIN_FAILURE" })
    }
}

