import {takeLatest, put} from 'redux-saga/effects';
import {
  LIST_NOTIFICATIONS_API,
  READ_NOTIFICATIONS_API,
} from '../actions/actionTypes';
import {callApi} from '../apis';
import {
  listNotificationsApiFailure,
  listNotificationsApiSuccess,
  listNotificationsApiSubmit,
  readNotificationsApiFailure,
  readNotificationsApiSuccess,
} from '../actions/publicActions';
import {
  listNotificationsRequest,
  readNotificationsRequest,
} from '../apis/requests/public';

function* fetchListNotifications(action) {
  const {pageNumber, loadMore} = action;
  try {
    const request = listNotificationsRequest(pageNumber);
    const response = yield callApi(request);
    yield put(listNotificationsApiSuccess(response, loadMore));
  } catch (error) {
    yield put(listNotificationsApiFailure());
  }
}

function* fetchReadNotifications(action) {
  const {data} = action;
  try {
    const request = readNotificationsRequest(data);
    const response = yield callApi(request);
    yield put(readNotificationsApiSuccess(response));
    yield put(listNotificationsApiSubmit(1));
  } catch (error) {
    yield put(readNotificationsApiFailure());
  }
}

export default function* authApiSagas() {
  yield takeLatest(LIST_NOTIFICATIONS_API.REQUEST, fetchListNotifications);
  yield takeLatest(READ_NOTIFICATIONS_API.REQUEST, fetchReadNotifications);
}
