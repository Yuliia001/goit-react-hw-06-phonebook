import { ContactForm } from './Form/ContactForm';
import { ContactList } from './Contacts/ContactsList';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Filter } from './Filter/Filter';

// const getInitialContacts = () => {
//   const savedContacts = localStorage.getItem('contacts');
//   if (savedContacts !== null) {
//     return JSON.parse(savedContacts);
//   }

export const App = () => {
  return (
    <Layout>
      <ContactForm />
      <Filter />
      <ContactList />
      <GlobalStyle />
    </Layout>
  );
};
