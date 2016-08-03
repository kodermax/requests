// ------------------------------------
// Constants
// ------------------------------------
export const FETCH_ACTIONS_REQUEST = 'FETCH_ACTIONS_REQUEST';
export const FETCH_ACTIONS_SUCCESS = 'FETCH_ACTIONS_SUCCESS';
export const FETCH_ACTIONS_FAILURE = 'FETCH_ACTIONS_FAILURE';

// ------------------------------------
// Actions
// ------------------------------------
function requestItemActions() {
  return {
    didInvalidate: false,
    type: FETCH_ACTIONS_REQUEST,
    isFetching: true
  };
}
function receiveItemActions(result) {
  return {
    data: result,
    isFetching: false,
    didInvalidate: false,
    type: FETCH_ACTIONS_SUCCESS
  };
}
function invalidItemActions(error) {
  return {
    data: error,
    isFetching: false,
    didInvalidate: true,
    type: FETCH_ACTIONS_FAILURE
  };
}
export const fetchItemActions = (id) => {
  return (dispatch, getState) => {
    dispatch(requestItemActions());
    let token = localStorage.getItem('userToken') || null;
    return fetch(`http://dev.pharm.local:3001/api/requests/${id}/actions`, {
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(json => dispatch(receiveItemActions(json)))
      .catch(error => dispatch(invalidItemActions(error)));
  };
};
export const actions = {
  fetchItemActions
};
// ------------------------------------
// Action Handlers - Возвращает новое состояние
// ------------------------------------
const ACTION_HANDLERS = {
  [FETCH_ACTIONS_SUCCESS]: (state, action) => {
    return {
      isFetching: false,
      didInvalidate: false,
      data: action.data
    };
  },
  [FETCH_ACTIONS_FAILURE]: (stat, action) => action.data
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  isFetching: false,
  data: []
};
export default function itemActionsReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}

