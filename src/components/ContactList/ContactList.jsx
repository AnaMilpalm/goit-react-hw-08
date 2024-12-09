import { useDispatch, useSelector } from "react-redux";
import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { deleteContact } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactsList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter?.toLowerCase())
  );

  return (
    <ul className={s.list}>
      {visibleContacts.map((contact) => (
        <li className="s.item" key={contact.id}>
          <Contact
            contact={contact}
            onDelete={() => dispatch(deleteContact(contact.id))}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
