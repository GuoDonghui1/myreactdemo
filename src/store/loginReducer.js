export const initState = {
    isLogin: false,
    username:'',
    roleId:'',
    role:'',
    token:'',
}
const loginReducer = (state, action) => {
    switch (action.type){
        case 'LOGIN':
            return {
                ...state,
                isLogin: true,
            };
        case 'LOGOUT':
            return initState;
        default:
            return state;
    }
}
export default loginReducer;
