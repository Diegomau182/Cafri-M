import React, { useEffect, createContext, useState } from "react";
import { database } from "../components/db";
// Crear el contexto de las notas
export const CosechaYVentaCafeCampoContext = createContext({});

export const CosechaYVentaCafeCampoContextProvider = (props) => {
  // Obtener los valores iniciales para el contexto
  // se obtienen desde los props
  const { cosechaYVentaCafeCampo: initialCosechaYVentaCafeCampo, children } = props;

  // Almacenar los valores en el estado
  const [cosechaYVentaCafeCampos, setCosechaYVentaCafeCampos] = useState(initialCosechaYVentaCafeCampo);
  const [cosechaYVentaCafeC, setCosechaYVentaCafeC] = useState("");
  const [cosechaYVentaCafeCSum, setCosechaYVentaCafeCSum] = useState("");

  // Cargar u obtener las notas
  useEffect(() => {
    refreshTabla();
  }, []);

  const refreshTabla = () => {
      getCosechaYVentaCafeCampoById(1)
      getCosechaYVentaCafeCampoSum()
    return database.getCosechaYVentaCafeCampo(setCosechaYVentaCafeCampos);
  };

  const updateCosechaYVentaCafeCampo = async (cantidad,unidad,tipoCafe,entidadCompra,cantidadV,unidadV,tipoCafeV,precioQQ,premioCalidad,ingresoTotal,id) => {
    await database.UpdateCosechaYVentaCafeCampo(cantidad,unidad,tipoCafe,entidadCompra,cantidadV,unidadV,tipoCafeV,precioQQ,premioCalidad,ingresoTotal,id, refreshTabla);
    return refreshTabla();
  };

  const getCosechaYVentaCafeCampoById = (id) => {
    console.log("entro");
    return database.getCosechaYVentaCafeCampoById(id, setCosechaYVentaCafeC);
  };

  const getCosechaYVentaCafeCampoSum = () => {
    console.log("entro 2");
    return database.getCosechaYVentaCafeCampoSum(setCosechaYVentaCafeCSum);
  };

  // Crear el objeto de contexto
  const  cosechaYVentaCafeCampoContext = {
    cosechaYVentaCafeC,
    cosechaYVentaCafeCampos,
    cosechaYVentaCafeCSum,
    getCosechaYVentaCafeCampoById,
    updateCosechaYVentaCafeCampo,
  };

  // Pasar los valores al proveedor y retornarlo
  return (
    < CosechaYVentaCafeCampoContext.Provider value={cosechaYVentaCafeCampoContext}>
      {children}
    </ CosechaYVentaCafeCampoContext.Provider>
  );
};