import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import css from './LoginForm.module.css';
import FieldBase from '../FieldBase/FieldBase';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    email: '',
    password: '',
  };

  const FeedbackSchema = Yup.object().shape({
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
    dispatch(login(values))
      .unwrap()
      .then(res => {
        toast.success(`Welcome, ${res.user.name}`);
        navigate('/contacts', { replace: true });
      })
      .catch(() => {
        toast.error('Invalid data');
      });
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
              Login
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
