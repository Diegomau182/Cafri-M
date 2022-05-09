import React,{useState,useEffect} from "react";
import { StyleSheet,View,ActivityIndicator,Text,ScrollView,Image,TouchableOpacity} from "react-native";
import * as Font from "expo-font"
import ComponenteListaGuias from "../../components/component/ComponenteListaGuias";
import demostracionCafe from "../../informacion/cafe/demostracionCafe";



const PantallaDemostracionesCafe = ({navigation}) =>{
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const loadFontsAsync = async () => {
        await Font.loadAsync({
            PublicSans_BoldItalic: require(`../../../assets/fonts/PublicSans-BoldItalic.ttf`),
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
                <TouchableOpacity style={styles.flecha} onPress={()=>{navigation.navigate("homeTabCafe")}}>
                        <Image style={styles.tamañoFlecha} source={require('../../../assets/imagenes/flecha.png')}/>
                </TouchableOpacity>
            </View>

            <View style={styles.contenedortitulo}>
                <Text style={styles.titulo}>Demostraciones café</Text>
            </View>
            <ScrollView style={styles.row}>            
                <ComponenteListaGuias titulo={demostracionCafe[0].name}  numero={demostracionCafe[0].numero} callback={()=>{navigation.navigate("pantallaDemostracion",demostracionCafe[0].contenido)}}/>
                <View style = {styles.lineStyle}/>
                <ComponenteListaGuias titulo={demostracionCafe[2].name}  numero={demostracionCafe[2].numero} callback={()=>{navigation.navigate("pantallaDemostracion",demostracionCafe[2].contenido)}}/>
                <View style = {styles.lineStyle}/>
                <ComponenteListaGuias titulo={demostracionCafe[1].name}  numero={demostracionCafe[1].numero} callback={()=>{navigation.navigate("pantallaDemostracion",demostracionCafe[1].contenido)}}/>
                <View style = {styles.lineStyle}/>
                <ComponenteListaGuias titulo={demostracionCafe[3].name}  numero={demostracionCafe[3].numero} callback={()=>{navigation.navigate("pantallaDemostracion",demostracionCafe[3].contenido)}}/>
                <View style = {styles.lineStyle}/>
                <ComponenteListaGuias titulo={demostracionCafe[4].name}  numero={demostracionCafe[4].numero} callback={()=>{navigation.navigate("pantallaDemostracion",demostracionCafe[4].contenido)}}/>
                <View style = {styles.lineStyle}/>
            </ScrollView>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    row: {
        flex:1,
        flexDirection: "column",
      },
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
        marginTop: "80%"
    },
    flecha:{
        marginLeft:"1%",
        width:"20%",
        height:"100%",
    },
    titulo:{
        fontFamily:"PublicSans_BoldItalic",
        fontSize: 20,
        alignItems:"center",
        justifyContent:"center"
    },
    contenedortitulo:{
        marginLeft:"5%",
        marginTop:"5%",
        width:"90%",
        height:"5%",
        alignItems:"center"
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

export default PantallaDemostracionesCafe
