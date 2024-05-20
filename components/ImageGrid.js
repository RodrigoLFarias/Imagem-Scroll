import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function ImageGrid() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: "https://th.bing.com/th/id/OIP.uDMCW_1IznXiFGscE2Cy7gHaEK?rs=1&pid=ImgDetMain" }}
        />
        <Image
          style={styles.image}
          source={{ uri: "https://th.bing.com/th/id/OIP.uDMCW_1IznXiFGscE2Cy7gHaEK?rs=1&pid=ImgDetMain" }}
        />
        <Image
          style={styles.image}
          source={{ uri: "https://th.bing.com/th/id/OIP.uDMCW_1IznXiFGscE2Cy7gHaEK?rs=1&pid=ImgDetMain" }}
        />
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10, // Adiciona um padding para garantir espaçamento

  },
  
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',

  },

  image: {
    width: 100,
    height: 100,
    marginVertical: 10, // Adiciona um margin vertical para espaçamento entre as imagens
  
},

});







