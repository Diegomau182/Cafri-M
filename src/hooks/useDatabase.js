import React, { useEffect, useState } from "react";
import { database } from "../components/db";

const useDatabase = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  const loadDatabase = async () => {
    try {
      await database.setupManejoTejidoTableAsync();
      await database.setupFertilizacionCafeTableAsync();
      await database.setupManejoPlagasYEnfermedadesTableAsync();
      await database.setupControlCostoYBeneficiadoTableAsync();
      await database.setupCosechaYVentaCafeCampoTableAsync();
      await database.setupCosechaYVentaCafeTestigoTableAsync();

      // Finaliza la carga de la DB

      //await database.setupManejoTejidoAsync();
      //await database.setupFertilizacionCafeAsync();
      //await database.setupManejoPlaYEnferAsync();
      //await database.setupControlCostoYBeneficiadoAsync();
      //await database.setupCosechaYVentaCafeTestigoAsync()
      //await database.setupCosechaYVentaCafeCampoAsync()

      setIsLoadingComplete(true);
    } catch (error) {
      console.log(error);

    }
  };

  useEffect(() => {
    loadDatabase();
  }, []);

  return isLoadingComplete;
};

export default useDatabase;