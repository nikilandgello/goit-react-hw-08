import Select from 'react-select';

const CustomSelect = ({ filer, handleChange, options }) => {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: 'var(--lulu)',
      borderTopLeftRadius: '5px',
      borderBottomLeftRadius: '5px',
      borderTopRightRadius: '0px',
      borderBottomRightRadius: '0px',
      marginRight: '5px',
      height: '40px',
      width: '120px',
      outline: 'none',
      color: 'var(--cardinal)',
      boxShadow: 'var(--botdeaux) 1px 1px 9px,var(--botdeaux) 1px -1px 9px',
      transition: 'all 0.25s',
      border: state.isFocused
        ? '1px solid var(--light-cardinal)'
        : '1px solid var(--botdeaux)',
      '&:hover': { border: '1px solid var(--light-cardinal)' },
      '&:focus-within': { border: '1px solid var(--light-cardinal)' },
    }),
    menu: provided => ({
      ...provided,
      backgroundColor: 'var(--lulu)',
      borderTopLeftRadius: '5px',
      borderBottomLeftRadius: '5px',
      borderTopRightRadius: '0px',
      borderBottomRightRadius: '0px',
      width: '120px',
    }),
    option: (provided, state) => ({
      ...provided,
      fontWeight: '500',
      backgroundColor: state.isSelected
        ? 'var(--lulu-dark)'
        : state.isFocused
        ? 'var(--lulu-dark)'
        : 'var(--lulu)',
      color:
        state.isSelected || state.isFocused
          ? 'var(--light-cardinal)'
          : 'var(--cardinal)',
      padding: 10,
      cursor: 'pointer',
      transition: 'all 0.25s',
      '&:active': {
        backgroundColor: state.isSelected
          ? 'var(--lulu-dark)'
          : state.isFocused
          ? 'var(--lulu-dark)'
          : 'var(--lulu)',
      },
    }),
    singleValue: provided => ({
      ...provided,
      color: 'var(--cardinal)',
      fontSize: '16px',
      fontWeight: '500',
    }),
    input: provided => ({
      ...provided,
      color: 'var(--cardinal)',
      fontWeight: '400',
      '&::placeholder': {
        color: 'var(--cardinal)',
      },
    }),
    noOptionsMessage: provided => ({
      ...provided,
      color: 'var(--cardinal)',
      fontSize: '15px',
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: state.isFocused ? 'var(--light-cardinal)' : 'var(--cardinal)',
      transform: state.selectProps.menuIsOpen
        ? 'rotate(0deg)'
        : 'rotate(180deg)',
      transition: 'all 0.25s',
      '&:hover': { color: 'var(--light-cardinal)' },
    }),
    indicatorSeparator: provided => ({
      ...provided,
      backgroundColor: 'var(--cardinal)',
      width: '1px',
    }),
  };

  return (
    <div>
      <Select
        value={options.find(option => option.value === filer)}
        onChange={handleChange}
        options={options}
        styles={customStyles}
      />
    </div>
  );
};

export default CustomSelect;
