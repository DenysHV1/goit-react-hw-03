import css from './Contact.module.css';
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Contact = ({ dataInfo, onDelete }) => {
  return dataInfo.map(({ id, name, number }) => (
    <li className={css.contactItem} key={id}>
      <p><FaUser /> {name}</p>
      <p><FaPhoneAlt /> {number}</p>
      <button className={css.contactButton} onClick={() => {onDelete(id)}}>Delete</button>
    </li>
  ));
};

export default Contact;
