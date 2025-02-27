import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import {
  selectFilterBy,
  selectNameFilter,
} from '../../redux/filters/selectors.js';
import { changeFilter, changeFilterBy } from '../../redux/filters/slice.js';
import CustomSelect from '../CustomSelect.jsx';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const filterBy = useSelector(selectFilterBy);

  const selectOptions = [
    { value: 'name', label: 'Name' },
    { value: 'number', label: 'Number' },
  ];

  const handleChange = selectedOption => {
    dispatch(changeFilterBy(selectedOption.value));
  };

  return (
    <div className="container">
      <div className={css.searchBox}>
        <p className={css.text}>Find contacts by {filterBy}</p>

        <div className={css.filterBox}>
          <CustomSelect
            filer={filterBy}
            options={selectOptions}
            handleChange={handleChange}
          />

          <input
            className={css.input}
            type="text"
            value={filter}
            placeholder="enter name"
            onChange={e => dispatch(changeFilter(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
