import {
  Main,
  ContactForm,
  LabelForm,
  FieldForm,
  ErrorMsg,
  Buttons,
} from '../phoneBook/contactForm/contactForm.styled';
// import { useSelector } from 'react-redux';
// import { selectContacts } from 'redux/selectors';
import toast, { Toaster } from 'react-hot-toast';
import { getRegisterSchema } from 'redux/auth/validation';
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/auth-operations';

const Registration = () => {
  const dispatch = useDispatch();
  const registerSchema = getRegisterSchema();

  const handleSubmit = (values, { resetForm }) => {
    const { name, email, password } = values;

    //  if (
    //    contacts.find(
    //      contact => contact.name.toLowerCase() === name.toLowerCase()
    //    )
    //  ) {
    //    toast.error(`${name} already exists.`);
    //    resetForm();
    //    return;
    //  }

    dispatch(signUp({ name, email, password }));

    toast.success(`${name} has succesfully added to your phonebook`);
    resetForm();
  };

  return (
    <>
      <h1>Registration</h1>
      <Main
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        <ContactForm>
          <LabelForm htmlFor="name">
            Name
            <FieldForm
              type="text"
              name="name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrorMsg name="name" component="p" required />
          </LabelForm>

          <LabelForm htmlFor="email">
            Email
            <FieldForm name="email" required />
            <ErrorMsg name="email" component="p" />
          </LabelForm>

          <LabelForm htmlFor="password">
            Password
            <FieldForm name="password" required />
            <ErrorMsg name="password" component="p" />
          </LabelForm>

          <Buttons type="submit">Sign up</Buttons>
          <Toaster />
        </ContactForm>
      </Main>
    </>
  );
};

export default Registration;
