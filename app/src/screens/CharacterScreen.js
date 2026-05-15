import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CharacterScreen({ route, navigation }) {
  const { character } = route.params;

  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Personagem {character.name}</Text>
        </View>

        <View style={styles.infoTable}>
          <InfoRow label="Foco" value={character.focus} />
          <InfoRow label="Nível" value={character.level} />
          <InfoRow label="Quantas vezes na semana" value={character.frequency} />
          <InfoRow label="Descrição" value={character.description} muted />
        </View>

        <View style={styles.workoutHeader}>
          <Text style={styles.workoutCol}>Treino</Text>
          <Text style={styles.workoutColRight}>DESCRIÇÃO</Text>
          <Text style={styles.workoutColSeries}>Series</Text>
        </View>

        {character.workouts && character.workouts.map((workout) => (
          <View key={workout.id} style={styles.workoutRow}>
            <Image source={{ uri: character.image }} style={styles.workoutImage} />
            <View style={styles.workoutInfo}>
              <Text style={styles.workoutName}>{workout.name}</Text>
              <Text style={styles.workoutDesc}>{workout.description}</Text>
            </View>
            {workout.sets ? (
              <Text style={styles.workoutSets}>{workout.sets}</Text>
            ) : (
              <View style={styles.workoutSetsEmpty} />
            )}
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

function InfoRow({ label, value, muted }) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={[styles.infoValue, muted && styles.infoValueMuted]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#fff' },
  content: { paddingTop: 56, paddingHorizontal: 20, paddingBottom: 100 },
  header: { marginBottom: 20 },
  title: { fontSize: 22, fontWeight: '700', color: '#111' },
  infoTable: { marginBottom: 20 },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10, borderBottomWidth: 0.5, borderBottomColor: '#eee' },
  infoLabel: { fontSize: 13, color: '#555', flex: 1 },
  infoValue: { fontSize: 13, color: '#111', fontWeight: '500', flex: 2, textAlign: 'right' },
  infoValueMuted: { color: '#888', fontWeight: '400' },
  workoutHeader: { flexDirection: 'row', marginBottom: 10, paddingBottom: 6, borderBottomWidth: 1, borderBottomColor: '#eee' },
  workoutCol: { fontSize: 12, fontWeight: '600', color: '#333', flex: 1 },
  workoutColRight: { fontSize: 12, fontWeight: '600', color: '#333', flex: 2 },
  workoutColSeries: { fontSize: 12, fontWeight: '600', color: '#333', width: 48, textAlign: 'right' },
  workoutRow: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 18, gap: 12 },
  workoutImage: { width: 56, height: 56, borderRadius: 8, backgroundColor: '#eee' },
  workoutInfo: { flex: 1 },
  workoutName: { fontSize: 13, fontWeight: '600', color: '#111', marginBottom: 4 },
  workoutDesc: { fontSize: 12, color: '#555', lineHeight: 18 },
  workoutSets: { width: 48, textAlign: 'right', fontSize: 13, fontWeight: '600', color: '#111' },
  workoutSetsEmpty: { width: 48 },
  backButton: {
    position: 'absolute', bottom: 0, left: 0, right: 0,
    backgroundColor: '#111', paddingVertical: 18,
    alignItems: 'center',
  },
  backButtonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
