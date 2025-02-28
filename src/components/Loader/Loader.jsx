import { DotLoader } from 'react-spinners';
import css from './Loader.module.css';

const Loader = ({ size = 60 }) => {
  return (
    <div className={css.loaderContainer}>
      <DotLoader
        color="var(--lulu)"
        loading={true}
        size={size}
        speedMultiplier={2}
      />
    </div>
  );
};

export default Loader;
