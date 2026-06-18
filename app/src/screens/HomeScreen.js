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

export default function HomeScreen({ navigation }) {

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

  return (
    <View style={styles.screen}>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >

        {/* HEADER */}
        <View style={styles.header}>
          <Ionicons name="menu-outline" size={24} color="#111" />

          <Text style={styles.headerTitle}>
            FitLevel
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
            <View style={styles.profileCircle} />
          </TouchableOpacity>
        </View>

        {/* BANNER PRINCIPAL */}
        <FeaturedCard
          image={featuredCharacter.image}
          title={featuredCharacter.title}
        />

        {/* LISTA */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Lista
          </Text>

          <TouchableOpacity style={styles.seeMore}>
            <Text style={styles.seeMoreText}>›</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={listCharacters}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderAvatarItem}
          contentContainerStyle={styles.horizontalList}
        />

        {/* POPULAR */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Popular
          </Text>

          <TouchableOpacity style={styles.seeMore}>
            <Text style={styles.seeMoreText}>›</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={popularCharacters}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderCharacterCard}
          contentContainerStyle={styles.horizontalList}
        />

      </ScrollView>

      {/* BARRA INFERIOR */}
      <View style={styles.bottomNav}>

        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Ionicons name="home" size={24} color="#111" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
          <Ionicons name="search-outline" size={24} color="#777" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('IMCScreen')}>
          <Ionicons name="pulse-outline" size={24} color="#777" />
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
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
    color: '#111',
  },

  profileCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#d9d9d9',
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
    color: '#111',
  },

  seeMore: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  seeMoreText: {
    fontSize: 24,
    color: '#333',
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
    borderTopColor: '#eee',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});