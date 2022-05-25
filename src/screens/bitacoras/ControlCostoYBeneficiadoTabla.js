import React, { useContext } from "react";
import { StyleSheet, View,ScrollView,Text,TouchableOpacity,Alert , Image} from 'react-native';
import { Table, TableWrapper, Row,Cell } from 'react-native-table-component';
import * as ScreenOrientation from 'expo-screen-orientation';

// Utilizar el contexto de notas
import {ControlCostoYBeneficiadoContext} from "../../context/ControlCostoYBeneficiadoContext"

const ControlCostoYBeneficiadoTabla = ({ navigation }) => {
  const { controlCostoYBeneficiados,refreshTabla } = useContext(ControlCostoYBeneficiadoContext);
  const widthArr = [20, 150, 65, 60, 72, 60,  65, 60, 72, 60,100]
  const widthArrDivision = [20, 150, 257, 257,100]
  const tableDivision = [" "," ","Escula de Campo","Parcela Testigo"]
  const tableHead = ['N°', 'Actividad', 'Cantidad', 'Unidad',"costo Unitario L.","Costo Total L.",'Cantidad', 'Unidad',"costo Unitario L.","Costo Total L.","Accion"]
  const tableData = []
  let costoTotalC = 0
  let costoTotalT = 0
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
  const Regresar =() =>{
    navigation.goBack()
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT)
  }
  const Editar = (id) =>{
    navigation.navigate("ControlCostoYBeneficiadoPantallaEditar",{id:id})
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT)

  }
  
    for (let i = 0; i < controlCostoYBeneficiados.length; i++) {
        const id = controlCostoYBeneficiados[i]["id"] 
        const actividad = controlCostoYBeneficiados[i]["actividad"]
        const cantidadCampo = controlCostoYBeneficiados[i]["cantidadCampo"] 
        const unidadCampo = controlCostoYBeneficiados[i]["unidadCampo"] 
        const costeUnitarioCampo = controlCostoYBeneficiados[i]["costeUnitarioCampo"] 
        const costoTotalCampo = controlCostoYBeneficiados[i]["costoTotalCampo"] 
        const cantidadTestigo = controlCostoYBeneficiados[i]["cantidadTestigo"] 
        const unidadTestigo = controlCostoYBeneficiados[i]["unidadTestigo"] 
        const costeUnitarioTestigo = controlCostoYBeneficiados[i]["costeUnitarioTestigo"] 
        const costoTotalTestigo = controlCostoYBeneficiados[i]["costoTotalTestigo"] 
        const editar = <View style={styles.botones}><TouchableOpacity style={styles.botonEditar} onPress={() => {Editar(id)}}><Text>Editar</Text></TouchableOpacity></View>
        const arreglo = [id,actividad,cantidadCampo,unidadCampo,costeUnitarioCampo,costoTotalCampo,cantidadTestigo,unidadTestigo,costeUnitarioTestigo,costoTotalTestigo,editar]
        
        costoTotalC = costoTotalC + costoTotalCampo
        costoTotalT = costoTotalT + costoTotalTestigo
        tableData.push(arreglo)

    }

    const arregloSuma = [" ","Total"," "," "," ",costoTotalC," "," "," ",costoTotalT," "]
        tableData.push(arregloSuma)

  return (
    <View style={{marginBottom:"13%"}}>
              <View style={styles.contenedorNavegacion}>
                <TouchableOpacity style={styles.flecha} onPress={()=>{Regresar()}}>
                        <Image style={styles.tamañoFlecha} source={require('../../../assets/imagenes/flecha.png')}/>
                </TouchableOpacity>
            </View>
            <View style={styles.contenedortitulo}>
                <Text style={styles.titulo}>Control, Costos de cosecha y Beneficiados de café</Text>
            </View>
        <ScrollView horizontal={true}>
          <View>
          <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
            <Row data={tableDivision} widthArr={widthArrDivision} style={styles.header} textStyle={styles.text}/>
            </Table>
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
  header: { height: 40,backgroundColor: '#00A5A3' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 60, backgroundColor: '#E7E6E1',borderColor: '#C1C0B9', borderWidth:.5},
  botones:{alignItems:"center",flexDirection:"row",alignSelf:"center"},
  botonEditar:{backgroundColor:"#9FA617",borderRadius:10,width:"40%",height:"90%",justifyContent:"center",alignItems:"center"},
  botonEliminar:{marginLeft:5,backgroundColor:"#C60651",borderRadius:10,width:"70%",height:"90%",justifyContent:"center",alignItems:"center"},
            
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

export default ControlCostoYBeneficiadoTabla;