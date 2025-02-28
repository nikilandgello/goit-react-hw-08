import AppBar from './AppBar/AppBar';
import { Suspense } from 'react';
import Loader from './Loader/Loader';

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </>
  );
};

export default Layout;
