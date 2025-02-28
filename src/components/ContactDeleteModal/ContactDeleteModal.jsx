import { useDispatch, useSelector } from 'react-redux';
import {
  selectModalOpenContactDelete,
  selectSelectedContactDelete,
} from '../../redux/modal/selectors';
import Modal from '../Modal/Modal';
import { closeModalContactDelete } from '../../redux/modal/slice';
import css from './ContactDeleteModal.module.css';
import { deleteContact } from '../../redux/contacts/operations';

const ContactDeleteModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectModalOpenContactDelete);
  const selectContact = useSelector(selectSelectedContactDelete);

  const handleClose = () => {
    dispatch(closeModalContactDelete());
    document.body.style.overflow = '';
  };

  const onClick = () => {
    if (selectContact) {
      dispatch(
        deleteContact({ id: selectContact.id, name: selectContact.name })
      );
    }
    dispatch(closeModalContactDelete());
  };

  if (!selectContact) {
    return null;
  }
  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <h2 className={css.deleteTitle}>Delete Contact</h2>
      <p className={css.textDelete}>
        Are you sure you want to delete the contact
        <span className={css.spanText}> {selectContact.name}</span>?
      </p>
      <button className={css.button} onClick={onClick}>
        Delete
      </button>
    </Modal>
  );
};

export default ContactDeleteModal;
