import { signIn } from 'redux/auth/auth-operations';
import { getLoginSchema } from 'redux/auth/validation';

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
import { Heading } from '@chakra-ui/react';

const Login = () => {
  const dispacth = useDispatch();
  const loginSchema = getLoginSchema();

  const handleSibmit = (values, { resetForm }) => {
    const { email, password } = values;
    dispacth(signIn({ email, password }));
    toast.success(`Your account ${email} has been found, Login`);
    resetForm();
  };

  return (
    <>
      <Heading as="h2" size="xl" marginBottom={10}>
        Login page
      </Heading>
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
            <FieldForm type="password" name="password" required />
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
