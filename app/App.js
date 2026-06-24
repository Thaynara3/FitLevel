import AppNavigator from './src/navigation/AppNavigator';
import { ThemeProvider } from './src/context/ThemeContext';
import { FavoritesProvider } from './src/context/FavoritesContext';

export default function App() {
  return (
    <ThemeProvider>
      <FavoritesProvider>
        <AppNavigator />
      </FavoritesProvider>
    </ThemeProvider>
  );
}
