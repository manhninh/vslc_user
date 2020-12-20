export default {
  lockingTime: 1000, //ms
  PHONE_REGEX: /^(03[23456789]|05[689]|07[06789]|08[12345689]|09[012346789])[0-9]{7}$/,
  PASSWORD_REGEX: '(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\\S+$).{6,}',
  EMAIL_REGEX: /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gim,
  FILE_NAME_REGEX: /^(.+)\.(\w{3,})$/,
};