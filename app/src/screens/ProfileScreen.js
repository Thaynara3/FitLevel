import { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const API_URL = 'http://192.168.15.138:3000';

export default function ProfileScreen({ navigation }) {
  const [imcHistory, setImcHistory] = useState([]);

  async function loadImcHistory() {
    try {
      const response = await fetch(`${API_URL}/imc-history`);
      const data = await response.json();

      setImcHistory(data);
    } catch (error) {
      console.log('Erro ao buscar histórico de IMC:', error);
    }
  }

  useEffect(() => {
    loadImcHistory();
  }, []);

  return (
    <View style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={26} color="#111" />
          </TouchableOpacity>

          <Text style={styles.title}>Meu Perfil</Text>

          <View style={{ width: 26 }} />
        </View>

        <View style={styles.avatar}>
          <Ionicons name="person" size={48} color="#777" />
        </View>

        <Text style={styles.name}>Usuário FitLevel</Text>
        <Text style={styles.subtitle}>
          Histórico de IMC e configurações do app
        </Text>

        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{imcHistory.length}</Text>
            <Text style={styles.statLabel}>IMCs</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statValue}>10</Text>
            <Text style={styles.statLabel}>Personagens</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Histórico de IMC</Text>

        {imcHistory.length === 0 ? (
          <View style={styles.emptyCard}>
            <Text style={styles.emptyText}>
              Nenhum IMC calculado ainda.
            </Text>
          </View>
        ) : (
          imcHistory
            .slice()
            .reverse()
            .map((item) => (
              <View key={item.id} style={styles.historyCard}>
                <View>
                  <Text style={styles.historyValue}>IMC {item.imc}</Text>
                  <Text style={styles.historyCategory}>{item.category}</Text>
                </View>

                <View style={styles.historyInfo}>
                  <Text style={styles.historyText}>
                    {item.height}m
                  </Text>
                  <Text style={styles.historyText}>
                    {item.weight}kg
                  </Text>
                </View>
              </View>
            ))
        )}

        <Text style={styles.sectionTitle}>Configurações</Text>

        <View style={styles.configCard}>
          <View style={styles.configRow}>
            <Ionicons name="moon-outline" size={22} color="#111" />
            <Text style={styles.configText}>Tema escuro</Text>
            <Text style={styles.configSoon}>Em breve</Text>
          </View>

          <View style={styles.configRow}>
            <Ionicons name="information-circle-outline" size={22} color="#111" />
            <Text style={styles.configText}>Sobre o FitLevel</Text>
            <Ionicons name="chevron-forward" size={18} color="#999" />
          </View>
        </View>
      </ScrollView>
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
    paddingHorizontal: 20,
    paddingBottom: 40,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 32,
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111',
  },

  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#f1f1f1',
    alignSelf: 'center',
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  name: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '700',
    color: '#111',
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 14,
    color: '#777',
    marginTop: 8,
  },

  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },

  statCard: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 14,
    padding: 20,
    marginHorizontal: 5,
    alignItems: 'center',
  },

  statValue: {
    fontSize: 26,
    fontWeight: '700',
    color: '#111',
  },

  statLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 6,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
    marginTop: 30,
    marginBottom: 12,
  },

  emptyCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 14,
    padding: 18,
  },

  emptyText: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
  },

  historyCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 14,
    padding: 16,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  historyValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111',
  },

  historyCategory: {
    fontSize: 13,
    color: '#777',
    marginTop: 4,
  },

  historyInfo: {
    alignItems: 'flex-end',
  },

  historyText: {
    fontSize: 13,
    color: '#555',
  },

  configCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 14,
    paddingHorizontal: 16,
    marginBottom: 20,
  },

  configRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },

  configText: {
    flex: 1,
    fontSize: 15,
    color: '#111',
    fontWeight: '500',
  },

  configSoon: {
    fontSize: 13,
    color: '#777',
  },
});