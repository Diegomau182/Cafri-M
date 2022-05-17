import React, { useEffect, createContext, useState } from "react";
import { database } from "../components/db";
// Crear el contexto de las notas
export const CosechaYVentaCafeTestigoContext = createContext({});

export const CosechaYVentaCafeTestigoContextProvider = (props) => {
  // Obtener los valores iniciales para el contexto
  // se obtienen desde los props
  const { cosechaYVentaCafeTestigo: initialCosechaYVentaCafeTestigo, children } = props;

  // Almacenar los valores en el estado
  const [cosechaYVentaCafeTestigos, setCosechaYVentaCafeTestigos] = useState(initialCosechaYVentaCafeTestigo);
  const [cosechaYVentaCafeTestigo, setCosechaYVentaCafeTestigo] = useState("");
  const [cosechaYVentaCafeTestigoSum, setCosechaYVentaCafeTestigoSum] = useState("");

  // Cargar u obtener las notas
  useEffect(() => {
    refreshTabla();
  }, []);

  const refreshTabla = () => {
      getCosechaYVentaCafeTestigoById(1)
      getCosechaYVentaCafeTestigoSum()
    return database.getCosechaYVentaCafeTestigo(setCosechaYVentaCafeTestigos);
  };

  const updateCosechaYVentaCafeTestigo = async (cantidad,unidad,tipoCafe,entidadCompra,cantidadV,unidadV,tipoCafeV,precioQQ,premioCalidad,ingresoTotal,id) => {
    await database.UpdateCosechaYVentaCafeTestigo(cantidad,unidad,tipoCafe,entidadCompra,cantidadV,unidadV,tipoCafeV,precioQQ,premioCalidad,ingresoTotal,id, refreshTabla);
    return refreshTabla();
  };

  const getCosechaYVentaCafeTestigoById = (id) => {
    return database.getCosechaYVentaCafeTestigoById(id, setCosechaYVentaCafeTestigo);
  };

  
  const getCosechaYVentaCafeTestigoSum = () => {
    return database.getCosechaYVentaCafeTestigoSum(setCosechaYVentaCafeTestigoSum);
  };


  // Crear el objeto de contexto
  const  cosechaYVentaCafeTestigoContext = {
    cosechaYVentaCafeTestigo,
    cosechaYVentaCafeTestigos,
    cosechaYVentaCafeTestigoSum,
    updateCosechaYVentaCafeTestigo,
    getCosechaYVentaCafeTestigoById,
  };

  // Pasar los valores al proveedor y retornarlo
  return (
    < CosechaYVentaCafeTestigoContext.Provider value={cosechaYVentaCafeTestigoContext}>
      {children}
    </ CosechaYVentaCafeTestigoContext.Provider>
  );
};