import React,{useState,useEffect} from "react";
import { StyleSheet,ActivityIndicator,View,Text} from "react-native";
import ComponentePrecio from "../components/component/ComponentePrecio";
import * as Font from "expo-font"

const pantallaApps = ({navigation}) =>{
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
        <ActivityIndicator size="large" color="#E16837" />
      </View>
      )
  }
  else{
    return(
        <View>
        <Text style={styles.titulo}>Precio internacional del café</Text>
        <ComponentePrecio precioHoy={232.58} precioAyer={225.65}/>
        </View>
    )
  }
}

 const styles = StyleSheet.create({
     fondo:{
     },
     titulo:{
         fontSize:20,
         fontFamily:"PublicSans_BoldItalic",  
         textAlign:"center"  
     }
 })

export default pantallaApps