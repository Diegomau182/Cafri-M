import React,{useState,useEffect} from "react";
import { StyleSheet,View,ActivityIndicator,Text,ScrollView,ImageBackground,Image,Dimensions,TouchableOpacity} from "react-native";
import * as Font from "expo-font"
import ComponenteListaGuias from "../../../components/component/ComponenteListaGuias";
import guiaN1InfoCafe from "../../../informacion/cafe/infoGuiaN1Cafe"
const { width, height } = Dimensions.get("window");


const guiaN1Cafe = ({navigation}) =>{
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const loadFontsAsync = async () => {
        await Font.loadAsync({
            PublicSans_BoldItalic: require(`../../../../assets/fonts/PublicSans-BoldItalic.ttf`),
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
        <View style={styles.contenedorImagen}>
           
            <ImageBackground style={styles.estiloImagen} source={require('../../../../assets/imagenes/guiaUnoCafe.png')}>
                <TouchableOpacity style={styles.flecha} onPress={()=>{navigation.navigate("cajaHerramientasCafe")}}>
                  <Image style={styles.tamañoFlecha} source={require('../../../../assets/imagenes/flechaSombra.png')}/>
                </TouchableOpacity>
              </ImageBackground>
        </View>
        
        <View style={styles.contenedortitulo}>
          <Text style={styles.titulo}>Guia#1: Control de Calidad de Café</Text>
          <Image style={styles.pdf} source={require('../../../../assets/imagenes/pdf.png')}/>
          
        </View>
        <ScrollView style={styles.row}>            
            <ComponenteListaGuias titulo={guiaN1InfoCafe[0].name}  numero={guiaN1InfoCafe[0].numero} callback={()=>{navigation.navigate("pantallaInfoTI",guiaN1InfoCafe[0].contenido)}}/>
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo={guiaN1InfoCafe[1].name}  numero={guiaN1InfoCafe[1].numero} callback={()=>{navigation.navigate("pantallaInfoTI",guiaN1InfoCafe[1].contenido)}}/>
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo={guiaN1InfoCafe[2].name}  numero={guiaN1InfoCafe[2].numero} callback={()=>{navigation.navigate("pantallaImgAncha",guiaN1InfoCafe[2].contenido)}}/>
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo={guiaN1InfoCafe[3].name}  numero={guiaN1InfoCafe[3].numero} callback={()=>{navigation.navigate("pantallaImgAncha",guiaN1InfoCafe[3].contenido)}}/>
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo={guiaN1InfoCafe[4].name}  numero={guiaN1InfoCafe[4].numero} callback={()=>{navigation.navigate("pantallaInfoTI",guiaN1InfoCafe[4].contenido)}}/>
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo={guiaN1InfoCafe[5].name}  numero={guiaN1InfoCafe[5].numero} callback={()=>{navigation.navigate("pantallaInfoT",guiaN1InfoCafe[5].contenido)}}/>
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo={guiaN1InfoCafe[6].name}  numero={guiaN1InfoCafe[6].numero} callback={()=>{navigation.navigate("pantallaInfoT",guiaN1InfoCafe[6].contenido)}}/>
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo={guiaN1InfoCafe[7].name}  numero={guiaN1InfoCafe[7].numero} callback={()=>{navigation.navigate("pantallaInfoT",guiaN1InfoCafe[7].contenido)}}/>
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo={guiaN1InfoCafe[8].name}  numero={guiaN1InfoCafe[8].numero} callback={()=>{navigation.navigate("pantallaInfoT",guiaN1InfoCafe[8].contenido)}}/>
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo={guiaN1InfoCafe[9].name}  numero={guiaN1InfoCafe[9].numero} callback={()=>{navigation.navigate("pantallaInfoT",guiaN1InfoCafe[9].contenido)}}/>
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo={guiaN1InfoCafe[10].name}  numero={guiaN1InfoCafe[10].numero} callback={()=>{navigation.navigate("pantallaInfoT",guiaN1InfoCafe[10].contenido)}}/>
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo={guiaN1InfoCafe[11].name}  numero={guiaN1InfoCafe[11].numero} callback={()=>{navigation.navigate("pantallaInfoT",guiaN1InfoCafe[11].contenido)}}/>
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo={guiaN1InfoCafe[12].name}  numero={guiaN1InfoCafe[12].numero} callback={()=>{navigation.navigate("pantallaInfoT",guiaN1InfoCafe[12].contenido)}}/>
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo={guiaN1InfoCafe[13].name}  numero={guiaN1InfoCafe[13].numero} callback={()=>{navigation.navigate("pantallaInfoT",guiaN1InfoCafe[13].contenido)}}/>
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo={guiaN1InfoCafe[14].name}  numero={guiaN1InfoCafe[14].numero} callback={()=>{navigation.navigate("pantallaInfoT",guiaN1InfoCafe[14].contenido)}}/>
        </ScrollView>
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
        fontSize: 18,
        textAlign:"left",
        color:"#9FA617",
        marginTop:"1%",
        width:"80%",
        marginLeft:"2%"
    },
    contenedortitulo:{
        width:"95%",
        height:"7%",
        justifyContent:"center",
        alignContent:"center",
        marginLeft: width*0.02,
        flexDirection:"row",
        marginTop:"2%"
    },
    estiloImagen:{
        width:width*1,
        height:height*0.30,

    },
    contenedorImagen:{
        alignItems:"center",
    },
    pdf:{
      width:width*0.20,
      height:height * 0.10,
    },
    tamañoFlecha:{
      marginTop:"9%",
      width:"17%",
      height:"9%",
      position:"absolute",
    },
    flecha:{
      width:width*1,
        height:height*0.30,
    },
    lineStyle:{
      borderWidth: 0.5,
      width:"90%",
      marginLeft:"3%",
      marginRight:"3%", 
      borderColor:'#808080', 
      margin:1,
    }
    })

export default guiaN1Cafe
