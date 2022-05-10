import React, { useEffect, useState } from "react";
import { database } from "../components/db";

const useDatabase = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  const loadDatabase = async () => {
    try {
      await database.setupManejoTejidoTableAsync();
      await database.setupFertilizacionCafeTableAsync();
      await database.setupManejoPlagasYEnfermedadesTableAsync();
      // Finaliza la carga de la DB

      // await database.setupManejoTejidoAsync();
      // await database.setupFertilizacionCafeAsync();
      // await database.setupManejoPlaYEnferAsync();
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