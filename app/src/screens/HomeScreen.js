import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import FeaturedCard from '../components/home/FeaturedCard';
import AvatarItem from '../components/home/AvatarItem';
import CharacterCard from '../components/home/CharacterCard';

import {
  featuredCharacter,
  listCharacters,
  popularCharacters,
} from '../data/characters';

import { useTheme } from '../context/ThemeContext';
import { useFavorites } from '../context/FavoritesContext';

export default function HomeScreen({ navigation }) {
  const { theme, isDark, toggleTheme } = useTheme();
  const { isFavorite } = useFavorites();

  const favoriteCharacters = [...listCharacters, ...popularCharacters].filter(
    (c) => isFavorite(c.id)
  );

  function renderAvatarItem({ item }) {
    return (
      <AvatarItem
        avatar={item.avatar}
        name={item.name}
        onPress={() => navigation.navigate('CharacterScreen', { character: item })}
      />
    );
  }

  function renderCharacterCard({ item }) {
    return (
      <CharacterCard
        image={item.image}
        name={item.name}
        title={item.title}
        label="Popular"
        onPress={() => navigation.navigate('CharacterScreen', { character: item })}
      />
    );
  }

  function renderFavoriteCard({ item }) {
    return (
      <CharacterCard
        image={item.image}
        name={item.name}
        title={item.title}
        label="Favorito"
        onPress={() => navigation.navigate('CharacterScreen', { character: item })}
      />
    );
  }

  const s = makeStyles(theme);

  return (
    <View style={s.screen}>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={s.content}
      >

        {/* HEADER */}
        <View style={s.header}>
          <TouchableOpacity onPress={toggleTheme}>
            <Ionicons
              name={isDark ? 'sunny-outline' : 'moon-outline'}
              size={24}
              color={theme.iconActive}
            />
          </TouchableOpacity>

          <Text style={s.headerTitle}>FitLevel</Text>

          <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
            <View style={s.profileCircle} />
          </TouchableOpacity>
        </View>

        {/* BANNER PRINCIPAL */}
        <FeaturedCard
          image={featuredCharacter.image}
          title={featuredCharacter.title}
        />

        {/* MINHA LISTA (favoritos) */}
        {favoriteCharacters.length > 0 && (
          <>
            <View style={s.sectionHeader}>
              <Text style={s.sectionTitle}>Minha Lista</Text>
              <TouchableOpacity style={s.seeMore}>
                <Text style={s.seeMoreText}>›</Text>
              </TouchableOpacity>
            </View>

            <FlatList
              data={favoriteCharacters}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={renderFavoriteCard}
              contentContainerStyle={s.horizontalList}
            />
          </>
        )}

        {/* LISTA */}
        <View style={s.sectionHeader}>
          <Text style={s.sectionTitle}>Lista</Text>
          <TouchableOpacity style={s.seeMore}>
            <Text style={s.seeMoreText}>›</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={listCharacters}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderAvatarItem}
          contentContainerStyle={s.horizontalList}
        />

        {/* POPULAR */}
        <View style={s.sectionHeader}>
          <Text style={s.sectionTitle}>Popular</Text>
          <TouchableOpacity style={s.seeMore}>
            <Text style={s.seeMoreText}>›</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={popularCharacters}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderCharacterCard}
          contentContainerStyle={s.horizontalList}
        />

      </ScrollView>

      {/* BARRA INFERIOR */}
      <View style={s.bottomNav}>

        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Ionicons name="home" size={24} color={theme.iconActive} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
          <Ionicons name="search-outline" size={24} color={theme.iconInactive} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('IMCScreen')}>
          <Ionicons name="pulse-outline" size={24} color={theme.iconInactive} />
        </TouchableOpacity>

      </View>
    </View>
  );
}

function makeStyles(theme) {
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: theme.bg,
    },
    content: {
      paddingTop: 56,
      paddingHorizontal: 16,
      paddingBottom: 120,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: '700',
      color: theme.text,
    },
    profileCircle: {
      width: 28,
      height: 28,
      borderRadius: 14,
      backgroundColor: theme.bgTertiary,
    },
    sectionHeader: {
      marginTop: 18,
      marginBottom: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: '700',
      color: theme.text,
    },
    seeMore: {
      width: 24,
      height: 24,
      alignItems: 'center',
      justifyContent: 'center',
    },
    seeMoreText: {
      fontSize: 24,
      color: theme.textSecondary,
      lineHeight: 24,
    },
    horizontalList: {
      paddingRight: 4,
    },
    bottomNav: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 82,
      paddingBottom: 14,
      paddingTop: 10,
      borderTopWidth: 1,
      borderTopColor: theme.border,
      backgroundColor: theme.navBg,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
  });
}
