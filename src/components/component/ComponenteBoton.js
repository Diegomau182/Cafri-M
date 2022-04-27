import React,{useState,useEffect} from "react";
import * as Font from "expo-font"
import {StyleSheet,TouchableOpacity,View,Text,Image,Dimensions,ActivityIndicator} from "react-native"


const { width, height } = Dimensions.get("window");
const ComponenteBoton = ({titulo,descripcion,imagen,callback}) =>{
   const  arrayiconos = [{
                            name:"icono-caja-de-herrameintas-cafe", 
                            import: require("../../../assets/imagenes/icono-caja-de-herrameintas-cafe.png")
                        },
                         {
                            name:"catalogo-variedades-cafe",
                            import: require("../../../assets/imagenes/catalogo-variedades-cafe.png")
                        },
                        {
                            name:"Icono-Demostraciones-Cafe",
                            import: require("../../../assets/imagenes/Icono-Demostraciones-Cafe.png")
                        },
                        {
                            name:"icono-caja-de-herramientas-frijol",
                            import: require("../../../assets/imagenes/icono-caja-de-herramientas-frijol.png")
                        },
                        {
                            name:"icono-semilla-frijol",
                            import: require("../../../assets/imagenes/icono-semilla-frijol.png")
                        },
                        {
                            name:"icono-grano-frijol",
                            import: require("../../../assets/imagenes/icono-grano-frijol.png")
                        },
                        {
                            name:"Icono-Demostraciones-Frijol",
                            import: require("../../../assets/imagenes/Icono-Demostraciones-Frijol.png")
                        },
                        {
                            name:"Icono-Comercializacion-de-frijol",
                            import: require("../../../assets/imagenes/Icono-Comercializacion-de-frijol.png")
                        },
                        {
                            name:"Icono-Bitacora-Cafe",
                            import: require("../../../assets/imagenes/Icono-Bitacora-cafe.png")
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
                    <Text style={styles.descripcion} >{descripcion}</Text>
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
        marginLeft: width*0.02,

    },
    titulo: {
        fontFamily:"PublicSans_BoldItalic",
        fontSize: 14,
      },
    descripcion:{
        fontFamily:"PublicSans_ThinItalic",
        fontSize: 12,
        width:width*0.70
    }

})

export default ComponenteBoton