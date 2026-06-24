import { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

const API_URL = 'http://192.168.15.138:3000';

export default function ProfileScreen({ navigation }) {
  const { theme, isDark, toggleTheme } = useTheme();
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

  const s = makeStyles(theme);

  return (
    <View style={s.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={s.content}
      >
        <View style={s.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={26} color={theme.text} />
          </TouchableOpacity>
          <Text style={s.title}>Meu Perfil</Text>
          <View style={{ width: 26 }} />
        </View>

        <View style={s.avatar}>
          <Ionicons name="person" size={48} color={theme.textMuted} />
        </View>

        <Text style={s.name}>Usuário FitLevel</Text>
        <Text style={s.subtitle}>Histórico de IMC e configurações do app</Text>

        <View style={s.statsContainer}>
          <View style={s.statCard}>
            <Text style={s.statValue}>{imcHistory.length}</Text>
            <Text style={s.statLabel}>IMCs</Text>
          </View>
          <View style={s.statCard}>
            <Text style={s.statValue}>10</Text>
            <Text style={s.statLabel}>Personagens</Text>
          </View>
        </View>

        <Text style={s.sectionTitle}>Histórico de IMC</Text>

        {imcHistory.length === 0 ? (
          <View style={s.emptyCard}>
            <Text style={s.emptyText}>Nenhum IMC calculado ainda.</Text>
          </View>
        ) : (
          imcHistory
            .slice()
            .reverse()
            .map((item) => (
              <View key={item.id} style={s.historyCard}>
                <View>
                  <Text style={s.historyValue}>IMC {item.imc}</Text>
                  <Text style={s.historyCategory}>{item.category}</Text>
                </View>
                <View style={s.historyInfo}>
                  <Text style={s.historyText}>{item.height}m</Text>
                  <Text style={s.historyText}>{item.weight}kg</Text>
                </View>
              </View>
            ))
        )}

        <Text style={s.sectionTitle}>Configurações</Text>

        <View style={s.configCard}>
          <View style={s.configRow}>
            <Ionicons name="moon-outline" size={22} color={theme.text} />
            <Text style={s.configText}>Tema escuro</Text>
            <Switch
              value={isDark}
              onValueChange={toggleTheme}
              trackColor={{ false: '#ccc', true: '#555' }}
              thumbColor={isDark ? '#f0f0f0' : '#fff'}
            />
          </View>

          <View style={[s.configRow, s.lastRow]}>
            <Ionicons name="information-circle-outline" size={22} color={theme.text} />
            <Text style={s.configText}>Sobre o FitLevel</Text>
            <Ionicons name="chevron-forward" size={18} color={theme.textHint} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function makeStyles(theme) {
  return StyleSheet.create({
    screen: { flex: 1, backgroundColor: theme.bg },
    content: { paddingTop: 56, paddingHorizontal: 20, paddingBottom: 40 },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 32,
    },
    title: { fontSize: 20, fontWeight: '700', color: theme.text },
    avatar: {
      width: 96, height: 96, borderRadius: 48,
      backgroundColor: theme.card,
      alignSelf: 'center', marginBottom: 16,
      alignItems: 'center', justifyContent: 'center',
    },
    name: { textAlign: 'center', fontSize: 22, fontWeight: '700', color: theme.text },
    subtitle: { textAlign: 'center', fontSize: 14, color: theme.textMuted, marginTop: 8 },
    statsContainer: {
      flexDirection: 'row', justifyContent: 'space-between', marginTop: 30,
    },
    statCard: {
      flex: 1, backgroundColor: theme.card,
      borderRadius: 14, padding: 20, marginHorizontal: 5, alignItems: 'center',
    },
    statValue: { fontSize: 26, fontWeight: '700', color: theme.text },
    statLabel: { fontSize: 14, color: theme.textMuted, marginTop: 6 },
    sectionTitle: {
      fontSize: 18, fontWeight: '700', color: theme.text, marginTop: 30, marginBottom: 12,
    },
    emptyCard: { backgroundColor: theme.card, borderRadius: 14, padding: 18 },
    emptyText: { fontSize: 14, color: theme.textMuted, textAlign: 'center' },
    historyCard: {
      backgroundColor: theme.card, borderRadius: 14, padding: 16, marginBottom: 10,
      flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    },
    historyValue: { fontSize: 16, fontWeight: '700', color: theme.text },
    historyCategory: { fontSize: 13, color: theme.textMuted, marginTop: 4 },
    historyInfo: { alignItems: 'flex-end' },
    historyText: { fontSize: 13, color: theme.textSecondary },
    configCard: {
      backgroundColor: theme.card, borderRadius: 14,
      paddingHorizontal: 16, marginBottom: 20,
    },
    configRow: {
      flexDirection: 'row', alignItems: 'center',
      paddingVertical: 16, gap: 12,
      borderBottomWidth: 1, borderBottomColor: theme.border,
    },
    lastRow: { borderBottomWidth: 0 },
    configText: { flex: 1, fontSize: 15, color: theme.text, fontWeight: '500' },
  });
}
