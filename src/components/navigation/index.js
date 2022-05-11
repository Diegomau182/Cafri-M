import React from "react";
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import 'react-native-gesture-handler';
//pantallas homes
import Home from '../../screens/Home'
import HomeTabCafe from "../../screens/HomeTabCafe";
import HomeTabFrijol from "../../screens/HomeTabFrijol";
//pantallas herramientas
import PantallaCajaHerramientasCafe from "../../screens/pantallasCafe/PantallaCajaHerramientasCafe";
import PantallaCajaHerramientasFrijol from "../../screens/pantallasFrijol/PantallaCajaHerramientasFrijol";
//pantallas demostraciones
import PantallaDemostracionesCafe from "../../screens/pantallasCafe/PantallaDemostracionesCafe";
import PantallaDemostracionesFrijol from "../../screens/pantallasFrijol/PantallaDemostracionesFrijol";
import PantallaSemillas from "../../screens/pantallasFrijol/PantallaSemillas"
//pantallas bitacoras
import PantallaBitacoraCafe from "../../screens/pantallasCafe/PantallaBitacoraCafe"
import ManejosTejidoTabla from "../../screens/bitacoras/ManejoTejidoTabla";
import ManejosTejidoPantallaEditar from "../../screens/bitacoras/ManejoTejidoPantallaEditar";
import ManejoTejidoPantallaAgregar from "../../screens/bitacoras/ManejoTejidoPantallaAgregar";

import FertilizacionCafeTable from "../../screens/bitacoras/FertilizacionCafeTable";
import FertilizacionCafePantallaEditar from "../../screens/bitacoras/FertilizacionCafePantallaEditar";

import ManejoEnferYPlaTable from "../../screens/bitacoras/ManejoEnferYPlaTable";
import ManejoEnferYPlaPantallaEditar from "../../screens/bitacoras/ManejoEnferYPlaPantallaEditar";

import ControlCostoYBeneficiadoTabla from "../../screens/bitacoras/ControlCostoYBeneficiadoTabla";
import ControlCostoYBeneficiadoPantallaEditar from "../../screens/bitacoras/ControlCostoYBeneficiadoPantallaEditar";
//pantallas guias Cafe
import GuiaN1Cafe from "../../screens/pantallasCafe/guias/GuiaN1Cafe";
import GuiaN2Cafe from "../../screens/pantallasCafe/guias/GuiaN2Cafe";
//pantallas guias Frijol
import GuiaN1Frijol from "../../screens/pantallasFrijol/guias/GuiaN1Frijol"
import GuiaN2Frijol from "../../screens/pantallasFrijol/guias/GuiaN2Frijol";
import GuiaN3Frijol from "../../screens/pantallasFrijol/guias/GuiaN3Frijol";
import GuiaN4Frijol from "../../screens/pantallasFrijol/guias/GuiaN4Frijol"
//pantallas de informacion 
import PantallaInfoUno from "../../screens/PantallaInfoUno";
import PantallaInfoDos from "../../screens/PantallaInfoDos"
import PantallaInfoTres from "../../screens/PantallaInfoTres";
import PantallaImgAlargada from "../../screens/PantallaImgAlargada";
import PantallaImgAncha from "../../screens/PantallaImgAncha";
import PantallaImgImg from "../../screens/PantallaImgImg";
import PantallaInfoCuatro from "../../screens/PantallaInfoCuatro";
import PantallaInfoCinco from "../../screens/PantallaInfoCinco";
import PantallaInfoSeis from "../../screens/PantallaInfoSeis";
import PantallaDemostracion from "../../screens/PantallaDemostracion"








const Stack = createStackNavigator();

const Navigation = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="Home" component={Home}/> 
                <Stack.Screen name="homeTabCafe" component={HomeTabCafe}/>
                <Stack.Screen name="homeTabFrijol" component={HomeTabFrijol}/>
                
                <Stack.Screen name="cajaHerramientasCafe" component={PantallaCajaHerramientasCafe}/>
                <Stack.Screen name="cajaHerramientasFrijol" component={PantallaCajaHerramientasFrijol}/>

                <Stack.Screen name="pantallaDemostracionesCafe" component={PantallaDemostracionesCafe}/>
                <Stack.Screen name="pantallaDemostracionesFrijol" component={PantallaDemostracionesFrijol}/>

                <Stack.Screen name="pantallaBitacoraCafe" component={PantallaBitacoraCafe}/>
                <Stack.Screen name="manejosTejidoTabla" component={ManejosTejidoTabla}/>
                <Stack.Screen name="manejoTejidoModificar" component={ManejosTejidoPantallaEditar}/>
                <Stack.Screen name="manejoTejidoPantallaAgregar" component={ManejoTejidoPantallaAgregar}/>

                <Stack.Screen name="FertilizacionCafeTable" component={FertilizacionCafeTable}/>
                <Stack.Screen name="FertilizacionCafePantallaEditar" component={FertilizacionCafePantallaEditar}/>
                
                <Stack.Screen name="ManejoEnferYPlaTable" component={ManejoEnferYPlaTable}/>
                <Stack.Screen name="ManejoEnferYPlaPantallaEditar" component={ManejoEnferYPlaPantallaEditar}/>
                
                <Stack.Screen name="ControlCostoYBeneficiadoTabla" component={ControlCostoYBeneficiadoTabla}/>
                <Stack.Screen name="ControlCostoYBeneficiadoPantallaEditar" component={ControlCostoYBeneficiadoPantallaEditar}/>

                <Stack.Screen name="pantallaSemillas" component={PantallaSemillas}/>

                <Stack.Screen name="guiaN1Cafe" component={GuiaN1Cafe}/>
                <Stack.Screen name="guiaN2Cafe" component={GuiaN2Cafe}/>

                <Stack.Screen name="guiaN1Frijol" component={GuiaN1Frijol}/>
                <Stack.Screen name="guiaN2Frijol" component={GuiaN2Frijol}/>
                <Stack.Screen name="guiaN3Frijol" component={GuiaN3Frijol}/>
                <Stack.Screen name="guiaN4Frijol" component={GuiaN4Frijol}/>

                
                <Stack.Screen name="pantallaDemostracion" component={PantallaDemostracion}/>
                <Stack.Screen name="pantallaInfoUno" component={PantallaInfoUno}/>
                <Stack.Screen name="pantallaInfoDos" component={PantallaInfoDos}/>
                <Stack.Screen name="pantallaInfoTres" component={PantallaInfoTres}/>
                <Stack.Screen name="pantallaImgAlargada" component={PantallaImgAlargada}/>
                <Stack.Screen name="pantallaImgAncha" component={PantallaImgAncha}/>
                <Stack.Screen name="pantallaImgImg" component={PantallaImgImg}/>
                <Stack.Screen name="pantallaInfoCuatro" component={PantallaInfoCuatro}/>
                <Stack.Screen name="pantallaInfoCinco" component={PantallaInfoCinco}/>
                <Stack.Screen name="pantallaInfoSeis" component={PantallaInfoSeis}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation