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

export const getCreateFormSchema = () => {
  return yup.object().shape({
    name: yup
      .string()
      .matches(/^[a-zA-Zа-яА-Я\s'-]*$/, 'Name should not contain numbers')
      .required(),
    number: yup
      .string()
      .min(5, 'Too short  phone number')
      .max(12, 'Too long phone number')
      .matches(
        /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
        'Invalid phone number format'
      )
      .required(),
  });
};
