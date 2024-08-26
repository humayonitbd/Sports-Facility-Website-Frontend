import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import './index.css'
import { store } from './redux/store';
import router from './routes/routes';
import ScrollToTopButton from './components/ui/ScrollToTopButton';



createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ScrollToTopButton />
    </Provider>
  </StrictMode>
);
