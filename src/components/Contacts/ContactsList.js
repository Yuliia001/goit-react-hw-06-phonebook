import { ListItem, Title } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts, getContacts } from 'redux/contacts/slice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  return (
    <>
      <Title>Contacts</Title>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <ListItem key={id}>
            <p> {name}</p>
            <span> {number}</span>
            <button type="button" onClick={() => dispatch(deleteContacts(id))}>
              Delete
            </button>
          </ListItem>
        ))}
      </ul>
    </>
  );
};
