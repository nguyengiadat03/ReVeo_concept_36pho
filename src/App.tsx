import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './app/providers/AuthProvider';
import { CreditsProvider } from './app/providers/CreditsProvider';
import { ThemeProvider } from './app/providers/ThemeProvider';
import { I18nProvider } from './app/providers/I18nProvider';
import { router } from './app/router';

function App() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <AuthProvider>
          <CreditsProvider>
            <RouterProvider router={router} />
          </CreditsProvider>
        </AuthProvider>
      </I18nProvider>
    </ThemeProvider>
  );
}

export default App;
