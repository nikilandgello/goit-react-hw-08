import ContactFormBase from '../ContactFormBase/ContactFormBase';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../Modal/Modal';
import css from './ContactEditForm.module.css';
import {
  selectModalOpen,
  selectModalContact,
} from '../../redux/modal/selectors';
import { closeModal } from '../../redux/modal/slice';
import { editContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import toast from 'react-hot-toast';

const ContactEditForm = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectModalOpen);
  const selectedContact = useSelector(selectModalContact);
  const contacts = useSelector(selectContacts);

  if (!selectedContact) return null;

  const initialValues = {
    name: selectedContact.name || '',
    number: selectedContact.number || '',
  };

  const handleSubmit = (values, actions) => {
    if (contacts.some(contact => contact.number === values.number)) {
      toast.error('This number already exists!');
      actions.resetForm();
      return;
    }
    dispatch(editContact({ ...values, id: selectedContact.id }));
    actions.resetForm();
    dispatch(closeModal());
    document.body.style.overflow = '';
  };

  const handleClose = () => {
    dispatch(closeModal());
    document.body.style.overflow = '';
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <h2 className={css.title}>Edit Contact!</h2>
      <ContactFormBase
        onSubmit={handleSubmit}
        initialValues={initialValues}
        contentBtn="Edit Contact"
        open={true}
        btn={false}
      />
    </Modal>
  );
};

export default ContactEditForm;
