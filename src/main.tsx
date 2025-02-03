import { createRoot } from 'react-dom/client';
import App from './app/app.tsx';
import { Provider } from 'react-redux';
import { store } from './app/store.ts';
import 'main.module.css';

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App />
    </Provider>,
);
