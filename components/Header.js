import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Imagens abaixo:</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    width: '100%', // Para que o header ocupe toda a largura da tela
    height: 100,
    justifyContent: 'center',
    alignItems: 'center', // Centraliza o texto horizontalmente
  },
  texto: {
    color: 'red',
    fontSize: 26,
    textAlign: 'center',
  },
});
