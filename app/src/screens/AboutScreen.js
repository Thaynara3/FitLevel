import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

export default function AboutScreen({ navigation }) {
  const { theme } = useTheme();
  const s = makeStyles(theme);

  return (
    <View style={s.screen}>
      <ScrollView contentContainerStyle={s.content}>
        <View style={s.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={26} color={theme.text} />
          </TouchableOpacity>

          <Text style={s.title}>Sobre o FitLevel</Text>

          <View style={{ width: 26 }} />
        </View>

        <View style={s.card}>

          <Text style={s.text}>
            O FitLevel é um aplicativo mobile desenvolvido para o Projeto Integrador 3A.
          </Text>

          <Text style={s.text}>
            O objetivo do app é auxiliar usuários a conhecerem treinos inspirados em personagens e acompanhar seu IMC.
          </Text>

          <Text style={s.text}>
            O projeto utiliza React Native com Expo no frontend e Node.js com Express no backend.
          </Text>

          <Text style={s.version}>Versão 1.0.0</Text>
        </View>
      </ScrollView>
    </View>
  );
}

function makeStyles(theme) {
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: theme.bg,
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
      marginBottom: 28,
    },

    title: {
      fontSize: 20,
      fontWeight: '700',
      color: theme.text,
    },

    card: {
      backgroundColor: theme.card,
      borderRadius: 16,
      padding: 20,
    },

    text: {
      fontSize: 15,
      color: theme.textSecondary,
      lineHeight: 22,
      marginBottom: 14,
    },

    version: {
      fontSize: 13,
      color: theme.textMuted,
      marginTop: 10,
    },
  });
}