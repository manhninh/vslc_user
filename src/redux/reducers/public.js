import {LIST_NOTIFICATIONS_API} from '../actions/actionTypes';

const initialState = {
  listNotifications: {
    list: [],
    count: 0,
  },
  isLoadListNotifi: false,
};

export default function(state = initialState, action) {
  const {type, response, loadMore} = action;
  switch (type) {
    case LIST_NOTIFICATIONS_API.SUCCESS: {
      return {
        ...state,
        isLoadListNotifi: false,
        listNotifications: loadMore
          ? {
              list: [...state.listNotifications.list, ...response.list],
              count: response.count,
            }
          : response,
      };
    }
    default:
      return state;
  }
}
