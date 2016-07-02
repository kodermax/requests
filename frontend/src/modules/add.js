export const ADD_ITEM_REQUEST = 'ADD_ITEM_REQUEST';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';

// ------------------------------------
// Actions
// ------------------------------------
function requestAddItem () {
  return {
    error: false,
    type: ADD_ITEM_REQUEST,
    isFetching: true
  };
}
function receiveAddItem (result) {
  return {
    data: result.id,
    isFetching: false,
    error: false,
    type: ADD_ITEM_SUCCESS
  };
}
function invalidAddItem (error) {
  return {
    isFetching: false,
    error: true,
    errorMessage: error,
    type: ADD_ITEM_FAILURE
  };
}

export const addItem = (data) => {
  return (dispatch, getState) => {
    dispatch(requestAddItem());
    let token = localStorage.getItem('userToken') || null;
    return fetch('http://dev.pharm.local:3001/api/requests',
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
      )
      .then(response => response.json())
      .then(json => dispatch(receiveAddItem(json)))
      .catch(error => dispatch(invalidAddItem(error)));
  };
};

// ------------------------------------
// Action Handlers - Возвращает новое состояние
// ------------------------------------
const ACTION_HANDLERS = {
  [ADD_ITEM_SUCCESS]: (state, action) => {
    return {
      isFetching: false,
      error: false,
      id: action.id
    };
  },
  [ADD_ITEM_FAILURE]: (state, action) => {
    return {
      isFetching: false,
      error: true,
      errorMessage: action.errorMessage
    };
  }
};
export const actions = {
  addItem
};
// Reducer
// ------------------------------------
const initialState = {
  isFetching: false,
  error: false,
  data: {}
};
export default function addReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
