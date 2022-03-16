import React,{useState,useEffect} from "react";
import * as Font from "expo-font"
import {StyleSheet,TouchableOpacity,View,Text,Image,Dimensions,ActivityIndicator} from "react-native"


const { width, height } = Dimensions.get("window");
const ComponenteGuia = ({titulo,imagen,callback}) =>{
   const  arrayiconos = [{
                            name:"1", 
                            import: require("../../../assets/imagenes/numeros/1.png")
                        },
                         {
                            name:"2",
                            import: require("../../../assets/imagenes/numeros/2.png")
                        },
                        {
                            name:"3",
                            import: require("../../../assets/imagenes/numeros/3.png")
                        },
                        {
                            name:"4",
                            import: require("../../../assets/imagenes/numeros/4.png")
                        },
                        {
                            name:"5",
                            import: require("../../../assets/imagenes/numeros/5.png")
                        },
                        {
                            name:"6",
                            import: require("../../../assets/imagenes/numeros/6.png")
                        },
                        {
                            name:"7",
                            import: require("../../../assets/imagenes/numeros/7.png")
                        },
                        {
                            name:"8",
                            import: require("../../../assets/imagenes/numeros/8.png")
                        },
                        {
                            name:"9",
                            import: require("../../../assets/imagenes/numeros/9.png")
                        },
                        ]
    const ubi =  arrayiconos.find( index => index.name == imagen);
    const [fontsLoaded, setFontsLoaded] = useState(false);
    console.log(ubi.name);
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
                <View style={styles.conteinerIcono}>
                    <Image style={styles.estiloImagen} source={ubi.import}/>
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
        height:height * 0.10,
        marginTop:"5%",
        marginLeft: width*0.05,
    },
    conteinerIcono:{
        width:width*0.20,
        height:height * 0.10,
        marginLeft:"-2%"

    },
    estiloImagen:{
        width:width*0.20,
        height:height * 0.10,
        marginRight: "10%",

    },
    conteinerDescripcion:{
        flexDirection:"column",
        height: height * 0.10,
        justifyContent: "center",
        

    },
    titulo: {
        fontFamily:"PublicSans_BoldItalic",
        fontSize: 14,
        textAlign:"justify",
        width:width*0.70
      },

})

export default ComponenteGuia;