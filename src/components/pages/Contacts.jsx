import { Filter } from 'components/phoneBook/contactFilter/conatactFilter';
import FormUser from 'components/phoneBook/contactForm/contactForm';
import { ContactList } from 'components/phoneBook/contactList/contactList';

const Contacts = () => {
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
