import { ErrorMessage, Field } from 'formik';
import css from './FieldBase.module.css';
import clsx from 'clsx';

const FieldBase = ({
  label,
  name,
  type = 'text',
  placeholder,
  classNames = ['inputForm'],
  ...props
}) => {
  const combineClassNames = classNames => {
    return clsx(classNames.map(className => css[className]));
  };

  const inputClass = combineClassNames(classNames);

  return (
    <div className={css.groupForm}>
      <label htmlFor={name} className={css.labelForm}>
        {label}
      </label>
      <Field
        name={name}
        type={type}
        id={name}
        className={inputClass}
        placeholder={placeholder}
        {...props}
      />
      <ErrorMessage name={name} component="span" className={css.errorMessage} />
    </div>
  );
};

export default FieldBase;
