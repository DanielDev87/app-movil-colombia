import { View, Text, ImageBackground, StyleSheet } from 'react-native'

const Home = ()=>{
    return(
       
        <ImageBackground
        source={require('../assets/colombiaBG.jpg')} // Ruta de tu imagen
        style={styles.background}
      >
        
        <View style={styles.content}>
          <Text> ❤ APP COLOMBIA ❤</Text>
        </View>
      </ImageBackground>
        
    )

};

const styles = StyleSheet.create({
    background: {
      flex: 1,
      resizeMode: 'cover', // Puedes ajustar esto según tus necesidades
      justifyContent: 'center',
    },
    content: {
      // Estilos para el contenido de tu pantalla
      // Puedes ajustar esto según tus necesidades
      backgroundColor: 'rgba(255,255,255,0.5)', // Color de fondo para que el texto sea legible
      padding: 20,
    },
});
  

export default Home;