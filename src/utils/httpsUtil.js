import axios from 'axios'

const instance = axios.create()

function handleSuccess(response, successCallback, dispatch) {
  if(response && response.data && response.status === 200)
    dispatch(successCallback(response.data))
}

function handleError(error, errorCallback, dispatch) {
  dispatch(errorCallback(error))
}

export function makeGetCall(route, dispatch, successCallback, errorCallback) {
  instance.get(route)
    .then(response => {
      handleSuccess(response, successCallback, dispatch)
    })
    .catch(error => {
      handleError(error, errorCallback, dispatch)
    })
}

export function makePostCall(route, data, dispatch, successCallback, errorCallback) {
  instance.post(route, data)
    .then(response => handleSuccess(response, successCallback, dispatch))
    .catch(error => handleError(error, errorCallback, dispatch))
}

export function makePutCall(route, data, dispatch, successCallback, errorCallback) {
  instance.put(route, data)
    .then(response => handleSuccess(response, successCallback, dispatch))
    .catch(error => handleError(error, errorCallback, dispatch))
}



