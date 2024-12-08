import { useDispatch, useSelector } from "react-redux";

import s from "./ContactList.module.css";
import { deleteContact } from "../../redux/contactsSlice";

const ContactsList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.value);
  const dispatch = useDispatch();

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter?.toLowerCase())
  );

  return (
    <ul className={s.list}>
      {visibleContacts.map((contact) => (
        <li className="s.item" key={contact.id}>
          <div className={s.container}>
            <div className={s.contactsBox}>
              <span className={s.text}>{contact.name}</span>
              <span className={s.text}>{contact.number}</span>
            </div>
            <button
              className={s.btn}
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
