import info from "./data.json";

// Actions
export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";

// Reducer
const initialState = {
    loading: false,
    cities: [],
};

export default function data(state = initialState, action = {}) {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return Object.assign({}, state, {
                loading: true
            });
        case FETCH_DATA_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                cities: action.json[0].cities
            });
    }
    return state;
}

// Action creators

export function fetchData() {
    return dispatch => {
        dispatch(fetchDataRequest());

        // assume that we fetch data from the server
      dispatch(fetchDataSuccess(info));
    };
}

function fetchDataRequest() {
    return {
        type: FETCH_DATA_REQUEST
    };
}

function fetchDataSuccess(json) {
    return {
        type: FETCH_DATA_SUCCESS,
        json
    };
}