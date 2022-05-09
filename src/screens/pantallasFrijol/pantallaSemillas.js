import React from "react"
import MapView,{Marker}from "react-native-maps"
import {View} from "react-native"

const PantallaSemilla = () => {
 return(
    
    <MapView style={{width:"100%",height:"40%"}}
    initialRegion={{
      latitude: 15.199999,
      longitude: -86.241905,
      latitudeDelta: 5.0922,
      longitudeDelta: 6.0421,
    }}
  ></MapView>
 
 ) ;  
}

export default PantallaSemilla