import React, { useEffect, useState } from "react";
import { database } from "../components/db";
import AsyncStorage from "@react-native-async-storage/async-storage"

const useDatabase = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const [isLoadData,setIsLoadData] = useState(false)
    
  AsyncStorage.getItem("@load").then((res) =>{setIsLoadData(res)})
    console.log("soy la validacion: "+ isLoadData);
    console.log("--------------------------------------------------");
  
    const loadDatabase = async () => {
    try {
      
      
      await database.setupApuntesTableAsync()
      await database.setupManejoTejidoTableAsync();
      await database.setupFertilizacionCafeTableAsync();
      await database.setupManejoPlagasYEnfermedadesTableAsync();
      await database.setupControlCostoYBeneficiadoTableAsync();
      await database.setupCosechaYVentaCafeCampoTableAsync();
      await database.setupCosechaYVentaCafeTestigoTableAsync();

      // Finaliza la carga de la DB
      const Insercion = async()=>{ 
      if(isLoadData == false)
      {
        console.log("-----------------pasando------------------");
      await database.setupManejoTejidoAsync();
      await database.setupFertilizacionCafeAsync();
      await database.setupManejoPlaYEnferAsync();
      await database.setupControlCostoYBeneficiadoAsync();
      await database.setupCosechaYVentaCafeTestigoAsync()
      await database.setupCosechaYVentaCafeCampoAsync()

      AsyncStorage.setItem("@load",JSON.stringify(true))
      }
      else{
        console.log("ya estaba insertado");
      }
      }
      await Insercion()
      setIsLoadingComplete(true);

    } catch (error) {
      console.log(error);
      setIsLoadingComplete(true)

    }
  };

  useEffect(() => {
    loadDatabase();
  }, []);

  return isLoadingComplete;
};

export default useDatabase;