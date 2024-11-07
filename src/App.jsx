import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactsList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import { useState, useEffect } from 'react';
import inicialsContacts from './assets/contacts.json'; 

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : inicialsContacts; 
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (contacts && contacts.length > 0) {
      localStorage.setItem('contacts', JSON.stringify(contacts)); 
    }
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact]; 
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId); 
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <Filter value={filter} onFilter={setFilter} />
      <ContactsList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
