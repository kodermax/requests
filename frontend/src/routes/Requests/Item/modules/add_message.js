export const ADD_MESSAGE_REQUEST = 'ADD_MESSAGE_REQUEST';
export const ADD_MESSAGE_SUCCESS = 'ADD_MESSAGE_SUCCESS';
export const ADD_MESSAGE_FAILURE = 'ADD_MESSAGE_FAILURE';

// ------------------------------------
// Actions
// ------------------------------------
function requestAddMessage() {
  return {
    error: false,
    type: ADD_MESSAGE_REQUEST,
    isFetching: true
  };
}
function receiveAddMessage(result) {
  return {
    data: result.id,
    isFetching: false,
    error: false,
    type: ADD_MESSAGE_SUCCESS
  };
}
function invalidAddMessage(error) {
  return {
    isFetching: false,
    error: true,
    errorMessage: error,
    type: ADD_MESSAGE_FAILURE
  };
}
function showNotification(text) {
  return {
    message: text,
    type: 'SHOW_NOTIFICATION'
  };
}
export const addMessage = (id, data) => {
  return (dispatch, getState) => {
    dispatch(requestAddMessage());
    let token = localStorage.getItem('userToken') || null;
    return fetch(`http://10.1.1.219:3001/api/requests/${id}/message`,
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
      .then(json => {
        dispatch(receiveAddMessage(json));
        dispatch(showNotification('Сообщение успешно добавлено!'));
      })
      .catch(error => dispatch(invalidAddMessage(error)));
  };
};

// ------------------------------------
// Action Handlers - Возвращает новое состояние
// ------------------------------------
const ACTION_HANDLERS = {
  [ADD_MESSAGE_SUCCESS]: (state, action) => {
    return {
      isFetching: false,
      error: false,
      id: action.id
    };
  },
  [ADD_MESSAGE_FAILURE]: (state, action) => {
    return {
      isFetching: false,
      error: true,
      errorMessage: action.errorMessage
    };
  }
};
export const actions = {
  addMessage
};
// Reducer
// ------------------------------------
const initialState = {
  isFetching: false,
  error: false,
  data: {}
};
export default function addReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
