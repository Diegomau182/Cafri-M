import React,{useState,useEffect} from "react";
import { StyleSheet,View,ActivityIndicator,Text,ScrollView,ImageBackground,Image,Dimensions,TouchableOpacity} from "react-native";
import * as Font from "expo-font"
import ComponenteListaGuias from "../../../components/component/ComponenteListaGuias";
import guiaN1Info from "../../../informacion/cafe/infoGuiaN1"
const { width, height } = Dimensions.get("window");


const guiaN1 = ({navigation}) =>{
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
           
            <ImageBackground style={styles.estiloImagen} source={require('../../../../assets/imagenes/pruebafondoguia.jpg')}>
                <TouchableOpacity style={styles.flecha} onPress={()=>{navigation.navigate("cajaHerramientasCafe")}}>
                  <Image style={styles.tamañoFlecha} source={require('../../../../assets/imagenes/flecha.png')}/>
                </TouchableOpacity>
              </ImageBackground>
        </View>
        
        <View style={styles.contenedortitulo}>
          <Text style={styles.titulo}>Guia#1: Control de calidad en el beneficiado húmedo del café.</Text>
          <Image style={styles.pdf} source={require('../../../../assets/imagenes/pdf.png')}/>
          
        </View>
        <ScrollView style={styles.row}>            
            <ComponenteListaGuias titulo={guiaN1Info[0].name}  numero={guiaN1Info[0].numero} callback={()=>{navigation.navigate("pantallaInfoT",guiaN1Info[0].contenido)}}/>
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo={guiaN1Info[1].name}  numero={guiaN1Info[1].numero}  callback={()=>{navigation.navigate("pantallaInfoTI",guiaN1Info[1].contenido)}}/>
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo={guiaN1Info[2].name}  numero={guiaN1Info[2].numero} callback={()=>{navigation.navigate("pantallaInfoTITI",guiaN1Info[2].contenido)}}/>
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo={guiaN1Info[3].name}  numero={guiaN1Info[3].numero} callback={()=>{navigation.navigate("pantallaImg", guiaN1Info[3].contenido)}} />
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo={guiaN1Info[4].name}  numero={guiaN1Info[4].numero} callback={()=>{navigation.navigate("pantallaTITImg", guiaN1Info[4].contenido)}} />
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo={guiaN1Info[5].name}  numero={guiaN1Info[5].numero} callback={()=>{navigation.navigate("pantallaInfoTTITITI",guiaN1Info[5].contenido)}} />
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo={guiaN1Info[6].name}  numero={guiaN1Info[6].numero} callback={()=>{navigation.navigate("pantallaTITImg", guiaN1Info[6].contenido)}} />
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo={guiaN1Info[7].name}  numero={guiaN1Info[7].numero} callback={()=>{navigation.navigate("pantallaInfoT",guiaN1Info[7].contenido)}}/>
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
        color:"#9FA617"
    },
    contenedortitulo:{
        width:"95%",
        height:"10%",
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
      marginTop:"5%",
      width:"20%",
      height:"14%",
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

export default guiaN1
