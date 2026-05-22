import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { popularCharacters } from '../data/characters';

export default function SearchScreen({ navigation }) {
  const [query, setQuery] = useState('');

  const filtered = popularCharacters.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase()) ||
    c.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={styles.screen}>
      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={18} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Buscar por personagens"
          placeholderTextColor="#999"
          value={query}
          onChangeText={setQuery}
          autoFocus
        />
        {query.length > 0 && (
          <TouchableOpacity onPress={() => setQuery('')}>
            <Ionicons name="close-circle" size={18} color="#999" />
          </TouchableOpacity>
        )}
      </View>

      <ScrollView contentContainerStyle={styles.results}>
        {filtered.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.resultRow}
            onPress={() => navigation.navigate('CharacterScreen', { character: item })}
          >
            <Image source={item.avatar} style={styles.avatar} />
            <View style={styles.resultInfo}>
              <Text style={styles.resultName}>{item.name}</Text>
              <Text style={styles.resultTitle}>{item.title}</Text>
            </View>
            <Ionicons name="chevron-forward" size={16} color="#ccc" />
          </TouchableOpacity>
        ))}
        {filtered.length === 0 && query.length > 0 && (
          <Text style={styles.empty}>Nenhum personagem encontrado.</Text>
        )}
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Ionicons name="home-outline" size={24} color="#777" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
          <Ionicons name="search" size={24} color="#111" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('IMCScreen')}>
          <Ionicons name="pulse-outline" size={24} color="#777" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#fff' },
  searchBar: {
    flexDirection: 'row', alignItems: 'center',
    margin: 16, marginTop: 56,
    backgroundColor: '#f2f2f2', borderRadius: 12,
    paddingHorizontal: 12, paddingVertical: 10,
  },
  searchIcon: { marginRight: 8 },
  input: { flex: 1, fontSize: 15, color: '#111' },
  results: { paddingHorizontal: 16, paddingBottom: 120 },
  resultRow: {
    flexDirection: 'row', alignItems: 'center',
    paddingVertical: 12, borderBottomWidth: 0.5, borderBottomColor: '#eee', gap: 12,
  },
  avatar: { width: 48, height: 48, borderRadius: 24, backgroundColor: '#eee' },
  resultInfo: { flex: 1 },
  resultName: { fontSize: 15, fontWeight: '600', color: '#111' },
  resultTitle: { fontSize: 13, color: '#777', marginTop: 2 },
  empty: { textAlign: 'center', color: '#999', marginTop: 40, fontSize: 14 },

  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 82,
    paddingBottom: 14,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
