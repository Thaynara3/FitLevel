import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';

export default function CharacterCard({ image, name, title, label = 'Personagem', onPress }) {
  const { theme } = useTheme();

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <View style={styles.info}>
        <Text style={[styles.label, { color: theme.textMuted }]}>{label}</Text>
        <Text style={[styles.characterName, { color: theme.text }]}>{name}</Text>
        <Text style={[styles.title, { color: theme.textSecondary }]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { width: 130, marginRight: 14 },
  image: { width: '100%', height: 125, borderRadius: 10, marginBottom: 8, resizeMode: 'cover' },
  info: { gap: 2 },
  label: { fontSize: 10 },
  characterName: { fontSize: 14, fontWeight: '600' },
  title: { fontSize: 12 },
});