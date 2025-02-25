import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { selectNameFilter } from '../../redux/filters/selectors.js';
import { changeFilter } from '../../redux/filters/slice.js';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className="container">
      <div className={css.searchBox}>
        <p className={css.text}>Find contacts by first name</p>
        <input
          className={css.input}
          type="text"
          value={filter}
          placeholder="enter first name"
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </div>
    </div>
  );
};

export default SearchBox;
