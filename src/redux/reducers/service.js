import {
  HISTORY_SERVICE_API,
  ORDERS_ID_API,
  ORDERS_DETAIL_ID_API,
  LIST_FAVARITE_STAFF_API,
} from '../actions/actionTypes';

const initialState = {
  listHistoryService: [],
  listFavatiteStaff: [],
  ordersId: {},
  ordersDetailId: {},
};

export default function(state = initialState, action) {
  const {type, response} = action;
  switch (type) {
    case HISTORY_SERVICE_API.SUCCESS: {
      return {
        ...state,
        listHistoryService: response.list,
      };
    }
    case LIST_FAVARITE_STAFF_API.SUCCESS: {
      return {
        ...state,
        listFavatiteStaff: response.list,
      };
    }
    case ORDERS_ID_API.SUCCESS: {
      return {
        ...state,
        ordersId: response,
      };
    }
    case ORDERS_DETAIL_ID_API.SUCCESS: {
      return {
        ...state,
        ordersDetailId: response,
      };
    }
    default:
      return state;
  }
}
