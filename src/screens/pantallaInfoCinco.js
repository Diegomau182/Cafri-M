import React,{useState,useEffect} from "react";
import {Text,View,StyleSheet,Image,Share,TouchableOpacity,ActivityIndicator, Dimensions,ScrollView} from "react-native"
import * as Font from "expo-font"
const { width, height } = Dimensions.get("window");

const PantallaInfoCinco = ({navigation:{goBack},route}) => {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const title = route.params.title
    const titleTwo = route.params.titleSecond

    const info = route.params.info
    const infoSecond = route.params.infoSecond
    const infoThird = route.params.infoThird
    const infoQuarter = route.params.infoQuarter
    
    const recursoUno = route.params.import
    const recursoDos = route.params.importSecond
    const recursoTres = route.params.importThird

    const myCustomShare = async() => {
        const shareOptions = {
            message: `*** ${title} *** 
            
${info}

*** ${titleTwo} ***

${infoSecond}

${infoThird}

${infoQuarter}`,

        }
        try{
            const shareReponse = await Share.share(shareOptions)
            if (shareReponse.action === Share.sharedAction) {
                if (shareReponse.activityType) {
                  // shared with activity type of result.activityType
                } else {
                  // shared
                }
              } else if (shareReponse.action === Share.dismissedAction) {
                // dismissed
              }
        }
        catch(error){
            console.log(error);
        }
    }

    
    const loadFontsAsync = async () => {
        await Font.loadAsync({
            PublicSans_BoldItalic: require(`../../assets/fonts/PublicSans-BoldItalic.ttf`),
            PublicSans_Light: require('../../assets/fonts/PublicSans-Light.ttf')
        }).then(() => {
        setFontsLoaded(true);
      });
    };
     // Cargar la fuente de manera asíncrona
    useEffect(() => {
    loadFontsAsync();
  }, []);
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
        <>
        <View style={styles.fondo}>
            <View style={styles.contenedorNavegacion}>
                <TouchableOpacity style={styles.flecha} onPress={()=>{goBack()}}>
                    <Image style={styles.tamañoFlecha} source={require('../../assets/imagenes/flecha.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.compartir} onPress={myCustomShare}>
                    <Image style={styles.tamañoCompatir} source={require('../../assets/imagenes/compatir.png')}/>
                    <Text>Compartir</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.contenedortitulo}>
                <Text style={styles.titulo}>
                    {title}
                </Text>
            </View>
            <ScrollView style={styles.contenedorInfo}>
                
                <Text style={styles.info}>
                    {info}
                </Text>
                    
                <Text style={styles.titulo}>
                    {titleTwo}
                </Text>

                <Text style={styles.info}>
                    {infoSecond}
                </Text>

                <Image style={styles.recurso} source={recursoUno}/>

                <Text style={styles.info}>
                    {infoThird}
                </Text>

                <Image style={styles.recurso} source={recursoDos}/>

                <Text style={styles.info}>
                    {infoQuarter}
                </Text>

                <Image style={styles.recurso} source={recursoTres}/>
            
            </ScrollView>
        </View>
        </>
    );
  }
}

const styles = StyleSheet.create({
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
        marginTop: "70%"
    },
    flecha:{
        marginLeft:"1%",
        width:"20%",
        height:"100%",
    },
    tamañoCompatir:{
        marginLeft:"10%",
        width:"60%",
        height:"30%",
        marginTop: "70%",
    },
    compartir:{
        marginLeft:"60%",
        width:"20%",
        height:"100%",
        alignContent:"flex-end",
        flexDirection:"column",
        justifyContent:"center",
    },
    textoCompartir:{
        width:"20%",
        height:"100%",
        marginLeft:"-15%"
    },
    titulo:{
        fontFamily:"PublicSans_BoldItalic",
        fontSize: 20,
        alignItems:"center",
        justifyContent:"center",
        textAlign:"center"
    },
    contenedortitulo:{
        marginLeft:"5%",
        marginTop:"5%",
        width:"90%",
        height:"7%",
        alignItems:"center",
    },
    contenedortitulo2:{
        marginLeft:"5%",
        marginTop:"5%",
        width:"90%",
        height:"10%",
        alignItems:"center",
    },
    info:{
        textAlign:"justify",
        fontSize:18,
        fontFamily:"PublicSans_Light",
        marginBottom:"3%",
        marginTop:"3%",
        color:"black"
    },
    contenedorInfo:{
        marginLeft:"5%",
        marginRight:"5%",
        marginBottom:"5%"

    },
    recurso:{
        width:width * 0.90,
        height:height * 0.15,
    },
})

export default PantallaInfoCinco