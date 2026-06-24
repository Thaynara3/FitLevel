import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { popularCharacters } from '../data/characters';
import { useTheme } from '../context/ThemeContext';

export default function SearchScreen({ navigation }) {
  const { theme } = useTheme();
  const [query, setQuery] = useState('');

  const filtered = popularCharacters.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase()) ||
    c.title.toLowerCase().includes(query.toLowerCase())
  );

  const s = makeStyles(theme);

  return (
    <View style={s.screen}>
      <View style={s.searchBar}>
        <Ionicons name="search-outline" size={18} color={theme.textHint} style={s.searchIcon} />
        <TextInput
          style={s.input}
          placeholder="Buscar por personagens"
          placeholderTextColor={theme.textHint}
          value={query}
          onChangeText={setQuery}
          autoFocus
        />
        {query.length > 0 && (
          <TouchableOpacity onPress={() => setQuery('')}>
            <Ionicons name="close-circle" size={18} color={theme.textHint} />
          </TouchableOpacity>
        )}
      </View>

      <ScrollView contentContainerStyle={s.results}>
        {filtered.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={s.resultRow}
            onPress={() => navigation.navigate('CharacterScreen', { character: item })}
          >
            <Image source={item.avatar} style={s.avatar} />
            <View style={s.resultInfo}>
              <Text style={s.resultName}>{item.name}</Text>
              <Text style={s.resultTitle}>{item.title}</Text>
            </View>
            <Ionicons name="chevron-forward" size={16} color={theme.textHint} />
          </TouchableOpacity>
        ))}
        {filtered.length === 0 && query.length > 0 && (
          <Text style={s.empty}>Nenhum personagem encontrado.</Text>
        )}
      </ScrollView>

      <View style={s.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Ionicons name="home-outline" size={24} color={theme.iconInactive} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
          <Ionicons name="search" size={24} color={theme.iconActive} />
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
    screen: { flex: 1, backgroundColor: theme.bg },
    searchBar: {
      flexDirection: 'row', alignItems: 'center',
      margin: 16, marginTop: 56,
      backgroundColor: theme.card, borderRadius: 12,
      paddingHorizontal: 12, paddingVertical: 10,
    },
    searchIcon: { marginRight: 8 },
    input: { flex: 1, fontSize: 15, color: theme.text },
    results: { paddingHorizontal: 16, paddingBottom: 120 },
    resultRow: {
      flexDirection: 'row', alignItems: 'center',
      paddingVertical: 12, borderBottomWidth: 0.5,
      borderBottomColor: theme.border, gap: 12,
    },
    avatar: { width: 48, height: 48, borderRadius: 24, backgroundColor: theme.card },
    resultInfo: { flex: 1 },
    resultName: { fontSize: 15, fontWeight: '600', color: theme.text },
    resultTitle: { fontSize: 13, color: theme.textMuted, marginTop: 2 },
    empty: { textAlign: 'center', color: theme.textHint, marginTop: 40, fontSize: 14 },
    bottomNav: {
      position: 'absolute', bottom: 0, left: 0, right: 0,
      height: 82, paddingBottom: 14, paddingTop: 10,
      borderTopWidth: 1, borderTopColor: theme.border,
      backgroundColor: theme.navBg,
      flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',
    },
  });
}
