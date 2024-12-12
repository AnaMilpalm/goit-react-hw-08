import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllContacts } from "./redux/contactsOps";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactsList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";
import "modern-normalize";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactsList />
    </div>
  );
}

export default App;
