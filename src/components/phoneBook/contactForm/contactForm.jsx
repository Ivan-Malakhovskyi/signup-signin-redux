import {
  Main,
  ContactForm,
  LabelForm,
  FieldForm,
  ErrorMsg,
  Buttons,
} from './contactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import toast, { Toaster } from 'react-hot-toast';
import { addContact } from 'redux/contacts/contacts-operations';
import { getCreateFormSchema } from 'redux/auth/validation';

const schema = getCreateFormSchema();

const FormUser = () => {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      toast.error(`${name} already exists.`);
      resetForm();
      return;
    }

    dispatch(addContact({ name, number }));

    toast.success(`${name} has succesfully added to your phonebook`);
    resetForm();
  };

  return (
    <Main
      initialValues={{ name: '', number: '' }}
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

        <LabelForm htmlFor="number">
          Phone
          <FieldForm type="tel" name="number" required />
          <ErrorMsg name="number" component="p" />
        </LabelForm>
        <Buttons type="submit">Add to contact</Buttons>
        <Toaster />
      </ContactForm>
    </Main>
  );
};

export default FormUser;
