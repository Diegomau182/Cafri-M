import React,{useState,useEffect} from "react";
import { StyleSheet,View,ActivityIndicator,Text,ScrollView,ImageBackground,Image,Dimensions,TouchableOpacity} from "react-native";
import * as Font from "expo-font"
import ComponenteListaGuias from "../../../components/component/ComponenteListaGuias";
import infoGuiaN4Frijol from "../../../informacion/frijol/infoGuiaN4Frijol"

const { width, height } = Dimensions.get("window");


const guiaN4Frijol = ({navigation}) =>{
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
           
            <ImageBackground style={styles.estiloImagen} source={require('../../../../assets/imagenes/guiaCuatroFrijol.png')}>
                <TouchableOpacity style={styles.flecha} onPress={()=>{navigation.navigate("cajaHerramientasFrijol")}}>
                  <Image style={styles.tamañoFlecha} source={require('../../../../assets/imagenes/flechaSombra.png')}/>
                </TouchableOpacity>
              </ImageBackground>
        </View>
        
        <View style={styles.contenedortitulo}>
          <Text style={styles.titulo}>Guia#4: Agricultura Climaticamente Inteligente</Text>
          <Image style={styles.pdf} source={require('../../../../assets/imagenes/pdf.png')}/>
          
        </View>
        <ScrollView style={styles.row}>            
            <ComponenteListaGuias titulo={infoGuiaN4Frijol[0].name}  numero={infoGuiaN4Frijol[0].numero} callback={()=>{navigation.navigate("pantallaInfoT",infoGuiaN4Frijol[0].contenido)}}/>
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo={infoGuiaN4Frijol[1].name}  numero={infoGuiaN4Frijol[1].numero} callback={()=>{navigation.navigate("pantallaInfoT",infoGuiaN4Frijol[1].contenido)}}/>
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo={infoGuiaN4Frijol[2].name}  numero={infoGuiaN4Frijol[2].numero} callback={()=>{navigation.navigate("pantallaInfoT",infoGuiaN4Frijol[2].contenido)}}/>
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo={infoGuiaN4Frijol[3].name}  numero={infoGuiaN4Frijol[3].numero} callback={()=>{navigation.navigate("pantallaInfoT",infoGuiaN4Frijol[3].contenido)}}/>
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo={infoGuiaN4Frijol[4].name}  numero={infoGuiaN4Frijol[4].numero} callback={()=>{navigation.navigate("pantallaInfoTI",infoGuiaN4Frijol[4].contenido)}}/>
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo={infoGuiaN4Frijol[5].name}  numero={infoGuiaN4Frijol[5].numero} callback={()=>{navigation.navigate("pantallaInfoT",infoGuiaN4Frijol[5].contenido)}}/>
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo={infoGuiaN4Frijol[6].name}  numero={infoGuiaN4Frijol[6].numero} callback={()=>{navigation.navigate("pantallaImgImg",infoGuiaN4Frijol[6].contenido)}}/>
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo={infoGuiaN4Frijol[7].name}  numero={infoGuiaN4Frijol[7].numero} callback={()=>{navigation.navigate("pantallaImgAncha",infoGuiaN4Frijol[7].contenido)}}/>
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo={infoGuiaN4Frijol[8].name}  numero={infoGuiaN4Frijol[8].numero} callback={()=>{navigation.navigate("pantallaImgAncha",infoGuiaN4Frijol[8].contenido)}}/>
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo={infoGuiaN4Frijol[9].name}  numero={infoGuiaN4Frijol[9].numero} callback={()=>{navigation.navigate("pantallaImgAncha",infoGuiaN4Frijol[9].contenido)}}/>
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo={infoGuiaN4Frijol[10].name}  numero={infoGuiaN4Frijol[10].numero} callback={()=>{navigation.navigate("pantallaImgImg",infoGuiaN4Frijol[10].contenido)}}/>
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo={infoGuiaN4Frijol[11].name}  numero={infoGuiaN4Frijol[11].numero} callback={()=>{navigation.navigate("pantallaImgImg",infoGuiaN4Frijol[11].contenido)}}/>
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo={infoGuiaN4Frijol[12].name}  numero={infoGuiaN4Frijol[12].numero} callback={()=>{navigation.navigate("pantallaImgAncha",infoGuiaN4Frijol[12].contenido)}}/>
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
        fontSize: 16,
        textAlign:"left",
        color:"#9FA617",
        marginTop:"3%",
        width:"90%"
    },
    contenedortitulo:{
        width:"90%",
        height:"10%",
        justifyContent:"center",
        alignContent:"center",
        marginLeft: width*0.02,
        flexDirection:"row",
        marginTop:"2%", 
        marginLeft:"7%"
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

export default guiaN4Frijol
