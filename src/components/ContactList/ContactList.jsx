import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactsList = () => {
  return (
    <ul className={s.list}>
      {contacts.map((contact) => (
        <li className="s.item" key={contact.id}>
          <Contact />
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
