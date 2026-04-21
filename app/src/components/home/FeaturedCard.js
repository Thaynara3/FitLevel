import { ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function FeaturedCard({ image, title }) {
  return (
    <ImageBackground
      source={{ uri: image }}
      style={styles.container}
      imageStyle={styles.image}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 130,
    borderRadius: 14,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  image: {
    borderRadius: 14,
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.28)',
    padding: 14,
  },
  title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '700',
    width: '70%',
  },
});