import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { openModal } from '../../redux/modal/slice';
import { deleteContact } from '../../redux/contacts/operations';
import { motion } from 'framer-motion';

const Contact = ({ data: { id, number, name } }) => {
  const dispatch = useDispatch();
  const maxLegth = 15;

  const formattedNumber = number.replace(/-/g, '');

  const handleOpenModal = () => {
    dispatch(
      openModal({
        id,
        name,
        number,
      })
    );
    document.body.style.overflow = 'hidden';
  };

  return (
    <motion.div className={css.contact} layout>
      <div className={css.contactGroup}>
        <div className={css.contactItem}>
          <svg className={css.icon} width={20} height={20}>
            <use href="/sprite.svg#icon-user"></use>
          </svg>
          <p className={css.contactDescription}>
            {name.length <= maxLegth
              ? name
              : `${name.substring(0, maxLegth)}...`}
          </p>
        </div>
        <div className={css.contactItem}>
          <svg className={css.icon} width={20} height={20}>
            <use href="/sprite.svg#icon-phone"></use>
          </svg>
          <p className={css.contactDescription}>
            <a href={`tel:${formattedNumber}`} className={css.phoneLink}>
              +38-{number}
            </a>
          </p>
        </div>
      </div>
      <div className={css.blockBtn}>
        <button className={css.button} onClick={handleOpenModal}>
          Edit
        </button>
        <button
          className={css.button}
          onClick={() => {
            dispatch(deleteContact(id));
          }}
        >
          Delete
        </button>
      </div>
    </motion.div>
  );
};

export default Contact;
