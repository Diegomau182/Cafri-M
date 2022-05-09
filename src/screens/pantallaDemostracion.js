import React,{useState,useEffect} from "react";
import YoutubePlayer from "react-native-youtube-iframe"
import {View,Text,StyleSheet,Image,TouchableOpacity,ScrollView,ActivityIndicator} from "react-native"
import * as Font from "expo-font"

const PantallaDemostracion=({navigation:{goBack},route})=>{
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const video = route.params.idVideo
    const historia = route.params.historia
    const titulo = route.params.titulo 

    const loadFontsAsync = async () => {
        await Font.loadAsync({
            PublicSans_BoldItalic: require(`../../assets/fonts/PublicSans-BoldItalic.ttf`),
            PublicSans_Light: require('../../assets/fonts/PublicSans-Light.ttf')
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
    <View style={styles.fondo}>
            <View style={styles.contenedorNavegacion}>
                <TouchableOpacity style={styles.flecha} onPress={()=>{goBack()}}>
                    <Image style={styles.tamañoFlecha} source={require('../../assets/imagenes/flecha.png')}/>
                </TouchableOpacity>
            </View>
            <View style={styles.contenedortitulo}>
                    <Text style={styles.titulo}>
                        {titulo}
                    </Text>
            </View>
            <View>
                    <YoutubePlayer 
                    height={220}
                    play={false}
                    videoId={video}
                    />
                </View>
            <ScrollView style={{marginRight:"3%",marginLeft:"3%"}}> 
                <Text style={styles.info}>
                    {historia}
                </Text>
            </ScrollView> 
    </View>
    );
    } 
}

const styles = StyleSheet.create({
    fondo:{
        flex:1,
        backgroundColor:'#F1F1F5',
    },
    contenedorNavegacion: {
        backgroundColor:"#9FA617",
        alignItems:"flex-start",
        flexDirection:"row",
        height:"15%"
    },
    tamañoFlecha:{
        marginLeft:"20%",
        width:"60%",
        height:"30%",
        marginTop: "70%"
    },
    flecha:{
        marginLeft:"1%",
        width:"20%",
        height:"100%",
    },
    titulo:{
        fontFamily:"PublicSans_BoldItalic",
        fontSize: 20,
        textAlign:"center"
    },
    contenedortitulo:{
        marginLeft:"5%",
        marginTop:"10%",
        width:"90%",
        height:"10%",
    },
    info:{
        textAlign:"justify",
        fontSize:16,
        fontFamily:"PublicSans_Light",
    },
})
export default PantallaDemostracion