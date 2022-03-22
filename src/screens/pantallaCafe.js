import React,{useState,useEffect} from "react";
import { StyleSheet,View,ActivityIndicator,Text} from "react-native";
import ComponenteBoton from "../components/component/ComponenteBoton"
import * as Font from "expo-font"

const pantallaCafe = ({navigation}) =>{
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const loadFontsAsync = async () => {
        await Font.loadAsync({
            PublicSans_BoldItalic: require(`../../assets/fonts/PublicSans-BoldItalic.ttf`),
        }).then(() => {
        setFontsLoaded(true);
      });
    };
     // Cargar la fuente de manera asíncrona
    useEffect(() => {
    loadFontsAsync();
  }, []);
  if(fontsLoaded == false)
  {
    return (
        <View style={{flex: 1, justifyContent: "center", alignContent:"center",alignItems:"center"}}>
        <ActivityIndicator size="large" color="#E16837" />
      </View>
      )
  }
  else{
      return(
        <>
        <View style={styles.contenedortitulo}>
          <Text style={styles.titulo}>Café</Text>
        </View>
        <View style={styles.row}>
            <ComponenteBoton titulo="Caja de herramientas para Cafe" descripcion="Guía y documentos para el cultivo del cafe" imagen="icono-caja-de-herrameintas-cafe" callback={()=>{navigation.navigate("cajaHerramientasCafe")}} />
            <ComponenteBoton titulo="Catálogos de variedades" descripcion="Factores que determinan la calidad del café" imagen ="catalogo-variedades-cafe" callback={()=>{navigation.navigate("cajaHerramientasCafe")}} />
            <ComponenteBoton titulo="Demostraciones" descripcion="Videos sobre el manejo del café" imagen ="Icono-Demostraciones-Cafe" callback={()=>{navigation.navigate("pantallaDemostracionesCafe")}} />
        </View>
        </>
    )
  }
}

const styles = StyleSheet.create({
    row: {
        flex:1,
        flexDirection: "column",
      },
    titulo:{
        fontFamily:"PublicSans_BoldItalic",
        fontSize: 20,
    },
    contenedortitulo:{
        marginLeft:"5%",
        marginTop:"5%",
        width:"80%",
        height:"5%"
    }
    })

export default pantallaCafe