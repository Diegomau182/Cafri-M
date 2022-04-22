import React,{useState,useEffect} from "react";
import {Text,View,StyleSheet,Share,Image,TouchableOpacity,ActivityIndicator, Dimensions,ScrollView} from "react-native"
import * as Font from "expo-font"
const { width, height } = Dimensions.get("window");

const pantallaInfoDos =({navigation:{goBack},route})=>{
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const title = route.params.title
    const info = route.params.info
    const recurso = route.params.import
    const tituloDos = route.params.titleSecond
    const InfoDos = route.params.infoSecond

    
    const myCustomShare = async() => {
        const shareOptions = {
            message: `*** ${title} *** 
            
${info}

${tituloDos ? `*** ${tituloDos} *** 

${InfoDos}`: "" } `,

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
                <View style={styles.img}>
                    <Image style={styles.recurso} source={recurso}/>
                </View>
                <View style={styles.contenedortitulo}>
                    <Text style={styles.titulo}>
                        {tituloDos}
                    </Text>
                 </View>
                <Text style={styles.info}>
                    {InfoDos}
                </Text>

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
        marginLeft:"20%",
        width:"60%",
        height:"30%",
        marginTop: "70%"
    },
    compartir:{
        marginLeft:"60%",
        width:"20%",
        height:"100%",
        alignContent:"flex-end",
        flexDirection:"column",
        justifyContent:"center"
    },
    titulo:{
        fontFamily:"PublicSans_BoldItalic",
        fontSize: 20,
        alignItems:"center",
        textAlign:"center"
    },
    contenedortitulo:{
        marginLeft:"5%",
        marginTop:"5%",
        width:"90%",
        height:"15%",
        alignItems:"center",
        textAlign:"center"
    },
    info:{
        textAlign:"justify",
        fontSize:16,
        fontFamily:"PublicSans_Light",
        marginBottom:"3%",
        marginTop:"3%",
       
    },
    contenedorInfo:{
        marginLeft:"5%",
        marginRight:"5%",
    },
    recurso:{
        width:width * 0.90,
        height:height * 0.15
    },
    img:{
       alignItems:"center",
       width:width * 0.90,
       height:height * 0.20
    }
})


export default pantallaInfoDos