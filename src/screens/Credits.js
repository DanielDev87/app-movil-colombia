import React from 'react';
import { Text, View, StyleSheet, Linking, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';

const Credits = () => {
  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ImageBackground source={require('../assets/banderaCol.jpg')} style={styles.backgroundImage}>
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.section}>
        <Text style={styles.title}>Creditos</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.section}>
        <Text style={styles.text}>Idea App Colombia:</Text>
        <TouchableOpacity onPress={() => openLink('https://danidev.com.co')}>
          <Text style={[styles.name, { color: '#4cf009' }]}>Daniel Agudelo</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.divider} />

      <View style={styles.section}>
        <Text style={styles.text}>Backend:</Text>
        <TouchableOpacity onPress={() => openLink('https://api-colombia.com/')}>
          <Text style={[styles.name, { color: '#4cf009' }]}>API Colombia</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('https://www.linkedin.com/in/mteheran/')}>
          <Text style={[styles.name, { color: '#4cf009' }]}>Miguel Teheran</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('https://www.linkedin.com/in/rina-plata/')}>
          <Text style={[styles.name, { color: '#4cf009' }]}>Rina Plata</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('https://www.linkedin.com/in/mariobot/')}>
          <Text style={[styles.name, { color: '#4cf009' }]}>Mario Botero</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('https://www.linkedin.com/in/veronicaguaman/')}>
          <Text style={[styles.name, { color: '#4cf009' }]}>Vero Guaman</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('https://www.linkedin.com/in/alejandrohv/')}>
          <Text style={[styles.name, { color: '#4cf009' }]}>Alejandro Herreño</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('https://www.linkedin.com/in/lilivalgo/')}>
          <Text style={[styles.name, { color: '#4cf009' }]}>Lili Valencia</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.divider} />

      <View style={styles.section}>
        <Text style={styles.text}>Diseño y Desarrollo App Colombia:</Text>
        <TouchableOpacity onPress={() => openLink('https://danidev.com.co')}>
          <Text style={[styles.name, { color: '#4cf009' }]}>Daniel Agudelo</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    scrollView: {
        flexGrow: 1,
        justifyContent: 'center',  // Centra los elementos en el eje transversal (vertical)
        paddingHorizontal: 20,
    },
    section: {
      marginBottom: 20,
    },
    divider: {
      borderBottomWidth: 1,
      borderBottomColor: '#333',
      marginBottom: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 10,
    },
    text: {
      fontSize: 16,
      color: '#F9F9F9',
      marginBottom: 5,
    },
    name: {
      fontSize: 16,
      fontWeight: 'bold',
      textDecorationLine: 'underline',
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover', // 'cover' o 'contain' según tus preferencias
      justifyContent: 'center',
    },
  });
  

export default Credits;
