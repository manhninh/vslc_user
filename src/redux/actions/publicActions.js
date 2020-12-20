import {LIST_NOTIFICATIONS_API, READ_NOTIFICATIONS_API} from './actionTypes';

export function listNotificationsApiSuccess(response, loadMore) {
  return {
    type: LIST_NOTIFICATIONS_API.SUCCESS,
    response,
    loadMore,
  };
}
export function listNotificationsApiFailure(error) {
  return {
    type: LIST_NOTIFICATIONS_API.FAILURE,
    error,
  };
}
export function listNotificationsApiSubmit(pageNumber, loadMore = false) {
  return {
    type: LIST_NOTIFICATIONS_API.REQUEST,
    pageNumber,
    loadMore,
  };
}

export function readNotificationsApiSuccess(response) {
  return {
    type: READ_NOTIFICATIONS_API.SUCCESS,
    response,
  };
}
export function readNotificationsApiFailure(error) {
  return {
    type: READ_NOTIFICATIONS_API.FAILURE,
    error,
  };
}
export function readNotificationsApiSubmit(data) {
  return {
    type: READ_NOTIFICATIONS_API.REQUEST,
    data,
  };
}
