import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

const API_URL = 'http://192.168.15.138:3000';

function getIMCCategory(imc) {
  if (imc < 18.5) return { label: 'Abaixo do Peso', color: '#3b82f6' };
  if (imc < 25) return { label: 'Peso Normal', color: '#22c55e' };
  if (imc < 30) return { label: 'Sobrepeso', color: '#f59e0b' };
  return { label: 'Obesidade', color: '#ef4444' };
}

export default function IMCScreen({ navigation }) {
  const { theme } = useTheme();
  const [gender, setGender] = useState('female');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState(null);

  async function calculate() {
    const h = parseFloat(height.replace(',', '.'));
    const w = parseFloat(weight.replace(',', '.'));

    if (!h || !w || h <= 0 || w <= 0) {
      setResult(null);
      return;
    }

    try {
      const response = await fetch(`${API_URL}/imc`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ height: h, weight: w, gender }),
      });

      const data = await response.json();
      if (!response.ok) return;
      setResult(data.imc);
    } catch (error) {
      console.log('Erro ao conectar com a API:', error);
    }
  }

  const category = result ? getIMCCategory(result) : null;
  const s = makeStyles(theme);

  return (
    <KeyboardAvoidingView
      style={s.screen}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={s.content}
        keyboardShouldPersistTaps="handled"
      >
        <View style={s.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={24} color={theme.text} />
          </TouchableOpacity>
          <Text style={s.title}>Calcule seu IMC</Text>
          <View style={{ width: 24 }} />
        </View>

        <Text style={s.label}>Você é:</Text>

        <View style={s.genderRow}>
          <TouchableOpacity style={s.radioOption} onPress={() => setGender('female')}>
            <View style={[s.radio, gender === 'female' && s.radioSelected]} />
            <Text style={s.radioLabel}>Mulher</Text>
          </TouchableOpacity>

          <TouchableOpacity style={s.radioOption} onPress={() => setGender('male')}>
            <View style={[s.radio, gender === 'male' && s.radioSelected]} />
            <Text style={s.radioLabel}>Homem</Text>
          </TouchableOpacity>
        </View>

        <Text style={s.label}>Altura (m)</Text>
        <TextInput
          style={s.input}
          placeholder="Ex: 1.75"
          placeholderTextColor={theme.textHint}
          keyboardType="decimal-pad"
          value={height}
          onChangeText={setHeight}
        />

        <Text style={s.label}>Peso (Kg)</Text>
        <TextInput
          style={s.input}
          placeholder="Ex: 70"
          placeholderTextColor={theme.textHint}
          keyboardType="decimal-pad"
          value={weight}
          onChangeText={setWeight}
        />

        <TouchableOpacity style={s.button} onPress={calculate}>
          <Text style={s.buttonText}>Calcular IMC</Text>
        </TouchableOpacity>

        {result !== null && category && (
          <View style={s.resultCard}>
            <Text style={s.resultTitle}>Seu Resultado</Text>
            <Text style={s.resultValue}>{result.toFixed(1)}</Text>
            <Text style={[s.resultCategory, { color: category.color }]}>
              {category.label}
            </Text>
            <Text style={s.resultNote}>
              O IMC é um indicador usado para avaliar se você está no peso ideal.
              Consulte um profissional de saúde para recomendações personalizadas.
            </Text>
          </View>
        )}
      </ScrollView>

      <View style={s.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Ionicons name="home-outline" size={24} color={theme.iconInactive} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
          <Ionicons name="search-outline" size={24} color={theme.iconInactive} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('IMCScreen')}>
          <Ionicons name="pulse" size={24} color={theme.iconActive} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

function makeStyles(theme) {
  return StyleSheet.create({
    screen: { flex: 1, backgroundColor: theme.bg },
    content: { paddingTop: 56, paddingHorizontal: 20, paddingBottom: 120 },
    header: {
      flexDirection: 'row', alignItems: 'center',
      justifyContent: 'space-between', marginBottom: 28,
    },
    title: { fontSize: 18, fontWeight: '700', color: theme.text },
    label: { fontSize: 14, fontWeight: '500', color: theme.text, marginBottom: 8, marginTop: 16 },
    genderRow: { flexDirection: 'row', gap: 24, marginBottom: 4 },
    radioOption: { flexDirection: 'row', alignItems: 'center', gap: 8 },
    radio: {
      width: 18, height: 18, borderRadius: 9,
      borderWidth: 2, borderColor: theme.text,
    },
    radioSelected: {
      backgroundColor: theme.text, borderWidth: 4, borderColor: theme.bg,
    },
    radioLabel: { fontSize: 14, color: theme.text },
    input: {
      borderWidth: 1, borderColor: theme.borderMid,
      borderRadius: 10, paddingHorizontal: 14, paddingVertical: 12,
      fontSize: 15, color: theme.text, backgroundColor: theme.inputBg,
    },
    button: {
      backgroundColor: theme.buttonBg, borderRadius: 10,
      paddingVertical: 16, alignItems: 'center', marginTop: 24,
    },
    buttonText: { color: theme.buttonText, fontSize: 16, fontWeight: '600' },
    resultCard: {
      marginTop: 20, borderWidth: 1, borderColor: theme.border,
      borderRadius: 14, padding: 20, alignItems: 'center',
      backgroundColor: theme.card,
    },
    resultTitle: { fontSize: 14, color: theme.textMuted, marginBottom: 8 },
    resultValue: { fontSize: 54, fontWeight: '700', color: theme.text },
    resultCategory: { fontSize: 18, fontWeight: '600', marginTop: 4 },
    resultNote: {
      fontSize: 12, color: theme.textHint,
      textAlign: 'center', marginTop: 12, lineHeight: 18,
    },
    bottomNav: {
      position: 'absolute', bottom: 0, left: 0, right: 0,
      height: 82, paddingBottom: 14, paddingTop: 10,
      borderTopWidth: 1, borderTopColor: theme.border,
      backgroundColor: theme.navBg,
      flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',
    },
  });
}
