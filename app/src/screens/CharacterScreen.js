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

export default function CharacterScreen({ route, navigation }) {
  const { character } = route.params || {};

  if (!character) {
    return (
      <View style={styles.screen}>
        <Text>Personagem não encontrado.</Text>
      </View>
    );
  }

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

          <Text style={styles.headerTitle}>Personagem</Text>

          <View style={{ width: 26 }} />
        </View>

        <View style={styles.profile}>
          <Image source={character.image} style={styles.image} />

          <View style={styles.profileInfo}>
            <Text style={styles.name}>{character.name}</Text>
            <Text style={styles.tag}>{character.title}</Text>
          </View>
        </View>

        <View style={styles.infoCard}>
          <InfoRow label="Foco" value={character.focus || character.title} />
          <InfoRow label="Nível" value={character.level || 'Não informado'} />
          <InfoRow label="Frequência" value={character.frequency || 'Não informado'} />
          <InfoRow label="Descrição" value={character.description || 'Sem descrição.'} last />
        </View>

        <View style={styles.trainingCard}>
          <View style={styles.trainingHeader}>
            <Text style={styles.trainingTitle}>Treino</Text>
            <Text style={styles.trainingTitle}>Descrição</Text>
            <Text style={styles.trainingSeriesTitle}>Séries</Text>
          </View>

          {character.workouts?.map((workout) => (
            <View key={workout.id} style={styles.workoutRow}>
              <View style={styles.workoutImageBox}>
                <Ionicons name="barbell-outline" size={32} color="#555" />
              </View>

              <View style={styles.workoutInfo}>
                <Text style={styles.workoutName}>{workout.name}</Text>

                <Text style={styles.workoutDesc}>
                  {workout.description}
                </Text>

                <TouchableOpacity
                  style={styles.videoButton}
                  onPress={() => Linking.openURL(workout.videoUrl)}
                >
                  <Ionicons
                    name="play-circle"
                    size={18}
                    color="#fff"
                  />

                  <Text style={styles.videoButtonText}>
                    Ver vídeo
                  </Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.series}>{workout.series}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

function InfoRow({ label, value, last }) {
  return (
    <View style={[styles.infoRow, last && styles.lastRow]}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    paddingTop: 48,
    paddingHorizontal: 18,
    paddingBottom: 120,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
  },

  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 22,
  },

  image: {
    width: 130,
    height: 130,
    borderRadius: 16,
    resizeMode: 'cover',
    marginRight: 18,
  },

  profileInfo: {
    flex: 1,
  },

  name: {
    fontSize: 26,
    fontWeight: '800',
    color: '#111',
    marginBottom: 8,
  },

  tag: {
    alignSelf: 'flex-start',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    fontSize: 13,
    color: '#333',
    fontWeight: '600',
  },

  infoCard: {
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderRadius: 14,
    marginBottom: 20,
    backgroundColor: '#fff',
  },

  infoRow: {
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  lastRow: {
    borderBottomWidth: 0,
  },

  infoLabel: {
    width: 120,
    fontSize: 13,
    fontWeight: '700',
    color: '#111',
  },

  infoValue: {
    flex: 1,
    fontSize: 13,
    color: '#555',
    lineHeight: 19,
  },

  trainingCard: {
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderRadius: 14,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
  },

  trainingHeader: {
    flexDirection: 'row',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  trainingTitle: {
    flex: 1,
    fontSize: 13,
    fontWeight: '700',
    color: '#111',
  },

  trainingSeriesTitle: {
    width: 60,
    textAlign: 'right',
    fontSize: 13,
    fontWeight: '700',
    color: '#111',
  },

  workoutRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  workoutImageBox: {
    width: 64,
    height: 64,
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  workoutInfo: {
    flex: 1,
  },

  workoutName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111',
    marginBottom: 4,
  },

  workoutDesc: {
    fontSize: 12,
    color: '#333',
    lineHeight: 17,
  },

  series: {
    width: 60,
    textAlign: 'right',
    fontSize: 14,
    fontWeight: '700',
    color: '#111',
    alignSelf: 'flex-start',
    marginTop: 6,
  },

  backButton: {
    position: 'absolute',
    bottom: 24,
    left: 18,
    right: 18,
    backgroundColor: '#000',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
  },

  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },

  /* BOTAO DE VIDEO */
  videoButton: {
  marginTop: 10,
  backgroundColor: '#111',
  alignSelf: 'flex-start',
  paddingHorizontal: 12,
  paddingVertical: 8,
  borderRadius: 8,
  flexDirection: 'row',
  alignItems: 'center',
  gap: 6,
},

videoButtonText: {
  color: '#fff',
  fontSize: 12,
  fontWeight: '600',
},
});