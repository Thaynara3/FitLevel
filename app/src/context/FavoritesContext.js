import { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FavoritesContext = createContext();

const STORAGE_KEY = 'fitlevel_favorites';

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((val) => {
      if (val) setFavorites(JSON.parse(val));
    });
  }, []);

  function save(list) {
    setFavorites(list);
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }

  function toggleFavorite(character) {
    const exists = favorites.some((f) => f.id === character.id);
    if (exists) {
      save(favorites.filter((f) => f.id !== character.id));
    } else {
      // salva só os campos necessários para evitar problemas com require() de imagem
      save([...favorites, { id: character.id }]);
    }
  }

  function isFavorite(id) {
    return favorites.some((f) => f.id === id);
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
