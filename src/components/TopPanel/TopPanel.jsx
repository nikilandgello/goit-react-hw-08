import { useContext } from 'react';
import css from './TopPanel.module.css';
import { ThemeContext } from '../../context/ThemeContext';

const TopPanel = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={css.topPanel}>
      <a className={css.logo} href="/">
        Phonebook
      </a>
      <button onClick={toggleTheme} className={css.buttonTheme}>
        {theme === 'dark' ? (
          <svg width={30} height={30} className={css.iconDark}>
            <use href="/sprite.svg#icon-moon"></use>
          </svg>
        ) : (
          <svg width={30} height={30} className={css.iconLight}>
            <use href="/sprite.svg#icon-sun"></use>
          </svg>
        )}
      </button>
    </div>
  );
};

export default TopPanel;
