import React, { useEffect, createContext, useState } from "react";
import { database } from "../components/db";

// Crear el contexto de las notas
export const NotesContext = createContext({});
const muestra = [
  {
    "id": 1,
    "informacion": "Cargando...",
    "status": "Nuevo",
  },]
export const NotesContextProvider = (props) => {
  // Obtener los valores iniciales para el contexto
  // se obtienen desde los props
  const { notes: initialNotes, children } = props;

  // Almacenar los valores en el estado
  const [notes, setNotes] = useState(initialNotes);
  const [note, setNote] = useState("");

  // Cargar u obtener las notas
  useEffect(() => {
    refreshNotes();
  }, []);


  const refreshNotes = () => {
    console.log(muestra);
    setNote(muestra)
    return database.getApuntes(setNotes);
  };

  const addNewNote = async (note) => {
    await database.insertApunte(note, refreshNotes);
    return refreshNotes();
  };

  const editNote = async (informacion,id) =>{
    await database.UpdateApuntes(informacion,id,refreshNotes)
    return refreshNotes()
  }

  const deleteNote = async (id) =>{
    await database.EliminarApuntes(id,refreshNotes)
    return refreshNotes()
  }

  const getNoteById = (id) => {
    return database.getApuntesById(id, setNote);
  };

  // Crear el objeto de contexto
  const notesContext = {
    notes,
    note,
    addNewNote,
    getNoteById,
    editNote,
    deleteNote,
  };

  // Pasar los valores al proveedor y retornarlo
  return (
    <NotesContext.Provider value={notesContext}>
      {children}
    </NotesContext.Provider>
  );
};