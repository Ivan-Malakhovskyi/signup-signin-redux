import * as yup from 'yup';

export const getRegisterSchema = () => {
  return yup.object().shape({
    name: yup
      .string()
      .matches(/^[a-zA-Zа-яА-Я\s'-]*$/, 'Name should not contain numbers')
      .required(),
    email: yup.string().email('Invalid email format').required(),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required(),
  });
};

export const getLoginSchema = () => {
  return yup.object().shape({
    email: yup.string().email('Invalid email format').required(),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required(),
  });
};
