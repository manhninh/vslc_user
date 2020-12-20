import {URL_API, PAGE_SIZE} from '../../../utils/configApp';

const listNotifications = '/api/notifications/get-list';
export const listNotificationsRequest = pageNumber => ({
  method: 'POST',
  data: {
    pageNumber,
    pageSize: PAGE_SIZE,
  },
  url: `${URL_API}${listNotifications}`,
});

const readNotifications = '/api/notifications/checked';
export const readNotificationsRequest = data => ({
  method: 'POST',
  data: {
    lsNotifications: [data],
  },
  url: `${URL_API}${readNotifications}`,
});
