import { useSelector } from "react-redux";
import { selectIsLoading, selectIsError } from "./redux/contactsSlice";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactsList from "./components/ContactList/ContactList";
import "./App.css";
import "modern-normalize";

function App() {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  return (
    <div className="wrapper">
      <h1>Phonebook</h1>
      {isError && <p className="error">Error: {isError}</p>}
      {isLoading && <p className="loading">Loading...</p>}
      <ContactForm />
      <SearchBox />
      <ContactsList />
    </div>
  );
}

export default App;
