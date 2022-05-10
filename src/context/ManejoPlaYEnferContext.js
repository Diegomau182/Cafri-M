import React, { useEffect, createContext, useState } from "react";
import { database } from "../components/db";
// Crear el contexto de las notas
export const ManejoPlaYEnferContext = createContext({});

export const ManejoPlaYEnferContextProvider = (props) => {
  // Obtener los valores iniciales para el contexto
  // se obtienen desde los props
  const { ManejoPlaYEnfer: initialManejoPlaYEnfer, children } = props;

  // Almacenar los valores en el estado
  const [manejoPlaYEnfers, setManejoPlaYEnfers] = useState(initialManejoPlaYEnfer);
  const [manejoPlaYEnfer, setManejoPlaYEnfer] = useState("");

  // Cargar u obtener las notas
  useEffect(() => {
    refreshTabla();
  }, []);

  const refreshTabla = () => {
    getManejoPlaYEnferById(1)
    return database.getManejoPlaYEnfer(setManejoPlaYEnfers);
  };

  const UpdateManejoPlaYEnfer = async (cantidadC,unidadC,productoC,dosisC,costeC,costoC,cantidadT,unidadT,productoT,dosisT,costeT,costoT,id) => {
    await database.UpdateManejoPlaYEnfer(cantidadC,unidadC,productoC,dosisC,costeC,costoC,cantidadT,unidadT,productoT,dosisT,costeT,costoT,id, refreshTabla);
    return refreshTabla();
  };

  const getManejoPlaYEnferById = (id) => {
    return database.getManejoPlaYEnferById(id, setManejoPlaYEnfer);
  };

  // Crear el objeto de contexto
  const manejoPlaYEnferContext = {
    manejoPlaYEnfer,
    manejoPlaYEnfers,
    UpdateManejoPlaYEnfer,
    getManejoPlaYEnferById,
  };

  // Pasar los valores al proveedor y retornarlo
  return (
    <ManejoPlaYEnferContext.Provider value={manejoPlaYEnferContext}>
      {children}
    </ManejoPlaYEnferContext.Provider>
  );
};