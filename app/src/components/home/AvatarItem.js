import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../../context/ThemeContext';

export default function AvatarItem({ avatar, name, onPress }) {
  const { theme } = useTheme();

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={avatar} style={styles.image} />
      <Text style={[styles.name, { color: theme.textSecondary }]} numberOfLines={2}>
        {name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { width: 72, marginRight: 14, alignItems: 'center' },
  image: { width: 58, height: 58, borderRadius: 29, marginBottom: 8, resizeMode: 'cover' },
  name: { textAlign: 'center', fontSize: 11 },
});
