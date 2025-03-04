import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import css from './RegisterForm.module.css';
import FieldBase from '../FieldBase/FieldBase';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useState } from 'react';
import zxcvbn from 'zxcvbn';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const [passwordStrength, setPasswordStrength] = useState(null);

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Min. 3 characters')
      .max(20, 'Max. 20 characters')
      .required('Required'),
    email: Yup.string()
      .min(5, 'Min. 5 characters')
      .max(30, 'Max. 30 characters')
      .matches(/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/, 'Invalid email format')
      .required('Required'),
    password: Yup.string()
      .min(8, 'Min. 8 characters')
      .max(50, 'Max. 50 characters')
      .matches(/^[A-Za-z0-9!@#$%^&*()_+]+$/, 'Only Latin letters allowed')
      .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
      .matches(/\d/, 'Must contain at least one number')
      .required('Required'),
  });

  const onSubmit = (values, actions) => {
    dispatch(register(values))
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

  const handlePasswordChange = e => {
    const password = e.target.value;
    const result = zxcvbn(password);
    setPasswordStrength(result.score);
  };

  const getStrengthLabel = score => {
    switch (score) {
      case 0:
        return 'Very Weak';
      case 1:
        return 'Weak';
      case 2:
        return 'Fair';
      case 3:
        return 'Strong';
      case 4:
        return 'Very Strong';
      default:
        return '';
    }
  };

  return (
    <div className="container">
      <div className={css.block}>
        <h2 className={css.regTitle}>Register</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={FeedbackSchema}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <FieldBase name="name" label="Name" placeholder="Enter name" />
              <FieldBase
                name="email"
                label="Email"
                placeholder="Enter email"
                type="email"
                autoComplete="new-email"
              />
              <div className={css.passwordContainer}>
                <FieldBase
                  name="password"
                  label="Password"
                  placeholder="Enter password"
                  type="password"
                  autoComplete="new-password"
                  onChange={e => {
                    handlePasswordChange(e);
                    setFieldValue('password', e.target.value);
                  }}
                  value={values.password}
                />
                {passwordStrength !== null && (
                  <div className={css.passwordStrength}>
                    <div
                      className={`${css.strengthBar} ${
                        css[`strength${passwordStrength}`]
                      }`}
                    />
                    <span
                      className={`${css.strengthBar} ${
                        css[`strength${passwordStrength}`]
                      }`}
                    >
                      {getStrengthLabel(passwordStrength)}
                    </span>
                  </div>
                )}
              </div>
              <button type="submit" className={css.buttonForm}>
                Register
              </button>
            </Form>
          )}
        </Formik>

        <p className={css.link}>
          Already have an account? <br />
          <Link to="/login" className={css.linkreg}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
