import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';

import css from './ContactFormBase.module.css';
import FieldBase from '../FieldBase/FieldBase';

const ContactFormBase = ({
  onSubmit,
  initialValues,
  contentBtn,
  onClick,
  open,
  btn = true,
}) => {
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Too Short!')
      .max(13, 'Too Long!')
      .required('Required'),
  });

  const formatPhoneNumber = value => {
    let digits = value.replace(/\D/g, '').slice(0, 10);

    let formattedNumber = '';
    if (digits.length > 0) formattedNumber += digits.slice(0, 3);
    if (digits.length > 3) formattedNumber += '-' + digits.slice(3, 6);
    if (digits.length > 6) formattedNumber += '-' + digits.slice(6, 10);

    return formattedNumber;
  };

  const onChangeFormat = (e, setFieldValue, format, fieldName) => {
    const { value } = e.target;
    if (e.nativeEvent.inputType === 'deleteContentBackward') {
      setFieldValue(fieldName, value);
    } else {
      setFieldValue(fieldName, format(value));
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={FeedbackSchema}
    >
      {({ setFieldValue, values }) => (
        <Form className={css.contactForm}>
          <motion.div
            initial={{ opacity: 0, height: 0, visibility: 'hidden' }}
            animate={{
              opacity: open ? 1 : 0,
              height: open ? 'auto' : 0,
              visibility: open ? 'visible' : 'hidden',
            }}
            transition={{
              duration: 0.4,
              ease: 'easeInOut',
            }}
            className={css.animatedContainer}
            style={{
              overflow: 'hidden',
              pointerEvents: open ? 'auto' : 'none',
            }}
          >
            <FieldBase label="Name" name="name" placeholder="enter name" />
            <FieldBase
              type="tel"
              label="Number"
              name="number"
              placeholder="xxx-xxx-xx-xx"
              value={values.number}
              onChange={e =>
                onChangeFormat(e, setFieldValue, formatPhoneNumber, 'number')
              }
            />
            <button type="submit" className={css.buttonForm}>
              {contentBtn}
            </button>
          </motion.div>

          {btn && (
            <button type="button" onClick={onClick} className={css.BtnMore}>
              {open ? 'Hide' : 'Show'}
            </button>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default ContactFormBase;
