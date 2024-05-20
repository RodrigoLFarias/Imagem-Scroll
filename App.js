import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Header from './components/Header';
import ImageGrid from './components/ImageGrid';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView 
        contentContainerStyle={styles.scrollView} 
        showsVerticalScrollIndicator={true} // Exibe o indicador de rolagem vertical
      >
        <ImageGrid />
        <ImageGrid /> {/* Adicionei mais um ImageGrid para demonstrar a rolagem */}
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },

  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center', // Adicionei isso para centralizar o conteúdo horizontalmente

  },
  
});

