import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import css from './LoginForm.module.css';
import FieldBase from '../FieldBase/FieldBase';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { Link, useNavigate } from 'react-router-dom';
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
      .min(5, 'Min. 5 characters')
      .max(30, 'Max. 30 characters')
      .matches(/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/, 'Invalid email format')
      .required('Required'),
    password: Yup.string()
      .min(8, 'Min. 8 characters')
      .max(20, 'Max. 13 characters')
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
        <h2 className={css.logTitle}>Login</h2>
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
              autoComplete="current-email"
            />
            <FieldBase
              name="password"
              label="Password"
              placeholder="Enter password"
              type="password"
              autoComplete="current-password"
            />
            <button type="submit" className={css.buttonForm}>
              Login
            </button>
          </Form>
        </Formik>
        <p className={css.link}>
          Don`t have an account? <br />
          <Link to="/register" className={css.linkreg}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
