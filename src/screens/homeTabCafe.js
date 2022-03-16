import React from "react"
import { StyleSheet,Image,View} from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import pantallaCafe from "./pantallaCafe"
import pantallaApps from "./pantallaApps"
const Tab = createMaterialTopTabNavigator();

const homeTabCafe =({navigation})=>{
    return(
        <View style={styles.fondo}>
            <View style={styles.contenedorImagen}>
                <Image style={styles.estiloImagen} source={require('../../assets/imagenes/CafriLogoVacio.png')}/>
                <Image style={styles.estiloMenu} source={require('../../assets/imagenes/Menu.png')}/>
            </View>
            <Tab.Navigator screenOptions={{
                            tabBarActiveTintColor: '#000',
                            tabBarLabelStyle: { fontSize: 15 },
                            tabBarStyle: { backgroundColor: '#9FA617', height:"10%", justifyContent:"center"},
            }}>
                <Tab.Screen name="Biblioteca" component={pantallaCafe} />
                <Tab.Screen name="Apps" component={pantallaApps} />
            </Tab.Navigator>
        </View>
    )
}
const styles = StyleSheet.create({
    fondo:{
        flex:1,
        backgroundColor:'#F1F1F5',
     },
    contenedorImagen: {
        backgroundColor:"#9FA617",
        alignItems:"center",
        flexDirection:"row",
        height:"20%",
      },
    estiloImagen:{
        marginLeft:"15%",
        width:"70%",
        height:"100%",
        marginTop:"7%"
    },
    estiloMenu:{
        marginLeft:"4%",
        marginTop:"-15%",
        width:"7%",
        height:"15%"
    },
    })
export default homeTabCafe

