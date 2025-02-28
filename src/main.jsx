import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ThemeProvider } from './context/ThemeContext';
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from './components/App';
import Loader from './components/Loader/Loader';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
          <ThemeProvider>
            <Toaster
              position="top-center"
              reverseOrder={false}
              containerStyle={{
                zIndex: 9999,
              }}
              toastOptions={{
                style: {
                  backgroundColor: 'var(--botdeaux)',
                  color: 'var(--mavka)',
                },
              }}
            />
            <App />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
