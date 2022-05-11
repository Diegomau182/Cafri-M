import React, { useContext } from "react";
import { StyleSheet, View,ScrollView,Text,TouchableOpacity,Alert } from 'react-native';
import { Table, TableWrapper, Row,Cell } from 'react-native-table-component';

// Utilizar el contexto de notas
import { CosechaYVentaCafeCampoContext } from "../../context/CosechaYVentaCafeCampoContext";

const CosechaYVentasCafeCampoTabla = ({ navigation }) => {
  const { cosechaYVentaCafeCampos, refreshTabla } = useContext(CosechaYVentaCafeCampoContext);
  const widthArr = [40, 200, 80, 80, 140, 180, 80, 80, 140 , 120, 120, 120, 160]
  const tableHead = ['N°', 'Detalle de cosechas ', 'Cantidad', 'Unidad', 'Tipo de café ','Entidad a la que vendió café',"Cantidad vendida","Unidad",'Tipo de café', 'Precio L./ qq ',"Premio calidad L./qq","Ingreso total L.","Accion"]
  const tableData = []
  let costoTotalC = 0

  
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
        const editar = <View style={styles.botones}><TouchableOpacity style={styles.botonEditar} onPress={() => {navigation.navigate("CosechaYVentaCafeCampoPantallaEditar",{id:id})}}><Text>Editar</Text></TouchableOpacity></View>
        const arreglo = [id,detalleCosecha,cantidad,unidad,tipoCafe,entidadCompra,cantidadVendida,unidadVendida,tipoCafeVendido, precioQQ, premioCalidad, ingresoTotal,editar]     
        costoTotalC = costoTotalC + ingresoTotal
        tableData.push(arreglo)

    }

    const arregloSuma = [" ","Total"," "," "," "," "," "," "," "," "," ",costoTotalC," "," "]
        
        tableData.push(arregloSuma)

  return (
    <View style={styles.container}>
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
    header: { height: 80,backgroundColor: '#00A5A3' },
    text: { textAlign: 'center', fontWeight: '100' },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, backgroundColor: '#E7E6E1',borderColor: '#C1C0B9', borderWidth:.5},
    botones:{alignItems:"center",flexDirection:"row"},
    botonEditar:{marginLeft:10,backgroundColor:"#F38F1D",borderRadius:10,width:"30%",height:"90%",justifyContent:"center",alignItems:"center"},
    botonEliminar:{marginLeft:5,backgroundColor:"#C60651",borderRadius:10,width:"50%",height:"90%",justifyContent:"center",alignItems:"center"}
  });

export default CosechaYVentasCafeCampoTabla;