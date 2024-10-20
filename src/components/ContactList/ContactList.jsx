import css from './ContactList.module.css';

import Contact from './Contact/Contact';

const ContactList = ({ dataInfo, onDelete }) => {
  return (
    <ul className={css.contactList}>
      {dataInfo.length > 0 ? (
        <Contact dataInfo={dataInfo} onDelete={onDelete} />
      ) : (
        'List is empty'
      )}
    </ul>
  );
};

export default ContactList;
