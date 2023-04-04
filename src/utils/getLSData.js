export const getLocalStorageData = (LSname, dispatch, action) => {
    const data = localStorage.getItem(LSname);
    const statusLogin = data ? JSON.parse(data) : false;
    dispatch(action(statusLogin));
}