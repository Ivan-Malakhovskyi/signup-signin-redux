import { IconMessage, Message, MessageWrapper } from './contactList.styled';
import empty from '../../images/empty_contacts.jpg';

export const EmptyMessage = () => {
  return (
    <MessageWrapper>
      <IconMessage src={empty} alt="empty contacts" width={200} />
      <Message>Your contact list is empty.Try add some contacts</Message>
    </MessageWrapper>
  );
};
