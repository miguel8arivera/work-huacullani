import { RouterProvider } from 'react-router-dom';
import './App.css';
import { ThemeConfig } from './config/theme.config';
import { router } from './routes';

function App() {
  return (
    <ThemeConfig>
      <RouterProvider router={router} />
    </ThemeConfig>
  );
}

export default App;
