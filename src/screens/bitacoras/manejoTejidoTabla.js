import React, { useContext } from "react";
import { StyleSheet, View,ScrollView,Text,TouchableOpacity,Alert,Image } from 'react-native';
import { Table, TableWrapper, Row,Cell } from 'react-native-table-component';
import { Fab,NativeBaseProvider,Icon} from "native-base";
import { AntDesign } from "@expo/vector-icons";

// Utilizar el contexto de notas
import {ManejoTejidoContext} from "../../context/ManejoTejidoContext"

const ManejosTejidoTabla = ({ navigation }) => {
  const { manejoTejidos,DeleteManejoTejido,refreshTabla } = useContext(ManejoTejidoContext);
  const widthArr = [40, 200, 80, 80, 120, 120, 80, 80, 120, 120,160]
  const widthArrDivision = [40, 200, 400, 400,160]
  const tableDivision = [" "," ","Escula de Campo","Parcela Testigo"]
  const tableHead = ['N°', 'Actividad', 'Cantidad', 'Unidad',"costo Unitario L.","Costo Total L.",'Cantidad', 'Unidad',"costo Unitario L.","Costo Total L.","Accion"]
  const tableData = []
  let costoTotalC = 0
  let costoTotalT = 0



  const handlerDeleteManejoTejido = async (id) => {
    // Validar que la nota tiene valor
      await DeleteManejoTejido(id, refreshTabla);
      // Regresar a la pantalla anterior
  };
  
    for (let i = 0; i < manejoTejidos.length; i++) {
        const id = manejoTejidos[i]["id"] 
        const actividad = manejoTejidos[i]["actividad"]
        const cantidadCampo = manejoTejidos[i]["cantidadCampo"] 
        const unidadCampo = manejoTejidos[i]["unidadCampo"] 
        const costeUnitarioCampo = manejoTejidos[i]["costeUnitarioCampo"] 
        const costoTotalCampo = manejoTejidos[i]["costoTotalCampo"] 
        const cantidadTestigo = manejoTejidos[i]["cantidadTestigo"] 
        const unidadTestigo = manejoTejidos[i]["unidadTestigo"] 
        const costeUnitarioTestigo = manejoTejidos[i]["costeUnitarioTestigo"] 
        const costoTotalTestigo = manejoTejidos[i]["costoTotalTestigo"] 
        const editar = <View style={styles.botones}><TouchableOpacity style={styles.botonEditar} onPress={() => {navigation.navigate("manejoTejidoModificar",{id:id});}}><Text>Editar</Text></TouchableOpacity>{ id < 9 ? null:<TouchableOpacity style={styles.botonEliminar} onPress={()=>{Alert.alert(
          "Eliminar",
          "¿Esta seguro que desea eliminar esta actividad?",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: "OK", onPress: () => {handlerDeleteManejoTejido(id)}}
          ]
        )}}><Text>Eliminar</Text></TouchableOpacity>}</View>
        const arreglo = [id,actividad,cantidadCampo,unidadCampo,costeUnitarioCampo,costoTotalCampo,cantidadTestigo,unidadTestigo,costeUnitarioTestigo,costoTotalTestigo,editar]
        
        costoTotalC = costoTotalC + costoTotalCampo
        costoTotalT = costoTotalT + costoTotalTestigo
        tableData.push(arreglo)

    }

    const arregloSuma = [" ","Total"," "," "," ",costoTotalC," "," "," ",costoTotalT," "]
        
        tableData.push(arregloSuma)

  return (
    <View style={styles.container}>
                  <View style={styles.contenedorNavegacion}>
                <TouchableOpacity style={styles.flecha} onPress={()=>{navigation.goBack()}}>
                        <Image style={styles.tamañoFlecha} source={require('../../../assets/imagenes/flecha.png')}/>
                </TouchableOpacity>
            </View>
            <View style={styles.contenedortitulo}>
                <Text style={styles.titulo}>Manejo de Tejido</Text>
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
            <NativeBaseProvider>
              <Fab renderInPortal={false} backgroundColor="#00A5A3" shadow={2} size="sm" icon={<Icon color="white" as={AntDesign} onPress={() => {navigation.navigate("manejoTejidoPantallaAgregar")}} name="plus" size="sm" />} />
              </NativeBaseProvider>
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
    botonEliminar:{marginLeft:5,backgroundColor:"#C60651",borderRadius:10,width:"50%",height:"90%",justifyContent:"center",alignItems:"center"},
  
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
},
  });

export default ManejosTejidoTabla;