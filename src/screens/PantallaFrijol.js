import React,{useState,useEffect} from "react";
import { StyleSheet,View,ActivityIndicator,Text,ScrollView} from "react-native";
import ComponenteBoton from "../components/component/ComponenteBoton"
import * as Font from "expo-font"

const pantallaFrijol = ({navigation}) =>{
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
        <View style={styles.contenedortitulo}><Text style={styles.titulo}>Frijol</Text></View>
        <ScrollView>
            <ComponenteBoton titulo="Caja de herramientas para Frijol" descripcion="Guía y documentos para el cultivo del Frijol" imagen="icono-caja-de-herramientas-frijol" callback={()=>{navigation.navigate("cajaHerramientasFrijol")}} />
            <ComponenteBoton titulo="Semillas" descripcion="semillas" imagen ="icono-semilla-frijol" callback={()=>{navigation.navigate("cajaHerramientasFrijol")}} />
            <ComponenteBoton titulo="Granos" descripcion="granos" imagen ="icono-grano-frijol" callback={()=>{navigation.navigate("cajaHerramientasFrijol")}} />
            <ComponenteBoton titulo="Demostraciones" descripcion="Videos sobre el manejo del Frijol" imagen ="Icono-Demostraciones-Frijol" callback={()=>{navigation.navigate("cajaHerramientasFrijol")}} />
            <ComponenteBoton titulo="Comercialización " descripcion="comercializacion" imagen ="Icono-Comercializacion-de-frijol" callback={()=>{navigation.navigate("cajaHerramientasFrijol")}} />
        </ScrollView>
        </>
    )
  }
}

const styles = StyleSheet.create({
    row: {
        flex:1,
        flexDirection: "row",
        flexWrap: "wrap",
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

export default pantallaFrijol