import { Link } from 'react-router-dom';
import css from './NotFound.module.css';
import clsx from 'clsx';

const NotFound = () => {
  return (
    <div className={clsx('container', 'background')}>
      <div className={css.blockNotFound}>
        <Link to="/" className={css.goHome}>
          Go Home
        </Link>
        <div className={css.notFoundText}>Oops! Page not found</div>
      </div>
    </div>
  );
};

export default NotFound;
