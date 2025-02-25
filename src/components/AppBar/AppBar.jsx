import css from './AppBar.module.css';
import clsx from 'clsx';
import Navigation from '../Navigation/Navigation';
import TopPanel from '../TopPanel/TopPanel';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';

const AppBar = () => {
  return (
    <header className={css.header}>
      <div className={clsx('container', css.containerHeader)}>
        <TopPanel />
        <Navigation />
        <AuthNav />
        <UserMenu />
      </div>
    </header>
  );
};

export default AppBar;
