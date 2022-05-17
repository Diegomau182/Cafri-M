import React, { useEffect, createContext, useState } from "react";
import { database } from "../components/db";
// Crear el contexto de las notas
export const FertilizacionCafeContext = createContext({});

export const FertilizacionCafeContextProvider = (props) => {
  // Obtener los valores iniciales para el contexto
  // se obtienen desde los props
  const { fertilizacionCafe: initialFertilizacionCafe, children } = props;

  // Almacenar los valores en el estado
  const [fertilizacionCafes, setfertilizacionCafes] = useState(initialFertilizacionCafe);
  const [fertilizacionCafe, setFertilizacionCafe] = useState("");
  const [fertilizacionCafeSum, setFertilizacionCafeSum] = useState("")

  // Cargar u obtener las notas
  useEffect(() => {
    refreshTabla();
  }, []);

  const refreshTabla = () => {
      getFertilizacionCafeById(1)
      getFertilizacionCafeSum()
    return database.getFertilizacionCafe(setfertilizacionCafes);
  };

  const updateFertilizacionCafe = async (cantidadC,unidadC,productoC,dosisC,costeC,costoC,cantidadT,unidadT,productoT,dosisT,costeT,costoT,id) => {
    await database.UpdateFertilizacionCafe(cantidadC,unidadC,productoC,dosisC,costeC,costoC,cantidadT,unidadT,productoT,dosisT,costeT,costoT,id, refreshTabla);
    return refreshTabla();
  };

  const getFertilizacionCafeById = (id) => {
    return database.getFertilizacionCafeById(id, setFertilizacionCafe);
  };

  const getFertilizacionCafeSum = () => {
    return database.getFertilizacionCafeSum(setFertilizacionCafeSum);
  };
  // Crear el objeto de contexto
  const fertilizacionCafeContext = {
    fertilizacionCafes,
    fertilizacionCafe,
    fertilizacionCafeSum,
    updateFertilizacionCafe,
    getFertilizacionCafeById,
  };

  // Pasar los valores al proveedor y retornarlo
  return (
    <FertilizacionCafeContext.Provider value={fertilizacionCafeContext}>
      {children}
    </FertilizacionCafeContext.Provider>
  );
};