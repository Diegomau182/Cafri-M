import React,{useContext,useState,useEffect} from "react"
import { StyleSheet,View,ActivityIndicator,Text,ScrollView,Image,TouchableOpacity,AsyncStorage} from "react-native";
import * as Font from "expo-font"
import { CosechaYVentaCafeCampoContext } from "../../context/CosechaYVentaCafeCampoContext"
import {NativeBaseProvider,CheckIcon,Select,Button,Input} from "native-base"
import * as ScreenOrientation from 'expo-screen-orientation';

const CosechaYVentaCafeCampoPantallaEditar = ({navigation,route}) =>{
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT)
  const {id} = route.params
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const datosContext =  useContext(CosechaYVentaCafeCampoContext)
  const {cosechaYVentaCafeC ,getCosechaYVentaCafeCampoById, updateCosechaYVentaCafeCampo ,refreshTabla} = datosContext;
  const [cantidad, setCantidad] = useState(0)
  const [unidad, setUnidad] = useState(0)
  const [tipoCafe, setTipoCafe] = useState(null)
  const [entidad, setEntidad] = useState(null)
  const [cantidadV, setCantidadV] = useState(0)
  const [unidadV, setUnidadV] = useState(0)
  const [tipoCafeV, setTipoCafeV] = useState(null)
  const [precioQQ, setPrecioQQ] = useState(null)
  const [premioCalidad, setPremioCalidad] = useState(0)

  useEffect(() => {
    getCosechaYVentaCafeCampoById(id);
    // Verificar si la nota tiene valor previo a extraer sus valores
  }, [id]);
     
   // Cargar la fuente de manera asíncrona
  useEffect(() => {
    const loadFontsAsync = async () => {
      await Font.loadAsync({
          PublicSans_BoldItalic: require(`../../../assets/fonts/PublicSans-BoldItalic.ttf`),
          PublicSans_SemiBold: require(`../../../assets/fonts/PublicSans-SemiBold.ttf`)
      }).then(() => {
      setFontsLoaded(true);
    });
    };
    loadFontsAsync();
  }, []);
  const Regresar = () =>{
    navigation.goBack()
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
  }
  const handlerModifyCosechaYVentaCafeCampo = async () => {
    // Validar que la nota tiene valor
      const costoT = (cantidadV * precioQQ) + (cantidadV * premioCalidad)

      await updateCosechaYVentaCafeCampo(cantidad,unidad,tipoCafe,entidad,cantidadV,unidadV,tipoCafeV,precioQQ,premioCalidad,costoT, id, refreshTabla);
      // Regresar a la pantalla anterior
      navigation.goBack();
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
        console.log("error");
  };

  if(fontsLoaded == false)
  {
    return (
        <View style={{flex: 1, justifyContent: "center", alignContent:"center",alignItems:"center"}}>
        <ActivityIndicator size="large" color="#E16837" />
      </View>
      )
  }
  else{
      return(
        <View style={styles.fondo}>
            <View style={styles.contenedorNavegacion}>
                <TouchableOpacity style={styles.flecha} onPress={()=>{Regresar()}}>
                        <Image style={styles.tamañoFlecha} source={require('../../../assets/imagenes/flecha.png')}/>
                </TouchableOpacity>
            </View>

            <View style={styles.contenedortitulo}>
                <Text style={styles.titulo}>Esta editando la actividad de: {cosechaYVentaCafeC[0].detalleCosecha}</Text>
            </View>
            <ScrollView style={styles.row}>
              <NativeBaseProvider>

                  <Text style={styles.titulosImput}>Cantidad: </Text>
                  <Input
                    onChangeText={setCantidad}
                    keyboardType="numeric"
                    marginLeft={"5%"}
                    maxW="90%"
                  />

                  <Text style={styles.titulosImput}>Unidad: </Text>
                  <Input
                    onChangeText={setUnidad}
                    keyboardType="numeric"
                    marginLeft={"5%"}
                    maxW="90%"
                  />

                  <Text style={styles.titulosImput}>Tipo Café: </Text>
                    <Select selectedValue={tipoCafe} minWidth="200" accessibilityLabel="Tipo de cafe" placeholder="Tipo de cafe" _selectedItem={{
                      bg: "teal.600",
                      endIcon: <CheckIcon size="5" />
                      }} mt={1} onValueChange={itemValue => setTipoCafe(itemValue)}>
                      <Select.Item label="Lempira" value="Lempira" />
                      <Select.Item label="Bourbon" value="Bourbon" />
                      <Select.Item label="Catuai" value="Catuai" />
                    </Select>


                  <Text style={styles.titulosImput}>Entidades: </Text>
                  <Input
                    onChangeText={setEntidad}
                    marginLeft={"5%"}
                    maxW="90%"
                  />

                  <Text style={styles.titulosImput}>Cantidad Venta: </Text>
                  <Input 
                    onChangeText={setCantidadV}
                    keyboardType="numeric"
                    marginLeft={"5%"}
                    maxW="90%"
                  />

                  <Text style={styles.titulosImput}>Unidad: </Text>
                  <Input
                    onChangeText={setUnidadV}
                    keyboardType="numeric"
                    marginLeft={"5%"}
                    maxW="90%"
                  />

                  <Text style={styles.titulosImput}>Tipo Café: </Text>
                    <Select selectedValue={tipoCafeV} minWidth="200" accessibilityLabel="Tipo de cafe" placeholder="Tipo de cafe" _selectedItem={{
                      bg: "teal.600",
                      endIcon: <CheckIcon size="5" />
                      }} mt={1} onValueChange={itemValue => setTipoCafeV(itemValue)}>
                      <Select.Item label="Lempira" value="Lempira" />
                      <Select.Item label="Bourbon" value="Bourbon" />
                      <Select.Item label="Catuai" value="Catuai" />
                    </Select>

                  <Text style={styles.titulosImput}>Precio L./qq: </Text>
                  <Input
                    onChangeText={setPrecioQQ}
                    keyboardType="numeric"
                    marginLeft={"5%"}
                    maxW="90%"
                  />

                  <Text style={styles.titulosImput}>Premio calidad L./qq </Text>
                  <Input 
                    onChangeText={setPremioCalidad}
                    keyboardType="numeric"
                    marginLeft={"5%"}
                    maxW="90%"
                  />

                  <Button style={styles.guardar} onPress={handlerModifyCosechaYVentaCafeCampo}>
                  <Text style={styles.textoGuardar}>Guardar</Text>
                  </Button>
              </NativeBaseProvider>

            </ScrollView>
        </View>
    )
  }
}
const styles = StyleSheet.create({
  row: {
      flex:1,
    },
  fondo:{
      flex:1,
      backgroundColor:'#F1F1F5',
   },
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
      textAlign:"center"
  },

  tituloDos:{
    fontFamily:"PublicSans_BoldItalic",
    fontSize: 20,
    textAlign:"left",
    marginLeft:"5%"
  },

  titulosImput:{
    marginTop:"5%",
    fontFamily:"PublicSans_SemiBold",
    fontSize: 15,
    textAlign:"left",
    marginLeft:"5%",
    marginBottom:"2%"
  },

  Input:{
    maxWidth:1
  },
  guardar:{
    marginTop:"5%",
    marginBottom:"5%",
    marginHorizontal:"10%",
    backgroundColor:"#9FA617",
    
  },
  textoGuardar:{
    fontSize:18
  },
  contenedortitulo:{
      marginLeft:"5%",
      marginTop:"5%",
      width:"90%",
      height:"10%",
      alignItems:"center"
  },
  })

export default CosechaYVentaCafeCampoPantallaEditar