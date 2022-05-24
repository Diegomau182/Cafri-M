import React, { useContext } from "react";
import { StyleSheet, View,ScrollView,Text,TouchableOpacity,Alert,Image} from 'react-native';
import { Table, TableWrapper, Row,Cell } from 'react-native-table-component';
import * as ScreenOrientation from 'expo-screen-orientation';

// Utilizar el contexto de notas
import { ManejoPlaYEnferContext } from "../../context/ManejoPlaYEnferContext";

const ManejoEnferYPlaTable = ({ navigation }) => {
  const { manejoPlaYEnfers, refreshTabla } = useContext(ManejoPlaYEnferContext);
  const widthArr = [40, 200, 80, 80,140 ,80 , 120, 120, 80, 80 ,160 ,80 , 120, 120,160]
  const widthArrDivision = [40, 200, 620, 640,160]
  const tableDivision = [" "," ","Escula de Campo","Parcela Testigo"]
  const tableHead = ['N°', 'Actividad', 'Cantidad', 'Unidad', 'Producto','Dosis por MZ',"costo Unitario L.","Costo Total L.",'Cantidad', 'Unidad',"Producto","Dosis por MZ","costo Unitario L.","Costo Total L.","Accion"]
  const tableData = []
  let costoTotalC = 0
  let costoTotalT = 0
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
  
  const Regresar =() =>{
    navigation.goBack()
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT)
  }
  
    for (let i = 0; i < manejoPlaYEnfers.length; i++) {
        const id = manejoPlaYEnfers[i]["id"] 
        const actividad = manejoPlaYEnfers[i]["actividad"]
        const cantidadCampo = manejoPlaYEnfers[i]["cantidadCampo"] 
        const unidadCampo = manejoPlaYEnfers[i]["unidadCampo"] 
        const productoCampo = manejoPlaYEnfers[i]["productoCampo"]
        const dosisCampo = manejoPlaYEnfers[i]["dosisCampo"]
        const costeUnitarioCampo = manejoPlaYEnfers[i]["costeUnitarioCampo"] 
        const costoTotalCampo = manejoPlaYEnfers[i]["costoTotalCampo"] 
        const cantidadTestigo = manejoPlaYEnfers[i]["cantidadTestigo"] 
        const unidadTestigo = manejoPlaYEnfers[i]["unidadTestigo"] 
        const productoTestigo = manejoPlaYEnfers[i]["productoTestigo"]
        const dosisTestigo = manejoPlaYEnfers[i]["dosisTestigo"]
        const costeUnitarioTestigo = manejoPlaYEnfers[i]["costeUnitarioTestigo"] 
        const costoTotalTestigo = manejoPlaYEnfers[i]["costoTotalTestigo"] 
        const editar = <View style={styles.botones}><TouchableOpacity style={styles.botonEditar} onPress={() => {navigation.navigate("ManejoEnferYPlaPantallaEditar",{id:id});}}><Text>Editar</Text></TouchableOpacity></View>
        const arreglo = [id,actividad,cantidadCampo,unidadCampo,productoCampo,dosisCampo,costeUnitarioCampo,costoTotalCampo,cantidadTestigo,unidadTestigo,productoTestigo,dosisTestigo,costeUnitarioTestigo,costoTotalTestigo,editar]     
        costoTotalC = costoTotalC + costoTotalCampo
        costoTotalT = costoTotalT + costoTotalTestigo
        tableData.push(arreglo)

    }

    const arregloSuma = [" ","Total"," "," "," "," "," ",costoTotalC," "," "," "," "," ",costoTotalT," "]
        
        tableData.push(arregloSuma)

  return (
    <View style={styles.container}>
            <View style={styles.contenedorNavegacion}>
                <TouchableOpacity style={styles.flecha} onPress={()=>{Regresar()}}>
                        <Image style={styles.tamañoFlecha} source={require('../../../assets/imagenes/flecha.png')}/>
                </TouchableOpacity>
            </View>
            <View style={styles.contenedortitulo}>
                <Text style={styles.titulo}>Control y costos de la fertilizacion  de café</Text>
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
                      style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
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
    header: { height: 80,backgroundColor: '#00A5A3' },
    text: { textAlign: 'center', fontWeight: '100' },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, backgroundColor: '#E7E6E1',borderColor: '#C1C0B9', borderWidth:.5},
    botones:{alignItems:"center",flexDirection:"row"},
    botonEditar:{marginLeft:10,backgroundColor:"#9FA617",borderRadius:10,width:"30%",height:"90%",justifyContent:"center",alignItems:"center"},
    botonEliminar:{marginLeft:5,backgroundColor:"#C60651",borderRadius:10,width:"50%",height:"90%",justifyContent:"center",alignItems:"center"},
              
    contenedorNavegacion: {
      backgroundColor:"#717073",
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
  });

export default ManejoEnferYPlaTable;