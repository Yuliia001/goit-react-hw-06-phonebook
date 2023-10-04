import { ContactForm } from './Form/ContactForm';
import { ContactList } from './Contacts/ContactsList';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
// import { Filter } from './Filter/Filter';

// const getInitialContacts = () => {
//   const savedContacts = localStorage.getItem('contacts');
//   if (savedContacts !== null) {
//     return JSON.parse(savedContacts);
//   }
//   return [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ];
// };

export const App = () => {
  // const [contacts, setContacts] = useState(getInitialContacts);
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = ({ name, number }) => {
  //   const dublicateContact = contacts.some(
  //     contact => contact.name.toLowerCase() === name.toLowerCase()
  //   );

  // if (dublicateContact) {
  //   alert(`${name} already in contact list!`);
  //   return;
  // }

  // const newContact = {
  //   id: nanoid(),
  //   name,
  //   number,
  // };

  //   setContacts(prevItems => [...prevItems, newContact]);
  // };

  // const handleFindContact = evt => {
  //   setFilter(evt.target.value);
  // };

  // const handleDeleteContact = id => {
  //   setContacts(prevItems => prevItems.filter(contact => contact.id !== id));
  // };

  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <Layout>
      <ContactForm />
      {/* <Filter filter={filter} onFilterContact={handleFindContact} /> */}
      <ContactList />
      {/* {filteredContacts.length > 0 && <ContactList />} */}
      <GlobalStyle />
    </Layout>
  );
};
