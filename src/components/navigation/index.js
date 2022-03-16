import React from "react";
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import 'react-native-gesture-handler';
import Home from '../../screens/Home'
import homeTabCafe from "../../screens/homeTabCafe";
import homeTabFrijol from "../../screens/homeTabFrijol";
import pantallaCajaHerramientasCafe from "../../screens/pantallasCafe/pantallaCajaHerramientasCafe";
import guiaN1 from "../../screens/pantallasCafe/guias/guiaN1";
import pantallaInfoT from "../../screens/pantallaInfoT";
import pantallaInfoTI from "../../screens/pantallaInfoTI"
import pantallaInfoTITI from "../../screens/pantallaInfoTITI";
import pantallaImg from "../../screens/pantallaImg";
import pantallaTITImg from "../../screens/pantallaTITImg"
import pantallaInfoTTITITI from "../../screens/pantallaInfoTTITITI";
const Stack = createStackNavigator();

const Navigation = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="Home" component={Home}/> 
                <Stack.Screen name="homeTabCafe" component={homeTabCafe}/>
                <Stack.Screen name="homeTabFrijol" component={homeTabFrijol}/>
                <Stack.Screen name="cajaHerramientasCafe" component={pantallaCajaHerramientasCafe}/>
                <Stack.Screen name="guiaN1" component={guiaN1}/>
                <Stack.Screen name="pantallaInfoT" component={pantallaInfoT}/>
                <Stack.Screen name="pantallaInfoTI" component={pantallaInfoTI}/>
                <Stack.Screen name="pantallaInfoTITI" component={pantallaInfoTITI}/>
                <Stack.Screen name="pantallaImg" component={pantallaImg}/>
                <Stack.Screen name="pantallaTITImg" component={pantallaTITImg}/>
                <Stack.Screen name="pantallaInfoTTITITI" component={pantallaInfoTTITITI}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation