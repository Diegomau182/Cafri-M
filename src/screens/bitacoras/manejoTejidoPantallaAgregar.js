import React,{useContext,useState,useEffect} from "react"
import { StyleSheet,View,ActivityIndicator,Text,ScrollView,Image,TouchableOpacity} from "react-native";
import * as Font from "expo-font"
import { ManejoTejidoContext } from "../../context/ManejoTejidoContext"
import {NativeBaseProvider,Input,Button} from "native-base"

const ManejoTejidoPantallaAgregar = ({navigation}) =>{
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const datosContext =  useContext(ManejoTejidoContext)
    const {addNewManejoTejido,refreshTabla} = datosContext;
  
    const [actividad, setActividad] = useState(null)
    //datos escuela
    const [cantidadC, setCantidadC] = useState(0)
    const [unidadC, setUnidadC] = useState(0)
    const [consteC, setCosteC] = useState(0)
    //datos parcela testigo
    const [cantidadT, setCantidadT] = useState(0)
    const [unidadT, setUnidadT] = useState(0)
    const [consteT, setCosteT] = useState(0)

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
    
      const handleraddNewManejoTejido = async () => {
        // Validar que la nota tiene valor
        if (actividad) {
          const costoC = cantidadC * consteC
          const costoT = cantidadT * consteT
    
          await addNewManejoTejido(actividad,cantidadC,unidadC,consteC,costoC,cantidadT,unidadT,consteT,costoT, refreshTabla);
          // Regresar a la pantalla anterior
          navigation.goBack();
        } else {
            console.log("error");
        }
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
                <TouchableOpacity style={styles.flecha} onPress={()=>{navigation.navigate("manejosTejidoTabla")}}>
                        <Image style={styles.tamañoFlecha} source={require('../../../assets/imagenes/flecha.png')}/>
                </TouchableOpacity>
            </View>

            <View style={styles.contenedortitulo}>
                <Text style={styles.titulo}>Pantalla Agregar Manejo Tejido</Text>
            </View>
            <ScrollView style={styles.row}>
              <NativeBaseProvider>
              <Text style={styles.titulosImput}>Nombre de la actividad: </Text>
                  <Input
                    onChangeText={setActividad}
                    marginLeft={"5%"}
                    maxW="90%"
                    marginBottom={"5%"}
                  />
                  <Text style={styles.tituloDos}>Datos escuela campo</Text>

                  <Text style={styles.titulosImput}>Cantidad: </Text>
                  <Input
                    onChangeText={setCantidadC}
                    keyboardType="numeric"
                    marginLeft={"5%"}
                    maxW="90%"
                  />

                  <Text style={styles.titulosImput}>Unidad: </Text>
                  <Input
                    onChangeText={setUnidadC}
                    keyboardType="numeric"
                    marginLeft={"5%"}
                    maxW="90%"
                  />

                  <Text style={styles.titulosImput}>Costo Unitario L. : </Text>
                  <Input 
                    onChangeText={setCosteC}
                    keyboardType="numeric"
                    marginLeft={"5%"}
                    maxW="90%"
                  />

                  <Text style={styles.tituloDos}>Datos Parcela Testigo</Text>

                  <Text style={styles.titulosImput}>Cantidad: </Text>
                  <Input
                    onChangeText={setCantidadT}
                    keyboardType="numeric"
                    marginLeft={"5%"}
                    maxW="90%"
                  />

                  <Text style={styles.titulosImput}>Unidad: </Text>
                  <Input
                    onChangeText={setUnidadT}
                    keyboardType="numeric"
                    marginLeft={"5%"}
                    maxW="90%"
                  />

                  <Text style={styles.titulosImput}>Costo Unitario L. : </Text>
                  <Input 
                    onChangeText={setCosteT}
                    keyboardType="numeric"
                    marginLeft={"5%"}
                    maxW="90%"
                  />

                  <Button style={styles.guardar} onPress={handleraddNewManejoTejido}>
                  <Text>Guardar</Text>
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
    marginBottom:"5%"
  },
  contenedortitulo:{
      marginLeft:"5%",
      marginTop:"5%",
      width:"90%",
      height:"10%",
      alignItems:"center"
  },
  })

export default ManejoTejidoPantallaAgregar
