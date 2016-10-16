export const ADD = 'ADD_LIST';
export const FETCH = 'FETCH_LIST';

export function add (item) {
    // you can dispatch action
    return(dispatch, getState)=>{
        dispatch({
            "type":ADD,
            item
        });
    }
};

export function fetch(){
    return (dispatch, getState) => {
        dispatch({
            type: FETCH
        });
    };
}