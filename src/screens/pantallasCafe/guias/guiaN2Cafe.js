import React,{useState,useEffect} from "react";
import { StyleSheet,View,ActivityIndicator,Text,ScrollView,ImageBackground,Image,Dimensions,TouchableOpacity} from "react-native";
import * as Font from "expo-font"
import ComponenteListaGuias from "../../../components/component/ComponenteListaGuias";
import guiaN2InfoCafe from "../../../informacion/cafe/infoGuiaN2Cafe"
const { width, height } = Dimensions.get("window");


const guiaN2Cafe = ({navigation}) =>{
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
                  <Image style={styles.tamañoFlecha} source={require('../../../../assets/imagenes/flechaSombra.png')}/>
                </TouchableOpacity>
              </ImageBackground>
        </View>
        
        <View style={styles.contenedortitulo}>
          <Text style={styles.titulo}>Guia#2: Control de calidad en el beneficiado húmedo del café.</Text>
          <Image style={styles.pdf} source={require('../../../../assets/imagenes/pdf.png')}/>
          
        </View>
        <ScrollView style={styles.row}>            
            <ComponenteListaGuias titulo={guiaN2InfoCafe[0].name}  numero={guiaN2InfoCafe[0].numero} callback={()=>{navigation.navigate("pantallaInfoUno",guiaN2InfoCafe[0].contenido)}}/>
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo={guiaN2InfoCafe[1].name}  numero={guiaN2InfoCafe[1].numero}  callback={()=>{navigation.navigate("pantallaInfoDos",guiaN2InfoCafe[1].contenido)}}/>
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo={guiaN2InfoCafe[2].name}  numero={guiaN2InfoCafe[2].numero} callback={()=>{navigation.navigate("pantallaInfoTres",guiaN2InfoCafe[2].contenido)}}/>
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo={guiaN2InfoCafe[3].name}  numero={guiaN2InfoCafe[3].numero} callback={()=>{navigation.navigate("pantallaImgAlargada", guiaN2InfoCafe[3].contenido)}} />
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo={guiaN2InfoCafe[4].name}  numero={guiaN2InfoCafe[4].numero} callback={()=>{navigation.navigate("pantallaInfoCuatro", guiaN2InfoCafe[4].contenido)}} />
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo={guiaN2InfoCafe[5].name}  numero={guiaN2InfoCafe[5].numero} callback={()=>{navigation.navigate("pantallaInfoCinco",guiaN2InfoCafe[5].contenido)}} />
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo={guiaN2InfoCafe[6].name}  numero={guiaN2InfoCafe[6].numero} callback={()=>{navigation.navigate("pantallaInfoCuatro", guiaN2InfoCafe[6].contenido)}} />
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo={guiaN2InfoCafe[7].name}  numero={guiaN2InfoCafe[7].numero} callback={()=>{navigation.navigate("pantallaInfoUno",guiaN2InfoCafe[7].contenido)}}/>
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
        width:"85%",
        height:"9%",
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

export default guiaN2Cafe
