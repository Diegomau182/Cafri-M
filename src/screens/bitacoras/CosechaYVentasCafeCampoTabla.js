import React, { useContext } from "react";
import { StyleSheet, View,ScrollView,Text,TouchableOpacity,Alert, Image} from 'react-native';
import { Table, TableWrapper, Row,Cell } from 'react-native-table-component';
import * as ScreenOrientation from 'expo-screen-orientation';

// Utilizar el contexto de notas
import { CosechaYVentaCafeCampoContext } from "../../context/CosechaYVentaCafeCampoContext";

const CosechaYVentasCafeCampoTabla = ({ navigation }) => {
  const { cosechaYVentaCafeCampos, refreshTabla } = useContext(CosechaYVentaCafeCampoContext);
  const widthArr = [20, 150, 65, 60, 100, 160, 65, 60, 100 , 60, 100, 70, 100]
  const tableHead = ['N°', 'Detalle de cosechas ', 'Cantidad', 'Unidad', 'Tipo de café ','Entidad a la que vendió café',"Cantidad vendida","Unidad",'Tipo de café', 'Precio L./ qq ',"Premio calidad L./qq","Ingreso total L.","Accion"]
  const tableData = []
  let costoTotalC = 0
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)

  const Regresar =() =>{
    navigation.goBack()
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT)
  }

  const Editar =(id)=>{
    navigation.navigate("CosechaYVentaCafeCampoPantallaEditar",{id:id})
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT)
  }
  
    for (let i = 0; i < cosechaYVentaCafeCampos.length; i++) {
        const id = cosechaYVentaCafeCampos[i]["id"] 
        const detalleCosecha = cosechaYVentaCafeCampos[i]["detalleCosecha"]
        const cantidad = cosechaYVentaCafeCampos[i]["cantidad"] 
        const unidad = cosechaYVentaCafeCampos[i]["unidad"] 
        const tipoCafe = cosechaYVentaCafeCampos[i]["tipoCafe"]
        const entidadCompra = cosechaYVentaCafeCampos[i]["entidadCompra"]
        const cantidadVendida = cosechaYVentaCafeCampos[i]["cantidadVendida"] 
        const unidadVendida = cosechaYVentaCafeCampos[i]["unidadVendida"] 
        const tipoCafeVendido = cosechaYVentaCafeCampos[i]["tipoCafeVendido"] 
        const precioQQ = cosechaYVentaCafeCampos[i]["precioQQ"] 
        const premioCalidad = cosechaYVentaCafeCampos[i]["premioCalidad"]
        const ingresoTotal = cosechaYVentaCafeCampos[i]["ingresoTotal"]
        const editar = <View style={styles.botones}><TouchableOpacity style={styles.botonEditar} onPress={() => {Editar(id)}}><Text>Editar</Text></TouchableOpacity></View>
        const arreglo = [id,detalleCosecha,cantidad,unidad,tipoCafe,entidadCompra,cantidadVendida,unidadVendida,tipoCafeVendido, precioQQ, premioCalidad, ingresoTotal,editar]     
        costoTotalC = costoTotalC + ingresoTotal
        tableData.push(arreglo)

    }

    const arregloSuma = [" ","Total"," "," "," "," "," "," "," "," "," ",costoTotalC," "," "]
        
        tableData.push(arregloSuma)

  return (
    <View style={{marginBottom:"13%"}}>
            <View style={styles.contenedorNavegacion}>
                <TouchableOpacity style={styles.flecha} onPress={()=>{Regresar()}}>
                        <Image style={styles.tamañoFlecha} source={require('../../../assets/imagenes/flecha.png')}/>
                </TouchableOpacity>
            </View>
            <View style={styles.contenedortitulo}>
                <Text style={styles.titulo}>Cosecha y ventas de Café(Campo)</Text>
            </View>
        <ScrollView horizontal={true}>
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
  header: { height: 50,backgroundColor: '#00A5A3' },
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

export default CosechaYVentasCafeCampoTabla;