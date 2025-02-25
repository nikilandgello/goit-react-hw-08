import css from './ContactsPage.module.css';
import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectLoading,
} from '../../redux/contacts/selectors';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import ContactEditForm from '../../components/ContactEditForm/ContactEditForm';

const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <main>
      <div className={css.background}>
        <ContactForm />
        {loading && !error && <p className={css.loading}>loading...</p>}
        {!loading && !error && contacts.length > 0 && <SearchBox />}
        {!loading && !error && contacts.length === 0 && (
          <h2 className={css.noContacts}>You have no contacts!</h2>
        )}
        <ContactList />
      </div>
      <ContactEditForm />
    </main>
  );
};

export default ContactsPage;
