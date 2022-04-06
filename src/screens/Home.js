import React,{useState,useEffect} from "react";
import { StyleSheet, View,TouchableOpacity ,Text,Image,ActivityIndicator} from "react-native";
import * as Font from "expo-font"
const Home = ({navigation}) => {
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
        <ActivityIndicator size="large" color="orange" />
      </View>
      )
  }
  else{
    return (
        < >
            <View style={styles.fondo}>
                <View style={styles.contenedorImagen}>
                    <Image style={styles.estiloImagen} source={require('../../assets/imagenes/CafriLogo.png')}/>
                    <Text style={styles.textoServe}>Proyecto Mejoramiento Agricola Sostenible</Text>
                </View>
                
                <View style={styles.contenedorBotones}>
                <TouchableOpacity style={styles.fondoBotones} onPress={()=>{navigation.navigate("homeTabCafe")}}>
                        <Image style={styles.tamañoIconoCafe} source={require("../../assets/imagenes/icono-cafe.png")}/>
                        <Text style={styles.letra}>Café</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.fondoBotones} onPress={()=>{navigation.navigate("homeTabFrijol")}}>
                        <Image style={styles.tamañoIconoFrijol} source={require("../../assets/imagenes/Icono-Frijol.png")}/>
                        <Text style={styles.letra}>Frijol</Text>
                    </TouchableOpacity>
                    <Image style={styles.estiloImagenServe} source={require('../../assets/technoServe.png')}/>
                </View>
            </View>
        </>
    );
  }
}
const styles = StyleSheet.create({
    contenedorImagen: {
        flex: 1,
        marginBottom:10,
        alignItems:"center",
      },
    contenedorBotones: {
        flex:2,
        alignItems:"center",
    },
    estiloImagen:{
        width:"80%",
        height:"100%",
        marginTop:"10%",
      
    },
    estiloImagenServe:{
        width:"80%",
        height:"15%",
        marginTop:"15%"
    },
    fondo:{
       flex:1,
       backgroundColor:'#F1F1F5',
    },
    fondoBotones:{
        alignItems:"center",
        flexDirection:"row",
        backgroundColor:"#497838",
        width:"70%",
        height:"15%",
        borderRadius:30,
        marginTop:"10%",
    },
    tamañoIconoCafe:{
       width:"20%",
       height:"60%",
       marginLeft:"5%",
       marginRight:"15%",        
    },
    tamañoIconoFrijol:{
        width:"16%",
        height:"54%",
        marginLeft:"5%",
        marginRight:"15%",        
    },
    letra:{
        fontFamily:"PublicSans_BoldItalic",
        fontSize:25,
    },
    textoServe:{
        fontFamily:"PublicSans_BoldItalic",
        fontSize:18,
        marginTop:"-20%",

    }
});

export default Home