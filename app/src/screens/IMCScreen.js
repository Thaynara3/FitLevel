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

const API_URL = 'http://192.168.15.138:3000';

function getIMCCategory(imc) {
  if (imc < 18.5) return { label: 'Abaixo do Peso', color: '#3b82f6' };
  if (imc < 25) return { label: 'Peso Normal', color: '#22c55e' };
  if (imc < 30) return { label: 'Sobrepeso', color: '#f59e0b' };
  return { label: 'Obesidade', color: '#ef4444' };
}

export default function IMCScreen({ navigation }) {
  const [gender, setGender] = useState('female');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState(null);

  async function calculate() {
    console.log('Cliquei em calcular IMC');

    const h = parseFloat(height.replace(',', '.'));
    const w = parseFloat(weight.replace(',', '.'));

    if (!h || !w || h <= 0 || w <= 0) {
      console.log('Altura ou peso inválido');
      setResult(null);
      return;
    }

    try {
      console.log('Enviando IMC para API...');

      const response = await fetch(`${API_URL}/imc`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          height: h,
          weight: w,
          gender,
        }),
      });

      const data = await response.json();

      console.log('Resposta da API:', data);

      if (!response.ok) {
        console.log('Erro da API:', data.error);
        return;
      }

      setResult(data.imc);
    } catch (error) {
      console.log('Erro ao conectar com a API:', error);
    }
  }

  const category = result ? getIMCCategory(result) : null;

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={24} color="#111" />
          </TouchableOpacity>

          <Text style={styles.title}>Calcule seu IMC</Text>

          <View style={{ width: 24 }} />
        </View>

        <Text style={styles.label}>Você é:</Text>

        <View style={styles.genderRow}>
          <TouchableOpacity
            style={styles.radioOption}
            onPress={() => setGender('female')}
          >
            <View
              style={[
                styles.radio,
                gender === 'female' && styles.radioSelected,
              ]}
            />
            <Text style={styles.radioLabel}>Mulher</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.radioOption}
            onPress={() => setGender('male')}
          >
            <View
              style={[
                styles.radio,
                gender === 'male' && styles.radioSelected,
              ]}
            />
            <Text style={styles.radioLabel}>Homem</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Altura (m)</Text>

        <TextInput
          style={styles.input}
          placeholder="Ex: 1.75"
          placeholderTextColor="#bbb"
          keyboardType="decimal-pad"
          value={height}
          onChangeText={setHeight}
        />

        <Text style={styles.label}>Peso (Kg)</Text>

        <TextInput
          style={styles.input}
          placeholder="Ex: 70"
          placeholderTextColor="#bbb"
          keyboardType="decimal-pad"
          value={weight}
          onChangeText={setWeight}
        />

        <TouchableOpacity style={styles.button} onPress={calculate}>
          <Text style={styles.buttonText}>Calcular IMC</Text>
        </TouchableOpacity>

        {result !== null && category && (
          <View style={styles.resultCard}>
            <Text style={styles.resultTitle}>Seu Resultado</Text>

            <Text style={styles.resultValue}>{result.toFixed(1)}</Text>

            <Text style={[styles.resultCategory, { color: category.color }]}>
              {category.label}
            </Text>

            <Text style={styles.resultNote}>
              O IMC é um indicador usado para avaliar se você está no peso ideal.
              Consulte um profissional de saúde para recomendações personalizadas.
            </Text>
          </View>
        )}
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Ionicons name="home-outline" size={24} color="#777" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
          <Ionicons name="search-outline" size={24} color="#777" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('IMCScreen')}>
          <Ionicons name="pulse" size={24} color="#111" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    paddingTop: 56,
    paddingHorizontal: 20,
    paddingBottom: 120,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 28,
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
  },

  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111',
    marginBottom: 8,
    marginTop: 16,
  },

  genderRow: {
    flexDirection: 'row',
    gap: 24,
    marginBottom: 4,
  },

  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  radio: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#111',
  },

  radioSelected: {
    backgroundColor: '#111',
    borderWidth: 4,
    borderColor: '#fff',
  },

  radioLabel: {
    fontSize: 14,
    color: '#111',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: '#111',
  },

  button: {
    backgroundColor: '#111',
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 24,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  resultCard: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 14,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fafafa',
  },

  resultTitle: {
    fontSize: 14,
    color: '#777',
    marginBottom: 8,
  },

  resultValue: {
    fontSize: 54,
    fontWeight: '700',
    color: '#111',
  },

  resultCategory: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 4,
  },

  resultNote: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
    marginTop: 12,
    lineHeight: 18,
  },

  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 82,
    paddingBottom: 14,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});