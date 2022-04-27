import React, { useEffect, createContext, useState } from "react";
import { database } from "../components/db";

// Crear el contexto de las notas
export const ManejoTejidoContext = createContext({});

export const ManejoTejidoContextProvider = (props) => {
  // Obtener los valores iniciales para el contexto
  // se obtienen desde los props
  const { manejoTejido: initialManejoTejido, children } = props;

  // Almacenar los valores en el estado
  const [manejoTejidos, setManejoTejidos] = useState(initialManejoTejido);
  const [manejoTejido, setManejoTejido] = useState("");

  // Cargar u obtener las notas
  useEffect(() => {
    refreshTabla();
  }, []);

  const refreshTabla = () => {
    return database.getManejoTejido(setManejoTejidos);
  };

  const addNewManejoTejido = async (actividad,cantidadC,unidadC,costeC,costoC,cantidadT,unidadT,costeT,costoT) => {
    await database.insertManejoTejido(actividad,cantidadC,unidadC,costeC,costoC,cantidadT,unidadT,costeT,costoT, refreshTabla);
    return refreshTabla();
  };

  const updateManejoTejido = async (cantidadC,unidadC,costeC,costoC,cantidadT,unidadT,costeT,costoT,id) => {
    await database.UpdateManejoTejido(cantidadC,unidadC,costeC,costoC,cantidadT,unidadT,costeT,costoT,id, refreshTabla);
    return refreshTabla();
  };

  const DeleteManejoTejido = async (id) => {
    console.log("pase por aca");
    await database.EliminarManejoTejido(id, refreshTabla);
    return refreshTabla();
  };



  const getManejoTejidoById = (id) => {
    return database.getManejoTejidoById(id, setManejoTejido);

    console.log(response);

    // Obtener el valor de la primera posición del arreglo
    // const value = note[0];
    // setNote(value);

    // console.log(value);
    // console.log(note);
  };

  // Crear el objeto de contexto
  const manejoTejidoContext = {
    manejoTejidos,
    manejoTejido,
    addNewManejoTejido,
    getManejoTejidoById,
    updateManejoTejido,
    DeleteManejoTejido
  };

  // Pasar los valores al proveedor y retornarlo
  return (
    <ManejoTejidoContext.Provider value={manejoTejidoContext}>
      {children}
    </ManejoTejidoContext.Provider>
  );
};