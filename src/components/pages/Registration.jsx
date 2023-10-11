import * as yup from 'yup';
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

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-Zа-яА-Я\s'-]*$/, 'Name should not contain numbers')
    .required(),
  phone: yup
    .string()
    .min(5, 'Too short  phone number')
    .max(12, 'Too long phone number')
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'Invalid phone number format'
    )
    .required(),
  email: yup.string().email('Invalid email format').required(),
});

const Registration = () => {
  const handleSubmit = (values, { resetForm }) => {
    const {
      name,

      phone,
      email,
    } = values;
    console.log(name, phone, email);
    //  if (
    //    contacts.find(
    //      contact => contact.name.toLowerCase() === name.toLowerCase()
    //    )
    //  ) {
    //    toast.error(`${name} already exists.`);
    //    resetForm();
    //    return;
    //  }

    // dispatch(addContact({ name, phone }));

    toast.success(`${name} has succesfully added to your phonebook`);
    resetForm();
  };

  return (
    <div>
      <h1>Registration</h1>
      <Main
        initialValues={{ name: '', phone: '', email: '' }}
        validationSchema={schema}
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
            <ErrorMsg name="name" component="p" />
          </LabelForm>

          <LabelForm htmlFor="phone">
            Phone
            <FieldForm type="tel" name="phone" required />
            <ErrorMsg name="phone" component="p" />
          </LabelForm>

          <LabelForm htmlFor="email">
            Email
            <FieldForm type="email" name="email" required />
            <ErrorMsg name="email" component="p" />
          </LabelForm>
          <Buttons type="submit">Sign up</Buttons>
          <Toaster />
        </ContactForm>
      </Main>
    </div>
  );
};

export default Registration;
