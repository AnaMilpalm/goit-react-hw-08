import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactsList from "./components/ContactList/ContactList";
import "modern-normalize";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
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
