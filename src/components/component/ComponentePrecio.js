import React from "react"
import {View,Text,StyleSheet} from "react-native"

const ComponentePrecio = ({precioHoy, precioAyer}) =>{
    const diferencia = (precioHoy -precioAyer).toFixed(2);
    const colorPrecioHoy = diferencia >= 0 ? "#ADC865" : "#E25B45"
    const colorPrecioAyer = diferencia >= 0 ? "#E25B45" : "#ADC865"
    const simbolo = diferencia >= 0 ? "+" : ""
    return(
        <View style={styles.fondo}>
            <View style={styles.ContenedorPrincipal}>
                <Text style={{color:colorPrecioHoy,fontSize:36}}>{precioHoy} $</Text>
                <Text style={styles.texto}>Precio del café actual</Text>
            </View>
            <View style={styles.contendorFila}>
                <View style={styles.contenedorDatos}>
                <Text style={{color:colorPrecioAyer,fontSize:23}}>{precioAyer} $</Text>
                <Text style={styles.texto}>Precio del café al cierre ayer</Text>
                </View>
                <View style={styles.contenedorDatos}>
                <Text style={{color:colorPrecioHoy,fontSize:23}}>{simbolo}{diferencia} $</Text>
                <Text style={styles.texto}> Diferencia</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    fondo:{
        marginTop:"5%",
        flexDirection:"column",
        height:"50%",
        marginLeft:"8%"
    },
    ContenedorPrincipal:{
        flexDirection:"column",
        alignItems:"center",
        width:"90%",
        borderColor:"black",
        borderWidth:1
    },
    contendorFila:{
        flexDirection:"row",
        marginRight:"10%"
    },
    contenedorDatos:{
        flexDirection:"column",
        alignItems:"center",
        width:"50%",
        height:"100%",
        borderColor:"black",
        borderWidth:1
    },
    texto:{
        fontSize:14,
        textAlign:"center"
    },
})

export default ComponentePrecio