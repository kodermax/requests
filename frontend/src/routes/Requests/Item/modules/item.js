// ------------------------------------
// Constants
// ------------------------------------
export const FETCH_ITEM_REQUEST = 'FETCH_ITEM_REQUEST';
export const FETCH_ITEM_SUCCESS = 'FETCH_ITEM_SUCCESS';
export const FETCH_ITEM_FAILURE = 'FETCH_ITEM_FAILURE';

// ------------------------------------
// Actions
// ------------------------------------
function requestItem () {
  return {
    didInvalidate: false,
    type: FETCH_ITEM_REQUEST,
    isFetching: true
  };
}
function receiveItem (result) {
  return {
    data: result,
    isFetching: false,
    didInvalidate: false,
    type: FETCH_ITEM_SUCCESS
  };
}
function invalidItem (error) {
  return {
    data: error,
    isFetching: false,
    didInvalidate: true,
    type: FETCH_ITEM_FAILURE
  };
}
export const fetchItem = () => {
  return (dispatch, getState) => {
    dispatch(requestItem());
    let token = localStorage.getItem('userToken') || null;
    return fetch('http://dev.pharm.local:3001/api/requests', {
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(json => dispatch(receiveItem(json)))
      .catch(error => dispatch(invalidItem(error)));
  };
};
export const actions = {
  fetchItem
};
// ------------------------------------
// Action Handlers - Возвращает новое состояние
// ------------------------------------
const ACTION_HANDLERS = {
  [FETCH_ITEM_SUCCESS]: (state, action) => {
    return {
      isFetching: false,
      didInvalidate: false,
      item: action.data
    };
  },
  [FETCH_ITEM_FAILURE]: (stat, action) => action.data
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  isFetching: false,
  data: {}
};
export default function itemReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}

