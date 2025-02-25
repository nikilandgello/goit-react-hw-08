import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <motion.div className={clsx('container', css.cotainerList)} layout>
      <motion.ul className={css.contactList} layout>
        <AnimatePresence>
          {visibleContacts.map(contact => (
            <motion.li
              key={contact.id}
              layout
              className={css.contactItem}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <Contact data={contact} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </motion.div>
  );
};

export default ContactList;
