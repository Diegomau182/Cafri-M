import React, { useRef } from 'react';
import { StyleSheet,Image,View,TouchableOpacity} from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import pantallaCafe from "./PantallaCafe"
import pantallaApps from "./PantallaApps"


const Tab = createMaterialTopTabNavigator()

const homeTabCafe =({navigation})=>{
    const menu = useRef();

  const hideMenu = () => menu.current.hide();

  const showMenu = () => menu.current.show();
    return(
        <View style={styles.fondo}>
            <View style={styles.contenedorImagen}>
                <Image style={styles.estiloImagen} source={require('../../assets/imagenes/CafriLogoVacio.png')} />
                <Menu ref={menu} anchor={<TouchableOpacity style={{width:"100%",height:"30%"}} onPress={showMenu}><Image style={{width:40,height:40,marginLeft:10}} source={require('../../assets/imagenes/Menu.png')} /></TouchableOpacity>}>
        <MenuItem >Acerca de</MenuItem>
        <MenuItem >colaboradores</MenuItem>
        <MenuItem onPress={()=>{navigation.navigate("Home")}}>Regresar</MenuItem>
        <MenuDivider />
        <MenuItem onPress={hideMenu}>Ocultar</MenuItem>
      </Menu>
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