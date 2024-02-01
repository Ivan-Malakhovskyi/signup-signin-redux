import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, Topic } from './contactList.styled';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { EmptyMessage } from './emptyMessage';
import { CloseButton, Icon } from '@chakra-ui/react';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <List>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          <Topic>
            {contact.name} : {contact.number}
          </Topic>
          <Icon
            as={CloseButton}
            onClick={() => handleDelete(contact.id)}
          ></Icon>
        </ListItem>
      ))}
      {contacts && contacts.length === 0 && <EmptyMessage />}
    </List>
  );
};
