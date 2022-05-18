import React, { useContext, useEffect, useState } from "react";
import { StyleSheet,View,TouchableOpacity,Image, ScrollView } from "react-native";
import {
  Button,
  Text,
  TextArea,
  Spinner,
  NativeBaseProvider
} from "native-base";
import * as Font from "expo-font";

// Importar el contexto de las notas
import { NotesContext } from "../../context/NotesContext";


const PantallaVistaApuntes = ({route, navigation }) => {
    const { id } = route.params;
    const [theNote, setTheNote] = useState(null);
    const [status, setStatus] = useState(false);
    const [errorNote, setErrorNote] = useState(false);
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const notesContext = useContext(NotesContext);
    const { note, getNoteById } = notesContext;

  // Cargar la fuente de manera asíncrona
  useEffect(() => {
    const loadFontsAsync = async () => {
      await Font.loadAsync({
        PublicSans_Regular: require("../../../assets/fonts/PublicSans-Regular.ttf"),
      }).then(() => {
        setFontsLoaded(true);
      });
    };

    loadFontsAsync();
  }, []);

  // Ejecutar el efecto cuando el valor de la nota cambie
  useEffect(() => {
    const getNote = () => {
      getNoteById(id);
    };

    getNote();

    setTheNote(note[0].informacion);

    // Verificar si la nota tiene valor previo a extraer sus valores
    if (note.length) {
      setStatus(note[0].status);
      console.log(theNote);
    }
  }, [id]);


  if (!fontsLoaded)
    return (
    <NativeBaseProvider>
        <Spinner color="blue" />
    </NativeBaseProvider>
    );

  return (
    <NativeBaseProvider>
       
      <View style={styles.container}>
      <View style={styles.contenedorNavegacion}>
            <TouchableOpacity style={styles.flecha} onPress={()=>{navigation.goBack()}}>
                <Image style={styles.tamañoFlecha} source={require('../../../assets/imagenes/flecha.png')}/>
            </TouchableOpacity>
        </View>
        <View style={styles.contenedortitulo}>
                <Text style={styles.titulo}>Contenido de Apunte</Text>
            </View>
        <ScrollView>
        <Text style={styles.informacion}>{note[0].informacion}</Text>
        </ScrollView>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff' },
    
  button: {
    marginTop:"5%",
    fontFamily: "PublicSans_Regular",
  },

  error: {
    fontSize: 12,
    color: "red",
    marginBottom: 10,
  },
  inputError: {
    borderColor: "red",
  },
  note: {
    borderColor: "black",
    marginBottom: 10,
  },
  contenedorNavegacion: {
    backgroundColor:"#717073",
    alignItems:"flex-start",
    flexDirection:"row",
    height:"15%"
},
tamañoFlecha:{
    marginLeft:"20%",
    width:"60%",
    height:"30%",
    marginTop: "80%"
},
flecha:{
    marginLeft:"1%",
    width:"20%",
    height:"100%",
},
titulo:{
    fontFamily:"PublicSans_BoldItalic",
    fontSize: 20,
    alignItems:"center",
    justifyContent:"center"
},
contenedortitulo:{
    marginLeft:"5%",
    marginTop:"5%",
    width:"90%",
    height:"5%",
    alignItems:"center"
},
guardar:{
    marginTop:"5%",
    marginBottom:"5%",
    marginHorizontal:"10%",
    backgroundColor:"#9FA617",
    
  },
  textoGuardar:{
    fontSize:18
  },
  informacion:{
      margin:"5%",
      fontSize:20,
  }
});

export default PantallaVistaApuntes;