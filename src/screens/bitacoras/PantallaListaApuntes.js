import React, { useContext } from "react";
import { StyleSheet,View,TouchableOpacity,Image,Alert } from "react-native";
import {
  Container,
  Fab,
  Icon,
  List,
  Text,
  NativeBaseProvider,
  Box,
  Divider
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
// Utilizar el contexto de notas
import { NotesContext } from "../../context/NotesContext";

const PantallaListaApuntes = ({ navigation }) => {
  const { notes,deleteNote } = useContext(NotesContext);
  console.log(notes);
  const handlerDeleteApunte = async (id) => {
      await deleteNote(id);
  };
  return (
    <View style={styles.container}>
        <View style={styles.contenedorNavegacion}>
            <TouchableOpacity style={styles.flecha} onPress={()=>{navigation.goBack()}}>
                <Image style={styles.tamañoFlecha} source={require('../../../assets/imagenes/flecha.png')}/>
            </TouchableOpacity>
        </View>
    <NativeBaseProvider>
        <Container style={{alignSelf:"center",marginTop:"4%"}}>
                <List style={{shadowColor:"#00A5A3",shadowOffset:{width: 9,height: 4},shadowOpacity:0.50,shadowRadius:5.65,elevation:3}}>
                    {notes
                        ? notes.map((note) => (
                        <List.Item
                            key={note.id.toString()}
                            onPress={() => {
                            navigation.navigate("PantallaVistaApuntes", { id: note.id });
                            }}
                            >
                            <Box style={{width:"100%",height:"100%",flexDirection:"row"}}>
                                <Box style={{width:"85%",justifyContent:"center"}}>  
                                    <Text style={{fontSize:18}} numberOfLines={2}>{note.informacion}</Text>
                                </Box>
                            <Box>

                                    <Icon color="#F38F1D" as={AntDesign} name="edit" size="5" onPress={() => { navigation.navigate("PantallaModificarAPunte", { id: note.id }); }}/>
                                    <Text></Text>
                                    <Icon color="#C60651" as={AntDesign} name="delete" size="5" onPress={() => {Alert.alert(
                                        "Eliminar",
                                        "¿Esta seguro que desea eliminar esta nota?",
                                        [
                                            {
                                            text: "Cancel",
                                            onPress: () => console.log("Cancel Pressed"),
                                            style: "cancel"
                                            },
                                            { text: "OK", onPress: () => {handlerDeleteApunte(note.id)}}
                                        ]
                                        ) }}/>
                                </Box>
                            </Box>
                        </List.Item>

                    ))
                    : null}
              </List>
        </Container>
        <Fab renderInPortal={false} backgroundColor="#00A5A3" shadow={2} size="sm" icon={<Icon color="white" as={AntDesign} onPress={() => {navigation.navigate("PantallaCrearApunte")}} name="plus" size="sm" />} />
    </NativeBaseProvider>
    </View> 
  );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#fff' },
    
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
});

export default PantallaListaApuntes