import {
  HISTORY_SERVICE_API,
  LIST_FAVARITE_STAFF_API,
  ADD_FAVARITE_STAFF_API,
  REMOVE_FAVARITE_STAFF_API,
  ORDERS_ID_API,
  ORDERS_DETAIL_ID_API,
  REG_ORDER_API,
  EVALUATION_STAFF_API,
} from './actionTypes';

export function historyServiceApiSuccess(response) {
  return {
    type: HISTORY_SERVICE_API.SUCCESS,
    response,
  };
}

export function historyServiceApiFailure(error) {
  return {
    type: HISTORY_SERVICE_API.FAILURE,
    error,
  };
}

export function historyServiceApiSubmit(customerId, pageNumber) {
  return {
    type: HISTORY_SERVICE_API.REQUEST,
    customerId,
    pageNumber,
  };
}

export function listFavatiteStaffApiSuccess(response) {
  return {
    type: LIST_FAVARITE_STAFF_API.SUCCESS,
    response,
  };
}

export function listFavatiteStaffApiFailure(error) {
  return {
    type: LIST_FAVARITE_STAFF_API.FAILURE,
    error,
  };
}

export function listFavatiteStaffApiSubmit(customerId, pageNumber) {
  return {
    type: LIST_FAVARITE_STAFF_API.REQUEST,
    customerId,
    pageNumber,
  };
}

export function addFavatiteStaffApiSuccess(response) {
  return {
    type: ADD_FAVARITE_STAFF_API.SUCCESS,
    response,
  };
}

export function addFavatiteStaffApiFailure(error) {
  return {
    type: ADD_FAVARITE_STAFF_API.FAILURE,
    error,
  };
}

export function addFavatiteStaffApiSubmit(id, staffId) {
  return {
    type: ADD_FAVARITE_STAFF_API.REQUEST,
    id,
    staffId,
  };
}

export function removeFavatiteStaffApiSuccess(response) {
  return {
    type: REMOVE_FAVARITE_STAFF_API.SUCCESS,
    response,
  };
}

export function removeFavatiteStaffApiFailure(error) {
  return {
    type: REMOVE_FAVARITE_STAFF_API.FAILURE,
    error,
  };
}

export function removeFavatiteStaffApiSubmit(id, staffId) {
  return {
    type: REMOVE_FAVARITE_STAFF_API.REQUEST,
    id,
    staffId,
  };
}

export function evaluationStaffApiSuccess(response) {
  return {
    type: EVALUATION_STAFF_API.SUCCESS,
    response,
  };
}

export function evaluationStaffApiFailure(error) {
  return {
    type: EVALUATION_STAFF_API.FAILURE,
    error,
  };
}

export function evaluationStaffApiSubmit(id, customerRate, customerNote) {
  return {
    type: EVALUATION_STAFF_API.REQUEST,
    id,
    customerRate,
    customerNote,
  };
}

export function ordersIdApiSuccess(response) {
  return {
    type: ORDERS_ID_API.SUCCESS,
    response,
  };
}

export function ordersIdApiFailure(error) {
  return {
    type: ORDERS_ID_API.FAILURE,
    error,
  };
}

export function ordersIdApiSubmit(id) {
  return {
    type: ORDERS_ID_API.REQUEST,
    id,
  };
}

export function ordersDetailIdApiSuccess(response) {
  return {
    type: ORDERS_DETAIL_ID_API.SUCCESS,
    response,
  };
}

export function ordersDetailIdApiFailure(error) {
  return {
    type: ORDERS_DETAIL_ID_API.FAILURE,
    error,
  };
}

export function ordersDetailIdApiSubmit(orderId) {
  return {
    type: ORDERS_DETAIL_ID_API.REQUEST,
    orderId,
  };
}

export function regOrdersApiSuccess(response) {
  return {
    type: REG_ORDER_API.SUCCESS,
    response,
  };
}

export function regOrdersApiFailure(error) {
  return {
    type: REG_ORDER_API.FAILURE,
    error,
  };
}

export function regOrdersApiSubmit(
  categoryId,
  workShift,
  timeStart,
  timeEnd,
  address,
  description,
  lstDay = [],
  months = 0,
  priceApply,
) {
  return {
    type: REG_ORDER_API.REQUEST,
    categoryId,
    workShift,
    timeStart,
    timeEnd,
    address,
    description,
    lstDay,
    months,
    priceApply,
  };
}
