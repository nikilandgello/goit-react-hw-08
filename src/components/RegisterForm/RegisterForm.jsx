import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import css from './RegisterForm.module.css';
import FieldBase from '../FieldBase/FieldBase';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .min(5, 'Too Short!')
      .max(50, 'Too Long!')
      .email('Must be a valid email')
      .required('Required'),
    password: Yup.string()
      .min(8, 'Too Short!')
      .max(13, 'Too Long!')
      .required('Required'),
  });

  const onSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };
  return (
    <div className="container">
      <div className={css.block}>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={FeedbackSchema}
        >
          <Form>
            <FieldBase name="name" label="Name" placeholder="Enter name" />
            <FieldBase
              name="email"
              label="Email"
              placeholder="Enter email"
              type="email"
            />
            <FieldBase
              name="password"
              label="Password"
              placeholder="Enter password"
              type="password"
            />
            <button type="submit" className={css.buttonForm}>
              Register
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default RegisterForm;
