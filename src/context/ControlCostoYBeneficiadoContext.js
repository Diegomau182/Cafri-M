import React, { useEffect, createContext, useState } from "react";
import { database } from "../components/db";
// Crear el contexto de las notas
export const ControlCostoYBeneficiadoContext = createContext({});

export const ControlCostoYBeneficiadoContextProvider = (props) => {
  // Obtener los valores iniciales para el contexto
  // se obtienen desde los props
  const { controlCostoYBeneficiado: initialControlCostoYBeneficiado, children } = props;

  // Almacenar los valores en el estado
  const [controlCostoYBeneficiados, setControlCostoYBeneficiados] = useState(initialControlCostoYBeneficiado);
  const [controlCostoYBeneficiado, setControlCostoYBeneficiado] = useState("");

  // Cargar u obtener las notas
  useEffect(() => {
    refreshTabla();
  }, []);

  const refreshTabla = () => {
    getControlCostoYBeneficiadoById(1)
    return database.getControlCostoYBeneficiado(setControlCostoYBeneficiados);
  };

  const updateControlCostoYBeneficiado = async (cantidadC,unidadC,costeC,costoC,cantidadT,unidadT,costeT,costoT,id) => {
    await database.UpdateControlCostoYBeneficiado(cantidadC,unidadC,costeC,costoC,cantidadT,unidadT,costeT,costoT,id, refreshTabla);
    return refreshTabla();
  };

  const getControlCostoYBeneficiadoById = (id) => {
    return database.getControlCostoYBeneficiadoById(id, setControlCostoYBeneficiado);
  };

  // Crear el objeto de contexto
  const controlCostoYBeneficiadoContext = {
    controlCostoYBeneficiado,
    controlCostoYBeneficiados,
    updateControlCostoYBeneficiado,
    getControlCostoYBeneficiadoById,
  };

  // Pasar los valores al proveedor y retornarlo
  return (
    <ControlCostoYBeneficiadoContext.Provider value={controlCostoYBeneficiadoContext}>
      {children}
    </ControlCostoYBeneficiadoContext.Provider>
  );
};