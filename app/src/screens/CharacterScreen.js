import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';
import { useFavorites } from '../context/FavoritesContext';

export default function CharacterScreen({ route, navigation }) {
  const { character } = route.params || {};
  const { theme } = useTheme();
  const { isFavorite, toggleFavorite } = useFavorites();

  if (!character) {
    return (
      <View style={{ flex: 1, backgroundColor: theme.bg }}>
        <Text style={{ color: theme.text }}>Personagem não encontrado.</Text>
      </View>
    );
  }

  const favorited = isFavorite(character.id);
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

          <Text style={s.headerTitle}>Personagem</Text>

          <TouchableOpacity onPress={() => toggleFavorite(character)}>
            <Ionicons
              name={favorited ? 'heart' : 'heart-outline'}
              size={26}
              color={favorited ? '#e53935' : theme.text}
            />
          </TouchableOpacity>
        </View>

        <View style={s.profile}>
          <Image source={character.image} style={s.image} />
          <View style={s.profileInfo}>
            <Text style={s.name}>{character.name}</Text>
            <Text style={s.tag}>{character.title}</Text>
          </View>
        </View>

        <View style={s.infoCard}>
          <InfoRow label="Foco" value={character.focus || character.title} theme={theme} />
          <InfoRow label="Nível" value={character.level || 'Não informado'} theme={theme} />
          <InfoRow label="Frequência" value={character.frequency || 'Não informado'} theme={theme} />
          <InfoRow label="Descrição" value={character.description || 'Sem descrição.'} theme={theme} last />
        </View>

        <View style={s.trainingCard}>
          <View style={s.trainingHeader}>
            <Text style={s.trainingTitle}>Treino</Text>
            <Text style={s.trainingTitle}>Descrição</Text>
            <Text style={s.trainingSeriesTitle}>Séries</Text>
          </View>

          {character.workouts?.map((workout) => (
            <View key={workout.id} style={s.workoutRow}>
              <View style={s.workoutImageBox}>
                <Ionicons name="barbell-outline" size={32} color={theme.textSecondary} />
              </View>

              <View style={s.workoutInfo}>
                <Text style={s.workoutName}>{workout.name}</Text>
                <Text style={s.workoutDesc}>{workout.description}</Text>

                <TouchableOpacity
                  style={s.videoButton}
                  onPress={() => Linking.openURL(workout.videoUrl)}
                >
                  <Ionicons name="play-circle" size={18} color={theme.buttonText} />
                  <Text style={s.videoButtonText}>Ver vídeo</Text>
                </TouchableOpacity>
              </View>

              <Text style={s.series}>{workout.series}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity style={s.backButton} onPress={() => navigation.goBack()}>
        <Text style={s.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

function InfoRow({ label, value, last, theme }) {
  const s = makeStyles(theme);
  return (
    <View style={[s.infoRow, last && s.lastRow]}>
      <Text style={s.infoLabel}>{label}</Text>
      <Text style={s.infoValue}>{value}</Text>
    </View>
  );
}

function makeStyles(theme) {
  return StyleSheet.create({
    screen: { flex: 1, backgroundColor: theme.bg },
    content: { paddingTop: 48, paddingHorizontal: 18, paddingBottom: 120 },
    header: {
      flexDirection: 'row', alignItems: 'center',
      justifyContent: 'space-between', marginBottom: 24,
    },
    headerTitle: { fontSize: 18, fontWeight: '700', color: theme.text },
    profile: { flexDirection: 'row', alignItems: 'center', marginBottom: 22 },
    image: { width: 130, height: 130, borderRadius: 16, resizeMode: 'cover', marginRight: 18 },
    profileInfo: { flex: 1 },
    name: { fontSize: 26, fontWeight: '800', color: theme.text, marginBottom: 8 },
    tag: {
      alignSelf: 'flex-start',
      backgroundColor: theme.bgTertiary,
      paddingHorizontal: 12, paddingVertical: 6,
      borderRadius: 8, fontSize: 13, color: theme.textSecondary, fontWeight: '600',
    },
    infoCard: {
      borderWidth: 1, borderColor: theme.border,
      borderRadius: 14, marginBottom: 20, backgroundColor: theme.bg,
    },
    infoRow: {
      flexDirection: 'row', paddingVertical: 16, paddingHorizontal: 14,
      borderBottomWidth: 1, borderBottomColor: theme.border,
    },
    lastRow: { borderBottomWidth: 0 },
    infoLabel: { width: 120, fontSize: 13, fontWeight: '700', color: theme.text },
    infoValue: { flex: 1, fontSize: 13, color: theme.textSecondary, lineHeight: 19 },
    trainingCard: {
      borderWidth: 1, borderColor: theme.border,
      borderRadius: 14, backgroundColor: theme.bg, paddingHorizontal: 12,
    },
    trainingHeader: {
      flexDirection: 'row', paddingVertical: 14,
      borderBottomWidth: 1, borderBottomColor: theme.border,
    },
    trainingTitle: { flex: 1, fontSize: 13, fontWeight: '700', color: theme.text },
    trainingSeriesTitle: {
      width: 60, textAlign: 'right', fontSize: 13, fontWeight: '700', color: theme.text,
    },
    workoutRow: {
      flexDirection: 'row', alignItems: 'center',
      paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: theme.border,
    },
    workoutImageBox: {
      width: 64, height: 64, borderRadius: 10,
      backgroundColor: theme.card, alignItems: 'center',
      justifyContent: 'center', marginRight: 12,
    },
    workoutInfo: { flex: 1 },
    workoutName: { fontSize: 14, fontWeight: '700', color: theme.text, marginBottom: 4 },
    workoutDesc: { fontSize: 12, color: theme.textSecondary, lineHeight: 17 },
    series: {
      width: 60, textAlign: 'right', fontSize: 14,
      fontWeight: '700', color: theme.text, alignSelf: 'flex-start', marginTop: 6,
    },
    backButton: {
      position: 'absolute', bottom: 24, left: 18, right: 18,
      backgroundColor: theme.buttonBg, paddingVertical: 16,
      borderRadius: 10, alignItems: 'center',
    },
    backButtonText: { color: theme.buttonText, fontSize: 16, fontWeight: '700' },
    videoButton: {
      marginTop: 10, backgroundColor: theme.buttonBg,
      alignSelf: 'flex-start', paddingHorizontal: 12, paddingVertical: 8,
      borderRadius: 8, flexDirection: 'row', alignItems: 'center', gap: 6,
    },
    videoButtonText: { color: theme.buttonText, fontSize: 12, fontWeight: '600' },
  });
}
