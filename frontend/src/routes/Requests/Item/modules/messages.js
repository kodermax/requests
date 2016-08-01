// ------------------------------------
// Constants
// ------------------------------------
export const FETCH_MESSAGES_REQUEST = 'FETCH_MESSAGES_REQUEST';
export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS';
export const FETCH_MESSAGES_FAILURE = 'FETCH_MESSAGES_FAILURE';

// ------------------------------------
// Actions
// ------------------------------------
function requestMessages() {
  return {
    didInvalidate: false,
    type: FETCH_MESSAGES_REQUEST,
    isFetching: true
  };
}
function receiveMessages(result) {
  return {
    data: result,
    isFetching: false,
    didInvalidate: false,
    type: FETCH_MESSAGES_SUCCESS
  };
}
function invalidMessages(error) {
  return {
    data: error,
    isFetching: false,
    didInvalidate: true,
    type: FETCH_MESSAGES_FAILURE
  };
}
export const fetchMessages = (id) => {
  return (dispatch, getState) => {
    dispatch(requestMessages());
    let token = localStorage.getItem('userToken') || null;
    return fetch(`http://dev.pharm.local:3001/api/requests/${id}/messages`, {
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(json => dispatch(receiveMessages(json)))
      .catch(error => dispatch(invalidMessages(error)));
  };
};
export const actions = {
  fetchMessages
};
// ------------------------------------
// Action Handlers - Возвращает новое состояние
// ------------------------------------
const ACTION_HANDLERS = {
  [FETCH_MESSAGES_SUCCESS]: (state, action) => {
    return {
      isFetching: false,
      didInvalidate: false,
      messages: action.data
    };
  },
  [FETCH_MESSAGES_FAILURE]: (stat, action) => action.data
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  isFetching: false,
  data: {}
};
export default function itemReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}

