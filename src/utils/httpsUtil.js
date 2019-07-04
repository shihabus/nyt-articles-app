import axios from 'axios'

const instance = axios.create()

export function makeGetCall(route, dispatch, successCallback, errorCallback) {
    console.log('In')
  instance.get(route)
    .then(response => {
        console.log('Success',response )
        console.log('Success',response && response.data && response.status === 200)
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

function handleSuccess(response, successCallback, dispatch) {
  if(response && response.data && response.status === 200)
    dispatch(successCallback(response.data))
}

function handleError(error, errorCallback, dispatch) {
  dispatch(errorCallback(error))
}

