import React, { useContext } from "react";
import { StyleSheet, View,ScrollView,Text,TouchableOpacity,Alert,Image } from 'react-native';
import { Table, TableWrapper, Row,Cell } from 'react-native-table-component';
import { Fab,NativeBaseProvider,Icon} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import * as ScreenOrientation from 'expo-screen-orientation';

// Utilizar el contexto de notas
import {ManejoTejidoContext} from "../../context/ManejoTejidoContext"

const ManejosTejidoTabla = ({ navigation }) => {
  const { manejoTejidos,DeleteManejoTejido,refreshTabla } = useContext(ManejoTejidoContext);
  const widthArr = [20, 190, 65, 52, 72, 70,65, 52, 72, 70,160]
  const widthArrDivision = [20, 190, 259, 259,160]
  const tableDivision = [" "," ","Escula de Campo","Parcela Testigo"]
  const tableHead = ['N°', 'Actividad', 'Cantidad', 'Unidad',"costo Unitario L.","Costo Total L.",'Cantidad', 'Unidad',"costo Unitario L.","Costo Total L.","Accion"]
  const tableData = []
  let costoTotalC = 0
  let costoTotalT = 0
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)


  const handlerDeleteManejoTejido = async (id) => {
    // Validar que la nota tiene valor
      await DeleteManejoTejido(id, refreshTabla);
      // Regresar a la pantalla anterior
  };
  const Regresar =() =>{
    navigation.goBack()
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT)
  }

  const Crear =() =>{
    navigation.navigate("manejoTejidoPantallaAgregar")
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT)
  }

  const Editar = (id) => {
    navigation.navigate("manejoTejidoModificar",{id:id})
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT)
  }
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
        const editar = <View style={styles.botones}><TouchableOpacity style={styles.botonEditar} onPress={() => {Editar(id)}}><Text>Editar</Text></TouchableOpacity>{ id < 9 ? null:<TouchableOpacity style={styles.botonEliminar} onPress={()=>{Alert.alert(
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
    <NativeBaseProvider>
      <View style={{marginBottom:"16%"}}>
          <View style={styles.contenedorNavegacion}>
              <TouchableOpacity style={styles.flecha} onPress={()=>{Regresar()}}>
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
            </View>
          </ScrollView>
              
          <Fab renderInPortal={true} backgroundColor="#00A5A3" shadow={5} size="sm" icon={<Icon color="white" as={AntDesign} onPress={() => {Crear()}} name="plus" size="25" />} />
        </View>
      </NativeBaseProvider>

  );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    header: { height: 50,backgroundColor: '#00A5A3' },
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
      height:"21%"
    },
  tamañoFlecha:{
      marginLeft:"2%",
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

export default ManejosTejidoTabla;