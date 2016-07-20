import url from '../utils/url';

// ------------------------------------
// Constants
// ------------------------------------
export const FETCH_ITEMS_REQUEST = 'FETCH_ITEMS_REQUEST';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE';

// ------------------------------------
// Actions
// ------------------------------------
function requestItems () {
  return {
    didInvalidate: false,
    type: FETCH_ITEMS_REQUEST,
    isFetching: true
  };
}
function receiveItems (result) {
  return {
    data: result,
    isFetching: false,
    didInvalidate: false,
    type: FETCH_ITEMS_SUCCESS
  };
}
function invalidItems (error) {
  console.log(error);
  return {
    data: error,
    isFetching: false,
    didInvalidate: true,
    type: FETCH_ITEMS_FAILURE
  };
}

export const fetchItems = (filter) => {
  return (dispatch, getState) => {
    dispatch(requestItems());
    let token = localStorage.getItem('userToken') || null;
    return fetch('http://dev.pharm.local:3001/api/requests?' + url.encodeQueryData(filter), {
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(json => dispatch(receiveItems(json)))
      .catch(error => dispatch(invalidItems(error)));
  };
};
export const actions = {
  fetchItems
};
// ------------------------------------
// Action Handlers - Возвращает новое состояние
// ------------------------------------
const ACTION_HANDLERS = {
  [FETCH_ITEMS_SUCCESS]: (state, action) => {
    return {
      isFetching: false,
      didInvalidate: false,
      items: action.data
    };
  },
  [FETCH_ITEMS_FAILURE]: (stat, action) => action.data
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  isFetching: false,
  data: {}
};
export default function listReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}

