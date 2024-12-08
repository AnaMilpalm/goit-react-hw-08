import { IoPersonSharp } from "react-icons/io5";
import { IoCallSharp } from "react-icons/io5";
import s from "./Contact.module.css";

const Contact = ({ contact, onDelete }) => {
  return (
    <div className={s.container}>
      <div className={s.contactsBox}>
        <span className={s.text}>
          <IoPersonSharp className={s.icon} size="20" />
          {contact.name}
        </span>
        <span className={s.text}>
          <IoCallSharp className={s.icon} size="20" />
          {contact.number}
        </span>
      </div>
      <button className={s.btn} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
