import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from '/src/components/App.jsx';
import { ThemeProvider } from './context/ThemeContext';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
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
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
