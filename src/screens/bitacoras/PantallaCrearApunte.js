import React, { useContext, useEffect, useState } from "react";
import { StyleSheet,View,TouchableOpacity,Image } from "react-native";
import {
  Button,
  Container,
  Text,
  TextArea,
  Spinner,
  NativeBaseProvider
} from "native-base";
import * as Font from "expo-font";

// Importar el contexto de las notas
import { NotesContext } from "../../context/NotesContext";

const PantallaCrearApunte = ({ navigation }) => {
  const [note, setNote] = useState("");
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [enableSave, setEnableSave] = useState(true);
  const [errorNote, setErrorNote] = useState(false);
  const notesContext = useContext(NotesContext);
  const { addNewNote, refreshNotes } = notesContext;

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
    if (note) setEnableSave(false);
    else setEnableSave(true);
  }, [note]);

  const handlerNewNote = async () => {
    // Validar que la nota tiene valor
    if (note) {
      await addNewNote(note, refreshNotes);

      // Regresar a la pantalla anterior
      navigation.goBack();
    } else {
      setErrorNote(true);
    }
  };

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
        <Text style={styles.titulo} >Ingresa tu nota</Text>
        <TextArea
          rowSpan={5}
          bordered
          placeholder="Escribe algo..."
          value={note}
          onChangeText={setNote}
          style={errorNote ? styles.inputError : styles.note}
        />
        {errorNote ? (
          <Text style={styles.error}>¡Debes ingresar una nota!</Text>
        ) : null}
        <Button style={styles.guardar} onPress={handlerNewNote}>
                  <Text style={styles.textoGuardar}>Guardar</Text>
                  </Button>
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
    backgroundColor:"#9FA617",
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
  fontFamily:"PublicSans_Regular",
  fontSize: 18,
  textAlign:"center",
  color:"#000",
  marginTop:"5%",
  width:"80%",
  marginLeft:"5%",
  marginBottom:"5%"
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
});

export default PantallaCrearApunte;