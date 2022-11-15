export const initState = {
    doingLogin: false,
    isLogin: false,
    username:'',
    roleId:'',
    role:'',
    token:'',
}
export const getInitState = () => {
    let loginState = localStorage.getItem('loginState');
    if (loginState) {
        return {...initState, ...JSON.parse(loginState)};
    }
    return initState;
}
export const clearLocalStorage = () => {
    localStorage.removeItem('loginState');
}

const loginReducer = (state, action) => {
    switch (action.type){
        case 'LOGIN':
            return {
                ...state,
                username: action.username,
                roleId: action.roleId,
                role: action.role,
                token: action.token,
                isLogin: true,
            };
        case 'LOGOUT':
            return {
                ...initState,
                doingLogin: true,
            };
        case 'DOING_LOGIN':
            return {
                ...state,
                doingLogin: true,
            }
        case 'LEFT_LOGIN':
            return {
                ...state,
                doingLogin: false,
            }
        default:
            return state;
    }
}
export default loginReducer;
