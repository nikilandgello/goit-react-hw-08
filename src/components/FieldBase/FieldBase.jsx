import { ErrorMessage, Field } from 'formik';
import css from './FieldBase.module.css';
import clsx from 'clsx';
import { useState } from 'react';
import { Eye, EyeClosed } from 'lucide-react';

const FieldBase = ({
  label,
  name,
  type = 'text',
  placeholder,
  classNames = ['inputForm'],
  ...props
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev);
  };

  const combineClassNames = classNames => {
    if (type === 'password') {
      return clsx(
        css.inputPassword,
        classNames.map(className => css[className])
      );
    }
    return clsx(classNames.map(className => css[className]));
  };

  const inputClass = combineClassNames(classNames);
  const isPasswordField = type === 'password';

  return (
    <div className={css.groupForm}>
      <label htmlFor={name} className={css.labelForm}>
        {label}
      </label>
      <div className={css.inputContainer}>
        <Field
          name={name}
          type={type && isPasswordVisible ? 'text' : type}
          id={name}
          className={inputClass}
          placeholder={placeholder}
          {...props}
        />
        {isPasswordField && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className={css.eyeButton}
          >
            {isPasswordVisible ? (
              <Eye size={20} color="var(--cardinal)" />
            ) : (
              <EyeClosed size={20} color="var(--cardinal)" />
            )}
          </button>
        )}
      </div>
      <ErrorMessage name={name} component="span" className={css.errorMessage} />
    </div>
  );
};

export default FieldBase;
