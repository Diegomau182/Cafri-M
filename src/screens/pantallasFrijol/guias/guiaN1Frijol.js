import React,{useState,useEffect} from "react";
import { StyleSheet,View,ActivityIndicator,Text,ScrollView,ImageBackground,Image,Dimensions,TouchableOpacity} from "react-native";
import * as Font from "expo-font"
import ComponenteListaGuias from "../../../components/component/ComponenteListaGuias";
import infoGuiaN1Frijol from "../../../informacion/frijol/infoGuiaN1Frijol"
const { width, height } = Dimensions.get("window");


const guiaN1Frijol = ({navigation}) =>{
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
           
            <ImageBackground style={styles.estiloImagen} source={require('../../../../assets/imagenes/guiaUnoFrijol.png')}>
                <TouchableOpacity style={styles.flecha} onPress={()=>{navigation.navigate("cajaHerramientasFrijol")}}>
                  <Image style={styles.tamañoFlecha} source={require('../../../../assets/imagenes/flechaSombra.png')}/>
                </TouchableOpacity>
              </ImageBackground>
        </View>
        
        <View style={styles.contenedortitulo}>
          <Text style={styles.titulo}>Guia#1: Enfermedades de la raíz. </Text>
          <Image style={styles.pdf} source={require('../../../../assets/imagenes/pdf.png')}/>
          
        </View>
        <ScrollView style={styles.row}>            
            <ComponenteListaGuias titulo={infoGuiaN1Frijol[0].name}  numero={infoGuiaN1Frijol[0].numero} callback={()=>{navigation.navigate("pantallaInfoSeis",infoGuiaN1Frijol[0].contenido)}}/>
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo={infoGuiaN1Frijol[1].name}  numero={infoGuiaN1Frijol[1].numero}  callback={()=>{navigation.navigate("pantallaInfoSeis",infoGuiaN1Frijol[1].contenido)}}/>
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo={infoGuiaN1Frijol[2].name}  numero={infoGuiaN1Frijol[2].numero} callback={()=>{navigation.navigate("pantallaInfoSeis",infoGuiaN1Frijol[2].contenido)}}/>
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo={infoGuiaN1Frijol[3].name}  numero={infoGuiaN1Frijol[3].numero} callback={()=>{navigation.navigate("pantallaInfoSeis", infoGuiaN1Frijol[3].contenido)}} />
            <View style = {styles.lineStyle}/>
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
        marginTop:"6%"
    },
    contenedortitulo:{
        width:"95%",
        height:"10%",
        justifyContent:"center",
        alignContent:"center",
        marginLeft: width*0.05,
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

export default guiaN1Frijol
