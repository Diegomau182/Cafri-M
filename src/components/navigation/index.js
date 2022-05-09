import React from "react";
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import 'react-native-gesture-handler';
//pantallas homes
import Home from '../../screens/Home'
import homeTabCafe from "../../screens/HomeTabCafe";
import homeTabFrijol from "../../screens/HomeTabFrijol";
//pantallas herramientas
import pantallaCajaHerramientasCafe from "../../screens/pantallasCafe/PantallaCajaHerramientasCafe";
import pantallaCajaHerramientasFrijol from "../../screens/pantallasFrijol/PantallaCajaHerramientasFrijol";
//pantallas demostraciones
import pantallaDemostracionesCafe from "../../screens/pantallasCafe/PantallaDemostracionesCafe";
import pantallaDemostracionesFrijol from "../../screens/pantallasFrijol/PantallaDemostracionesFrijol";
import pantallaSemillas from "../../screens/pantallasFrijol/PantallaSemillas"
//pantallas bitacoras
import pantallaBitacoraCafe from "../../screens/pantallasCafe/PantallaBitacoraCafe"
import manejosTejidoTabla from "../../screens/bitacoras/ManejoTejidoTabla";
import manejosTejidoPantallaEditar from "../../screens/bitacoras/ManejoTejidoPantallaEditar";
import manejoTejidoPantallaAgregar from "../../screens/bitacoras/ManejoTejidoPantallaAgregar";
//pantallas guias Cafe
import guiaN1Cafe from "../../screens/pantallasCafe/guias/GuiaN1Cafe";
import guiaN2Cafe from "../../screens/pantallasCafe/guias/GuiaN2Cafe";
//pantallas guias Frijol
import guiaN1Frijol from "../../screens/pantallasFrijol/guias/GuiaN1Frijol"
import guiaN2Frijol from "../../screens/pantallasFrijol/guias/GuiaN2Frijol";
import guiaN3Frijol from "../../screens/pantallasFrijol/guias/GuiaN3Frijol";
import guiaN4Frijol from "../../screens/pantallasFrijol/guias/GuiaN4Frijol"
//pantallas de informacion 
import pantallaInfoUno from "../../screens/PantallaInfoUno";
import pantallaInfoDos from "../../screens/PantallaInfoDos"
import pantallaInfoTres from "../../screens/PantallaInfoTres";
import pantallaImgAlargada from "../../screens/PantallaImgAlargada";
import pantallaImgAncha from "../../screens/PantallaImgAncha";
import pantallaImgImg from "../../screens/PantallaImgImg";
import pantallaInfoCuatro from "../../screens/PantallaInfoCuatro";
import pantallaInfoCinco from "../../screens/PantallaInfoCinco";
import pantallaInfoSeis from "../../screens/PantallaInfoSeis";
import pantallaDemostracion from "../../screens/PantallaDemostracion"




const Stack = createStackNavigator();

const Navigation = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="Home" component={Home}/> 
                <Stack.Screen name="homeTabCafe" component={homeTabCafe}/>
                <Stack.Screen name="homeTabFrijol" component={homeTabFrijol}/>
                
                <Stack.Screen name="cajaHerramientasCafe" component={pantallaCajaHerramientasCafe}/>
                <Stack.Screen name="cajaHerramientasFrijol" component={pantallaCajaHerramientasFrijol}/>

                <Stack.Screen name="pantallaDemostracionesCafe" component={pantallaDemostracionesCafe}/>
                <Stack.Screen name="pantallaDemostracionesFrijol" component={pantallaDemostracionesFrijol}/>

                <Stack.Screen name="pantallaBitacoraCafe" component={pantallaBitacoraCafe}/>
                <Stack.Screen name="manejosTejidoTabla" component={manejosTejidoTabla}/>
                <Stack.Screen name="manejoTejidoModificar" component={manejosTejidoPantallaEditar}/>
                <Stack.Screen name="manejoTejidoPantallaAgregar" component={manejoTejidoPantallaAgregar}/>

                <Stack.Screen name="pantallaSemillas" component={pantallaSemillas}/>

                <Stack.Screen name="guiaN1Cafe" component={guiaN1Cafe}/>
                <Stack.Screen name="guiaN2Cafe" component={guiaN2Cafe}/>

                <Stack.Screen name="guiaN1Frijol" component={guiaN1Frijol}/>
                <Stack.Screen name="guiaN2Frijol" component={guiaN2Frijol}/>
                <Stack.Screen name="guiaN3Frijol" component={guiaN3Frijol}/>
                <Stack.Screen name="guiaN4Frijol" component={guiaN4Frijol}/>

                
                <Stack.Screen name="pantallaDemostracion" component={pantallaDemostracion}/>
                <Stack.Screen name="pantallaInfoUno" component={pantallaInfoUno}/>
                <Stack.Screen name="pantallaInfoDos" component={pantallaInfoDos}/>
                <Stack.Screen name="pantallaInfoTres" component={pantallaInfoTres}/>
                <Stack.Screen name="pantallaImgAlargada" component={pantallaImgAlargada}/>
                <Stack.Screen name="pantallaImgAncha" component={pantallaImgAncha}/>
                <Stack.Screen name="pantallaImgImg" component={pantallaImgImg}/>
                <Stack.Screen name="pantallaInfoCuatro" component={pantallaInfoCuatro}/>
                <Stack.Screen name="pantallaInfoCinco" component={pantallaInfoCinco}/>
                <Stack.Screen name="pantallaInfoSeis" component={pantallaInfoSeis}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation