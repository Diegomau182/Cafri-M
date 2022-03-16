import React,{useState,useEffect} from "react";
import * as Font from "expo-font"
import {StyleSheet,TouchableOpacity,View,Text,Image,Dimensions,ActivityIndicator} from "react-native"


const { width, height } = Dimensions.get("window");
const ComponenteListaGuias = ({titulo,numero,callback}) =>{

    const [fontsLoaded, setFontsLoaded] = useState(false);
    const loadFontsAsync = async () => {
        await Font.loadAsync({
            PublicSans_BoldItalic: require(`../../../assets/fonts/PublicSans-BoldItalic.ttf`),
            PublicSans_ThinItalic: require(`../../../assets/fonts/PublicSans-ThinItalic.ttf`),
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
        <TouchableOpacity onPress={()=>{callback()}}>
            <View style={styles.conteiner}>
                <View style={styles.conteinerNumero}>
                    <Text style={styles.textoNumero}>{numero}</Text>
                </View>
                <View style={styles.conteinerDescripcion}>
                    <Text style={styles.titulo} >{titulo}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    SpinnerInicio:{
        flex: 1, 
        justifyContent: "center"
      },
    conteiner:{
        flexDirection:"row",
        width:width*0.75,
        height:height * 0.05,
        marginTop:"5%",
        marginLeft: width*0.01,
    },
    conteinerNumero:{
        width: "20%",
        justifyContent:"center",
        alignContent:"center",
    },
    textoNumero:{
        fontFamily:"PublicSans_BoldItalic",
        fontSize: 20,
        textAlign:"center",
        color:"#707070"
    },
    estiloImagen:{
        width:width*0.20,
        height:height * 0.10,
        marginRight: "10%",

    },
    conteinerDescripcion:{
        flexDirection:"column",
        justifyContent: "center",
        width: width*0.70,
    },
    titulo: {
        fontFamily:"PublicSans_BoldItalic",
        fontSize: 15,
        textAlign:"justify",

      },

})

export default ComponenteListaGuias