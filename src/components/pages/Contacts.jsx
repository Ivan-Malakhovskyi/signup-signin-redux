import { Filter } from 'components/phoneBook/contactFilter/conatactFilter';
import FormUser from 'components/phoneBook/contactForm/contactForm';
import { ContactList } from 'components/phoneBook/contactList/contactList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { serviceContacts } from 'redux/contacts/contacts-operations';
import { Heading } from '@chakra-ui/react';

const Contacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(serviceContacts());
  }, [dispatch]);

  return (
    <>
      <Heading as="h2" size="xl">
        Your contacts
      </Heading>
      <FormUser />
      <Filter />
      <ContactList />
    </>
  );
};

export default Contacts;
