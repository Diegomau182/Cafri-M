import React, { useContext } from "react";
import { StyleSheet, View,ScrollView,Text,TouchableOpacity,Alert,Image } from 'react-native';
import { Table, TableWrapper, Row,Cell } from 'react-native-table-component';

// Utilizar el contexto de notas
import {ManejoTejidoContext} from "../../context/ManejoTejidoContext"
import { FertilizacionCafeContext } from "../../context/FertilizacionCafeContext";
import { ManejoPlaYEnferContext } from "../../context/ManejoPlaYEnferContext";
import { ControlCostoYBeneficiadoContext } from "../../context/ControlCostoYBeneficiadoContext";
import { CosechaYVentaCafeCampoContext } from "../../context/CosechaYVentaCafeCampoContext";
import { CosechaYVentaCafeTestigoContext } from "../../context/CosechaYVentaCafeTestigoContext"; 
import * as ScreenOrientation from 'expo-screen-orientation';

const PantallaResumenTabla = ({ navigation }) => {
  const { manejoTejidoSum,refreshTabla} = useContext(ManejoTejidoContext);
  const{fertilizacionCafeSum}=useContext(FertilizacionCafeContext)
  const{manejoPlaYEnferSum} = useContext(ManejoPlaYEnferContext)
  const{controlCostoYBeneficiadoSum} = useContext(ControlCostoYBeneficiadoContext)
  const{cosechaYVentaCafeCSum} = useContext(CosechaYVentaCafeCampoContext)
  const{cosechaYVentaCafeTestigoSum} = useContext(CosechaYVentaCafeTestigoContext)
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)

  const Regresar =() =>{
    navigation.goBack()
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT)
  }
  
  const widthArr = [300, 200, 200]
  const tableHead = ['Descripcion', 'Valor en Lempiras Escuela de campo', 'Valor en Lempiras Parecela Testigo']
  const tableData = []
  
  const costoManejofincaCampo = manejoTejidoSum[0]["SUM(costoTotalCampo)"] + fertilizacionCafeSum[0]["SUM(costoTotalCampo)"] + manejoPlaYEnferSum[0]["SUM(costoTotalCampo)"] 
  const costoManejofincaTestigo = manejoTejidoSum[0]["SUM(costoTotalTestigo)"] + fertilizacionCafeSum[0]["SUM(costoTotalTestigo)"] + manejoPlaYEnferSum[0]["SUM(costoTotalTestigo)"]
  let costoTotalC = cosechaYVentaCafeCSum[0]["SUM(ingresoTotal)"] - (costoManejofincaCampo + controlCostoYBeneficiadoSum[0]["SUM(costoTotalCampo)"])
  let costoTotalT = cosechaYVentaCafeTestigoSum[0]["SUM(ingresoTotal)"] - (costoManejofincaTestigo + controlCostoYBeneficiadoSum[0]["SUM(costoTotalTestigo)"])
      
        tableData.push(["--------","Ingresos","--------"])
        tableData.push(["Ingreso total venta de café",cosechaYVentaCafeCSum[0]["SUM(ingresoTotal)"],cosechaYVentaCafeTestigoSum[0]["SUM(ingresoTotal)"]])
        tableData.push(["--------","Engresos","--------"])
        tableData.push(["Costos manejo de finca",costoManejofincaCampo,costoManejofincaTestigo])
        tableData.push(["Costos de beneficiado de café",controlCostoYBeneficiadoSum[0]["SUM(costoTotalCampo)"],controlCostoYBeneficiadoSum[0]["SUM(costoTotalTestigo)"]])
        tableData.push(["Ganancia o perdida",costoTotalC,costoTotalT])
  
        return (
    <View style={{marginBottom:"13%"}}>
                  <View style={styles.contenedorNavegacion}>
                <TouchableOpacity style={styles.flecha} onPress={()=>{Regresar()}}>
                        <Image style={styles.tamañoFlecha} source={require('../../../assets/imagenes/flecha.png')}/>
                </TouchableOpacity>
            </View>
            <View style={styles.contenedortitulo}>
                <Text style={styles.titulo}>RESUMEN DE PÉRDIDAS O GANANCIAS</Text>
            </View>
        <ScrollView style={{alignContent:"center",alignSelf:"center"}} horizontal={true}>
          <View>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
            <Row data={tableHead} widthArr={widthArr} style={styles.header} textStyle={styles.text}/>
            </Table>
            <ScrollView style={styles.dataWrapper}> 
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              {
                  tableData.map((rowData, index) => (
                    <>
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={widthArr}
                      style={[styles.row, index %2 && {backgroundColor: '#F7F6E7'}]}
                      textStyle={styles.text}
                    />
                    </>
                  )) 
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>

  );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    header: { height: 50,backgroundColor: '#7B3D1A' },
    text: { textAlign: 'center', fontWeight: '100' },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, backgroundColor: '#E7E6E1',borderColor: '#C1C0B9', borderWidth:.5},
    botones:{alignItems:"center",flexDirection:"row"},
    botonEditar:{marginLeft:10,backgroundColor:"#F38F1D",borderRadius:10,width:"30%",height:"90%",justifyContent:"center",alignItems:"center"},
    botonEliminar:{marginLeft:5,backgroundColor:"#C60651",borderRadius:10,width:"50%",height:"90%",justifyContent:"center",alignItems:"center"},
  
    contenedorNavegacion: {
      backgroundColor:"#717073",
      alignItems:"flex-start",
      flexDirection:"row",
      height:"21%"
    },
  tamañoFlecha:{
      marginLeft:"1%",
      width:"20%",
      height:"30%",
      marginTop: "13%"
  },
  flecha:{
      width:"40%",
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
    marginTop:"2%",
    width:"90%",
    height:"10%",
    alignItems:"center"
  },
  });

export default PantallaResumenTabla;