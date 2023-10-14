import { getLoginSchema } from 'components/auth/validation';

import {
  ContactForm,
  FieldForm,
  LabelForm,
  Main,
  Buttons,
  Error,
} from 'components/phoneBook/contactForm/contactForm.styled';

import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispacth = useDispatch();
  const loginSchema = getLoginSchema();

  const handleSibmit = (values, { resetForm }) => {
    const { email, password } = values;
    console.log(values);

    toast.success(`${email}${password} success`);
    resetForm();
    dispacth();
  };

  return (
    <>
      <h1>Login pages</h1>
      <Main
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={handleSibmit}
      >
        <ContactForm>
          <LabelForm htmlFor="email">
            Email
            <FieldForm name="email" required />
            <Error name="email" component="p" />
          </LabelForm>

          <LabelForm htmlFor="password">
            Password
            <FieldForm name="password" required />
            <Error name="password" component="p" />
          </LabelForm>

          <Buttons type="submit">Login</Buttons>
          <Toaster />
        </ContactForm>
      </Main>
    </>
  );
};

export default Login;
