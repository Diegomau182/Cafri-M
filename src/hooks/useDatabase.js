import React, { useEffect, useState } from "react";
import { database } from "../components/db";

const useDatabase = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  const loadDatabase = async () => {
    try {
      await database.setupManejoTejidoTableAsync();
      // Finaliza la carga de la DB
      // await database.setupManejoTejidoAsync();
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