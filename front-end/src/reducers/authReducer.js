export default (state = {}, action) => {
    if (action.type === 'login') {
        console.log('We are logging in')
    } else if (action.type === 'logout') {
        return {};
    }
    return state;
}