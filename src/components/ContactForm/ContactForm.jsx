import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import ContactFormBase from '../ContactFormBase/ContactFormBase';
import css from './ContactForm.module.css';
import { selectAdditionalInfoForm } from '../../redux/additionalInfo/selectors';
import {
  closeAdditionalInfoForm,
  openAdditionalInfoForm,
} from '../../redux/additionalInfo/slice';
import { addContact } from '../../redux/contacts/operations';

const ContactForm = () => {
  const dispatch = useDispatch();
  const additionalInfoForm = useSelector(selectAdditionalInfoForm);

  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
    dispatch(closeAdditionalInfoForm());
  };

  const onClick = () => {
    dispatch(openAdditionalInfoForm());
  };

  return (
    <div className={clsx('container', css.containerForm)}>
      <div className={css.block}>
        <h2 className={css.title}>Add Contact!</h2>
        <ContactFormBase
          onSubmit={handleSubmit}
          initialValues={initialValues}
          contentBtn="Add Contact"
          onClick={onClick}
          open={additionalInfoForm}
        />
      </div>
    </div>
  );
};

export default ContactForm;
