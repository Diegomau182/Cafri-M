import React from "react";
import * as SQLite from "expo-sqlite";

// https://docs.expo.io/versions/latest/sdk/sqlite/
// Crea y abre la base de datos
const db = SQLite.openDatabase("BitacoraCafe.db");

// Funcionalidades de la base de datos

// Obtener los apuntes
const getApuntes = (setApuntesFunc) => {
  db.transaction((tx) => {
    tx.executeSql(
      "select * from apuntes",
      [],
      (_, { rows: { _array } }) => {
        setApuntesFunc(_array);
      },
      (_t, error) => {
        console.log("Error al momento de obtener los apuntes");
        console.log(error);
      },
      (_t, _success) => {
        console.log("Apuntes obtenidas");
      }
    );
  });
};

// Obtener los ManejosTejido
const getManejoTejido = (setManejoTejidoFunc) => {
    db.transaction((tx) => {
      tx.executeSql(
        "select * from ManejoTejido",
        [],
        (_, { rows: { _array } }) => {
          setManejoTejidoFunc(_array);
        },
        (_t, error) => {
          console.log("Error al momento de obtener el ManejoTejido");
          console.log(error);
        },
        (_t, _success) => {
          console.log("Manejo Tejido obtenido");
        }
      );
    });
  };

// Obtener la Apuntes por el id
const getApuntesById = (id, setNoteFunc) => {
  db.transaction((tx) => {
    tx.executeSql(
      "select * from apuntes where id = ?",
      [id],
      (_, { rows: { _array } }) => {
        setNoteFunc(_array);
      },
      (_t, error) => {
        console.log("Error al momento de obtener los Apuntes");
        console.log(error);
      },
      (_t, _success) => {
        console.log("Apuntes obtenidos");
      }
    );
  });
};

// Obtener la ManejoTejido por el id
const getManejoTejidoById = (id, setNoteFunc) => {
    db.transaction((tx) => {
      tx.executeSql(
        "select * from ManejoTejido where id = ?",
        [id],
        (_, { rows: { _array } }) => {
          setNoteFunc(_array);
        },
        (_t, error) => {
          console.log("Error al momento de obtener el Manejo Tejido");
          console.log(error);
        },
        (_t, _success) => {
          console.log("Manejo Tejido obtenidas");
        }
      );
    });
  };

// Insertar Apunte
const insertApunte = async (apunte, successFunc) => {
  db.transaction(
    (tx) => {
      tx.executeSql("insert into Apuntes (informacion) values (?)", [
        apunte
      ]);
    },
    (_t, error) => {
      console.log("Error al insertar el apunte");
      console.log(error);
    },
    (_t, _success) => {
      successFunc;
    }
  );
};
const insertManejoTejido = async (actividad,cantidadC,unidadC,costeC,costoC,cantidadT,unidadT,costeT,costoT, successFunc) => {
    db.transaction(
      (tx) => {
        tx.executeSql("insert into ManejoTejido(actividad,cantidadCampo,unidadCampo,costeUnitarioCampo,costoTotalCampo,cantidadTestigo,unidadTestigo,costeUnitarioTestigo,costoTotalTestigo) values (?,?,?,?,?,?,?,?,?)", [
          actividad,
          cantidadC,
          unidadC,
          costeC,
          costoC,
          cantidadT,
          unidadT,
          costeT,
          costoT
        ]);
      },
      (_t, error) => {
        console.log("Error al insertar manejo de tejido");
        console.log(error);
      },
      (_t, _success) => {
        successFunc;
      }
    );
  };

  const UpdateManejoTejido = async (cantidadC,unidadC,costeC,costoC,cantidadT,unidadT,costeT,costoT,id, successFunc) => {
    db.transaction(
      (tx) => {
        tx.executeSql(`UPDATE ManejoTejido SET cantidadCampo = ${cantidadC}, unidadCampo = ${unidadC}, costeUnitarioCampo = ${costeC}, costoTotalCampo = ${costoC}, cantidadTestigo = ${cantidadT}, unidadTestigo = ${unidadT}, costeUnitarioTestigo = ${costeT}, costoTotalTestigo = ${costoT} WHERE id = ${id}`);
      },
      (_t, error) => {
        console.log("Error al actualizar manejo de tejido");
        console.log(_t);
      },
      (_t, _success) => {
        successFunc;
      }
    );
  };


  const EliminarManejoTejido = async (id, successFunc) => {
    db.transaction(
      (tx) => {
        tx.executeSql(`DELETE FROM ManejoTejido WHERE id = ${id}`);
      },
      (_t, error) => {
        console.log("Error al eliminar en la tabla de manejo de tejido");
        console.log(_t);
      },
      (_t, _success) => {
        successFunc;
        console.log("lo logre");
      }
    );
  };


// Borrar la base de datos
const dropDatabaseTableAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql("drop table ManejoTejido");
      },
      (_t, error) => {
        console.log("Error al eliminar la tabla de apuntes");
        reject(error);
      },
      (_t, result) => {
        resolve(result);
      }
    );
  });
};

// Creación de la tabla de Apuntes
const setupApuntesTableAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "create table if not exists apuntes (id integer primary key autoincrement, informacion text not null);"
        );
      },
      (_t, error) => {
        console.log("Error al momento de crear la tabla");
        console.log(error);
        reject(error);
      },
      (_t, success) => {
        console.log("Tabla creada!");
        resolve(success);
      }
    );
  });
};

// Creación de la tabla de ManejoTejido
const setupManejoTejidoTableAsync = async () => {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql(
            `create table if not exists ManejoTejido(id integer primary key autoincrement, 
                                                     actividad text not null,
                                                     cantidadCampo integer null,
                                                     unidadCampo integer null,
                                                     costeUnitarioCampo real null,
                                                     costoTotalCampo real null,
                                                     cantidadTestigo integer null,
                                                     unidadTestigo integer null,
                                                     costeUnitarioTestigo real null,
                                                     costoTotalTestigo real null,
                                                     UNIQUE(actividad)
                                                     );`
          );
        },
        (_t, error) => {
          console.log("Error al momento de crear la tabla");
          console.log(error);
          reject(error);
        },
        (_t, success) => {
          console.log("Tabla creada!");
          resolve(success);
        }
      );
    });
  };

// Agrega datos ManejoTejido por defecto
const setupManejoTejidoAsync = async () => {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql(`insert into ManejoTejido(actividad) 
                                           values
                                                ('Machete'),
                                                ('Tijera de poda de mano'),
                                                ('Poda del cafetal (recepa, descope, poda media, etc.)'),
                                                ('Regulación de sombra'),
                                                ('Extracción de leña'),
                                                ('Primer deshije'),
                                                ('Segundo deshije'),
                                                ('Deschuponado')
                                                `);
        },
        (_t, error) => {
          console.log("Error al momento de insertar los valores por defecto");
          console.log(error);
          reject(error);
        },
        (_t, success) => {
          resolve(success);
        }
      );
    });
  };


export const database = {
  getApuntes,
  getManejoTejido,

  insertApunte,
  insertManejoTejido,

  UpdateManejoTejido,
  EliminarManejoTejido,

  dropDatabaseTableAsync,
  
  setupApuntesTableAsync,

  setupManejoTejidoAsync,
  setupManejoTejidoTableAsync,

  getApuntesById,
  getManejoTejidoById,
};