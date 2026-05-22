import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

<<<<<<< HEAD
export default function CharacterCard({ image, name, title, label = "Personagem" , onPress }) {
=======
export default function CharacterCard({ image, name, title, onPress }) {
>>>>>>> 9e736af0f86f6c07824dfd8cf64a72f4072fdac7
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <View style={styles.info}>
<<<<<<< HEAD
        <Text style={styles.label}>{label}</Text>
=======
        <Text style={styles.label}>Personagem Destaque</Text>
>>>>>>> 9e736af0f86f6c07824dfd8cf64a72f4072fdac7
        <Text style={styles.characterName}>{name}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 130,
    marginRight: 14,
  },
  image: {
    width: '100%',
    height: 125,
    borderRadius: 10,
    marginBottom: 8,
     resizeMode: 'cover',
  },
  info: {
    gap: 2,
  },
  label: {
    fontSize: 10,
    color: '#777',
  },
  characterName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111',
  },
  title: {
    fontSize: 12,
    color: '#333',
  },
});