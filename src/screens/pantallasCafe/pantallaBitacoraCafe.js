import React  from "react"
import {Text,View,StyleSheet,Image,TouchableOpacity,ScrollView} from "react-native"
import ComponenteGuia from "../../components/component/ComponenteGuia"

const PantallaBitacoraCafe = ({navigation}) =>{
    return(
        <View style={styles.fondo}>
            <View style={styles.contenedorNavegacion}>
                <TouchableOpacity style={styles.flecha} onPress={()=>{navigation.navigate("homeTabCafe")}}>
                        <Image style={styles.tamañoFlecha} source={require('../../../assets/imagenes/flecha.png')}/>
                </TouchableOpacity>
            </View>

            <View style={styles.contenedortitulo}>
                <Text style={styles.titulo}>Bitacora Café</Text>
            </View>
            <ScrollView>
            <View style={styles.row}>
                <ComponenteGuia titulo="PROGRAMA DE MANEJO DE FINCA DE CAFÉ"  imagen="1" callback={()=>{navigation.navigate("guiaN1Cafe")}} />
                <ComponenteGuia titulo="MANEJO DE TEJIDO"  imagen="2" callback={()=>{navigation.navigate("manejosTejidoTabla")}} />
                <ComponenteGuia titulo="CONTROL Y COSTOS DE FERTILIZACIÓN DE CAFÉ"  imagen="3" callback={()=>{navigation.navigate("FertilizacionCafeTable")}} />
                <ComponenteGuia titulo="CONTROL Y COSTOS SOBRE MANEJO INTEGRADO DE PLAGAS Y ENFERMEDADES"  imagen="4" callback={()=>{navigation.navigate("ManejoEnferYPlaTable")}} />
                <ComponenteGuia titulo="CONTROL Y COSTOS DE COSECHA Y BENEFICIADO DE CAFÉ"  imagen="5" callback={()=>{navigation.navigate("ControlCostoYBeneficiadoTabla")}} />
                <ComponenteGuia titulo="COSECHA Y VENTAS DE CAFÉ CAMPO"  imagen="6" callback={()=>{navigation.navigate("CosechaYVentasCafeCampoTabla")}} />
                <ComponenteGuia titulo="COSECHA Y VENTAS DE CAFÉ TESTIGO"  imagen="7" callback={()=>{navigation.navigate("CosechaYVentasCafeTestigoTabla")}} />
                <ComponenteGuia titulo="RESUMEN DE PÉRDIDAS O GANANCIAS"  imagen="8" callback={()=>{navigation.navigate("PantallaResumenTabla")}} />
                <ComponenteGuia titulo="APUNTES"  imagen="9" callback={()=>{navigation.navigate("PantallaListaApuntes")}} />
            </View>
            </ScrollView>
        </View>
    )
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
    }

})

export default PantallaBitacoraCafe