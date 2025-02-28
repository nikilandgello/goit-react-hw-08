import css from './HomePage.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import { Link } from 'react-router-dom';
import FaqQuestions from '../../components/FaqQuestions/FaqQuestions';

const faqs = [
  {
    question: 'How do I add a new contact?',
    answer:
      "Simply enter the name and phone number in the 'Add Contact' form, then save the details.",
  },
  {
    question: 'Can I call a contact directly from the app?',
    answer:
      "Yes! You can easily call a contact by clicking on their phone number. This will redirect you to your device's dialer app, where you can initiate the call.",
  },
  {
    question: 'How can I search for a contact?',
    answer:
      'Use the search bar to find contacts by name or phone number instantly.',
  },
  {
    question: 'Can I edit or delete a contact?',
    answer:
      'Yes! You can update contact details or remove them anytime from your contact list.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Absolutely! Your contacts are securely stored and accessible only to you.',
  },
  {
    question: 'Can I access my contacts from different devices?',
    answer:
      'Yes, your contacts are synced and can be accessed from any device with an internet connection.',
  },
];

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <div className={'background'}>
      <div className={'container'}>
        <div className={css.homeBack}>
          {isLoggedIn ? (
            <>
              <h1 className={css.homeTitle}>
                Welcome to Your Phonebook, {user.name}
              </h1>
              <p className={css.text}>
                Easily manage your contacts and keep all your phone numbers in
                one place.
              </p>
            </>
          ) : (
            <>
              <h1 className={css.homeTitle}>Welcome to Your Phonebook</h1>
              <p className={css.text}>
                Easily manage your contacts and keep all your phone numbers in
                one place.
              </p>
              <Link to="/login" className={css.linkGetStart}>
                Get Started!
              </Link>
            </>
          )}

          <FaqQuestions faqs={faqs} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
