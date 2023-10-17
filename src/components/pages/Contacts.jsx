import { Filter } from 'components/phoneBook/contactFilter/conatactFilter';
import FormUser from 'components/phoneBook/contactForm/contactForm';
import { ContactList } from 'components/phoneBook/contactList/contactList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { serviceContacts } from 'redux/contacts/contacts-operations';

const Contacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(serviceContacts());
  }, [dispatch]);

  return (
    <>
      <h2>Your contacts</h2>
      <FormUser />
      <Filter />
      <ContactList />
    </>
  );
};

export default Contacts;
