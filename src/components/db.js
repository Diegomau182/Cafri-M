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
const getApuntesById = (id, setManejoTejidoFunc) => {
  db.transaction((tx) => {
    tx.executeSql(
      "select * from apuntes where id = ?",
      [id],
      (_, { rows: { _array } }) => {
        setManejoTejidoFunc(_array);
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

const setupFertilizacionCafeTableAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          `create table if not exists FertilizacionCafe(id integer primary key autoincrement, 
                                                   actividad text not null,
                                                   cantidadCampo integer null,
                                                   unidadCampo integer null,
                                                   productoCampo text null,
                                                   dosisCampo integer null,
                                                   costeUnitarioCampo real null,
                                                   costoTotalCampo real null,
                                                   cantidadTestigo integer null,
                                                   unidadTestigo integer null,
                                                   productoTestigo text null,
                                                   dosisTestigo integer null,
                                                   costeUnitarioTestigo real null,
                                                   costoTotalTestigo real null,
                                                   UNIQUE(actividad)
                                                   );`
        );
      },
      (_t, error) => {
        console.log("Error al momento de crear la tabla fertilizacion Cafe");
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
const setupFertilizacionCafeAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(`insert into FertilizacionCafe(actividad) 
                                         values
                                              ('Cal'),
                                              ('Fertilizantes'),
                                              ('Foliares'),
                                              ('Análisis químico de suelo'),
                                              ('Extracción de muestras suelo'),
                                              ('Aplicaciónde cal'),
                                              ('Primera fertilización'),
                                              ('Segunda fertilización'),
                                              ('Tercera fertilización'),
                                              ('Cuarta fertilización'),
                                              ('Primera aplicación foliar'),
                                              ('Segunda aplicación foliar'),
                                              ('Preparación y aplicación de abonos orgánicos')
                                              `);
      },
      (_t, error) => {
        console.log("Error al momento de insertar los valores por defecto de fertilizacion cafe");
        console.log(error);
        reject(error);
      },
      (_t, success) => {
        resolve(success);
      }
    );
  });
};

const UpdateFertilizacionCafe = async (cantidadC,unidadC,productoC,dosisC,costeC,costoC,cantidadT,unidadT,productoT,dosisT,costeT,costoT,id, successFunc) => {
  db.transaction(
    (tx) => {
      tx.executeSql(`UPDATE FertilizacionCafe SET cantidadCampo = ${cantidadC}, unidadCampo = ${unidadC},productoCampo = '${productoC}', dosisCampo = ${dosisC}, costeUnitarioCampo = ${costeC}, costoTotalCampo = ${costoC}, cantidadTestigo = ${cantidadT}, unidadTestigo = ${unidadT}, productoTestigo='${productoT}',dosisTestigo = ${dosisT},costeUnitarioTestigo = ${costeT}, costoTotalTestigo = ${costoT} WHERE id = ${id}`);
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

// Obtener la ManejoTejido por el id
const getFertilizacionCafeById = (id, setNoteFunc) => {
  db.transaction((tx) => {
    tx.executeSql(
      "select * from FertilizacionCafe where id = ?",
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

const getFertilizacionCafe = (setFertilizacionCafeFunc) => {
  db.transaction((tx) => {
    tx.executeSql(
      "select * from FertilizacionCafe",
      [],
      (_, { rows: { _array } }) => {
        setFertilizacionCafeFunc(_array);
      },
      (_t, error) => {
        console.log("Error al momento de obtener el FertilizacionCafe");
        console.log(error);
      },
      (_t, _success) => {
        console.log("Manejo Tejido obtenido");
      }
    );
  });
};

//-------------------------------------------------------------------------------------------------
// Creación de la tabla de fertilizacion Cafe
const setupManejoPlagasYEnfermedadesTableAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          `create table if not exists ManejoPlaYEnfer(id integer primary key autoincrement, 
                                                   actividad text not null,
                                                   cantidadCampo integer null,
                                                   unidadCampo integer null,
                                                   productoCampo text null,
                                                   dosisCampo integer null,
                                                   costeUnitarioCampo real null,
                                                   costoTotalCampo real null,
                                                   cantidadTestigo integer null,
                                                   unidadTestigo integer null,
                                                   productoTestigo text null,
                                                   dosisTestigo integer null,
                                                   costeUnitarioTestigo real null,
                                                   costoTotalTestigo real null,
                                                   UNIQUE(actividad)
                                                   );`
        );
      },
      (_t, error) => {
        console.log("Error al momento de crear la tabla fertilizacion Cafe");
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
const setupManejoPlaYEnferAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(`insert into ManejoPlaYEnfer(actividad) 
                                         values
                                              ('Atrayentes'),
                                              ('Parasitoides'),
                                              ('Fungicida'),
                                              ('Insecticida'),
                                              ('Muestreos de plagas'),
                                              ('Elaboración y colocación de trampas para broca del café'),
                                              ('Recolección de frutos después de la cosecha (Repela)'),
                                              ('Recolección de los primeros frutos maduros'),
                                              ('Aplicación de Beauberia bassiana'),
                                              ('Aplicación de químicos para broca'),
                                              ('Primera aplicación de químicos para Roya'),
                                              ('Segunda aplicación dequímicos para Roya'),
                                              ('Tercera aplicación de químicos para Roya'),
                                              ('Aplicación de químico para Ojo de Gallo'),
                                              ('Primer control de malezas'),
                                              ('Segundo control de malezas')
                                              `);
      },
      (_t, error) => {
        console.log("Error al momento de insertar los valores por defecto de fertilizacion cafe");
        console.log(error);
        reject(error);
      },
      (_t, success) => {
        resolve(success);
      }
    );
  });
};

const UpdateManejoPlaYEnfer = async (cantidadC,unidadC,productoC,dosisC,costeC,costoC,cantidadT,unidadT,productoT,dosisT,costeT,costoT,id, successFunc) => {
  db.transaction(
    (tx) => {
      tx.executeSql(`UPDATE ManejoPlaYEnfer SET cantidadCampo = ${cantidadC}, unidadCampo = ${unidadC},productoCampo = '${productoC}', dosisCampo = ${dosisC}, costeUnitarioCampo = ${costeC}, costoTotalCampo = ${costoC}, cantidadTestigo = ${cantidadT}, unidadTestigo = ${unidadT}, productoTestigo='${productoT}',dosisTestigo = ${dosisT},costeUnitarioTestigo = ${costeT}, costoTotalTestigo = ${costoT} WHERE id = ${id}`);
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

// Obtener la ManejoTejido por el id
const getManejoPlaYEnferById = (id, setNoteFunc) => {
  db.transaction((tx) => {
    tx.executeSql(
      "select * from ManejoPlaYEnfer where id = ?",
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

const getManejoPlaYEnfer= (setManejoPlaYEnferFunc) => {
  db.transaction((tx) => {
    tx.executeSql(
      "select * from ManejoPlaYEnfer",
      [],
      (_, { rows: { _array } }) => {
        setManejoPlaYEnferFunc(_array);
      },
      (_t, error) => {
        console.log("Error al momento de obtener el ManejoPlaYEnfer");
        console.log(error);
      },
      (_t, _success) => {
        console.log("Manejo Tejido obtenido");
      }
    );
  });
};

//-------------------------------------------------------------------------------------------------
// Creación de la tabla de fertilizacion Cafe
const setupControlCostoYBeneficiadoTableAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          `create table if not exists ControlCostoYBeneficiado(id integer primary key autoincrement, 
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
        console.log("Error al momento de crear la tabla ControlCostoYBeneficiado");
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
const setupControlCostoYBeneficiadoAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(`insert into ControlCostoYBeneficiado(actividad) 
                                         values
                                              (' Materiales y otros'),
                                              ('Repuestos'),
                                              ('Equipo o maquinaria'),
                                              ('Combustible y aceite'),
                                              ('Muestreos de plagas'),
                                              ('Reparación y mantenimiento de equipo y maquinas'),
                                              ('Reparación y mantenimiento de infraestructura'),
                                              ('Construcción secadora'),
                                              ('Construcción patio'),
                                              ('Primer corte'),
                                              ('Segundo corte'),
                                              ('Tercer corte'),
                                              ('Cuarto corte'),
                                              ('Quinto corte'),
                                              ('Transporte de café al beneficio'),
                                              ('Recibo y despulpado'),
                                              ('Lavado y clasificado'),
                                              ('Secado'),
                                              ('Transporte'),
                                              ('Almacenamiento')
                                              `);
      },
      (_t, error) => {
        console.log("Error al momento de insertar los valores por defecto de ControlCostoYBeneficiado");
        console.log(error);
        reject(error);
      },
      (_t, success) => {
        resolve(success);
      }
    );
  });
};

const UpdateControlCostoYBeneficiado = async (cantidadC,unidadC,costeC,costoC,cantidadT,unidadT,costeT,costoT,id, successFunc) => {
  db.transaction(
    (tx) => {
      tx.executeSql(`UPDATE ControlCostoYBeneficiado SET cantidadCampo = ${cantidadC}, unidadCampo = ${unidadC}, costeUnitarioCampo = ${costeC}, costoTotalCampo = ${costoC}, cantidadTestigo = ${cantidadT}, unidadTestigo = ${unidadT}, costeUnitarioTestigo = ${costeT}, costoTotalTestigo = ${costoT} WHERE id = ${id}`);
    },
    (_t, error) => {
      console.log("Error al actualizar ControlCostoYBeneficiado");
      console.log(_t);
    },
    (_t, _success) => {
      successFunc;
    }
  );
};


// Obtener la ManejoTejido por el id
const getControlCostoYBeneficiadoById = (id, setNoteFunc) => {
  db.transaction((tx) => {
    tx.executeSql(
      "select * from ControlCostoYBeneficiado where id = ?",
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

const getControlCostoYBeneficiado= (setControlCostoYBeneficiadoFunc) => {
  db.transaction((tx) => {
    tx.executeSql(
      "select * from ControlCostoYBeneficiado",
      [],
      (_, { rows: { _array } }) => {
        setControlCostoYBeneficiadoFunc(_array);
      },
      (_t, error) => {
        console.log("Error al momento de obtener el ControlCostoYBeneficiado");
        console.log(error);
      },
      (_t, _success) => {
        console.log("ControlCostoYBeneficiado obtenido");
      }
    );
  });
};

//-------------------------------------------------------------------------------------------------
// Creación de la tabla de fertilizacion Cafe
const setupCosechaYVentaCafeCampoTableAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          `create table if not exists CosechaYVentaCafeCampo(id integer primary key autoincrement, 
                                                   detalleCosecha text not null,
                                                   cantidad integer null,
                                                   unidad integer null,
                                                   tipoCafe text null,
                                                   entidadCompra text null,
                                                   cantidadVendida integer null,
                                                   unidadVendida integer null,
                                                   tipoCafeVendido text null,
                                                   precioQQ real null,
                                                   premioCalidad real null,
                                                   ingresoTotal real null,
                                                   UNIQUE(detalleCosecha)
                                                   );`
        );
      },
      (_t, error) => {
        console.log("Error al momento de crear la tabla CosechaYVentaCafeCampo");
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

const setupCosechaYVentaCafeTestigoTableAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          `create table if not exists CosechaYVentaCafeTestigo(id integer primary key autoincrement, 
                                                   detalleCosecha text not null,
                                                   cantidad integer null,
                                                   unidad integer null,
                                                   tipoCafe text null,
                                                   entidadCompra text null,
                                                   cantidadVendida integer null,
                                                   unidadVendida integer null,
                                                   tipoCafeVendido text null,
                                                   precioQQ real null,
                                                   premioCalidad real null,
                                                   ingresoTotal real null,
                                                   UNIQUE(detalleCosecha)
                                                   );`
        );
      },
      (_t, error) => {
        console.log("Error al momento de crear la tabla CosechaYVentaCafeTestigo");
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
const setupCosechaYVentaCafeCampoAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(`insert into CosechaYVentaCafeCampo(detalleCosecha) 
                                         values
                                              ('Primer corte'),
                                              ('Segundo corte'),
                                              ('Tercer corte'),
                                              ('Cuarto corte'),
                                              ('Quinto corte'),
                                              ('Sexto corte')
                                              `);
      },
      (_t, error) => {
        console.log("Error al momento de insertar los valores por defecto de CosechaYVentaCafeCampo");
        console.log(error);
        reject(error);
      },
      (_t, success) => {
        resolve(success);
      }
    );
  });
};

const setupCosechaYVentaCafeTestigoAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(`insert into CosechaYVentaCafeTestigo(detalleCosecha) 
                                         values
                                              ('Primer corte'),
                                              ('Segundo corte'),
                                              ('Tercer corte'),
                                              ('Cuarto corte'),
                                              ('Quinto corte'),
                                              ('Sexto corte')
                                              `);
      },
      (_t, error) => {
        console.log("Error al momento de insertar los valores por defecto de CosechaYVentaCafeTestigo");
        console.log(error);
        reject(error);
      },
      (_t, success) => {
        resolve(success);
      }
    );
  });
};

const UpdateCosechaYVentaCafeCampo = async (cantidad,unidad,tipoCafe,entidadCompra,cantidadV,unidadV,tipoCafeV,precioQQ,premioCalidad,ingresoTotal,id, successFunc) => {
  db.transaction(
    (tx) => {
      tx.executeSql(`UPDATE CosechaYVentaCafeCampo SET cantidad = ${cantidad}, unidad = ${unidad}, tipoCafe = '${tipoCafe}', entidadCompra='${entidadCompra}', cantidadVendida=${cantidadV}, unidadVendida=${unidadV}, tipoCafeVendido='${tipoCafeV}', precioQQ=${precioQQ},premioCalidad=${premioCalidad},ingresoTotal=${ingresoTotal}  WHERE id = ${id}`);
    },
    (_t, error) => {
      console.log("Error al actualizar CosechaYVentaCafeCampo");
      console.log(_t);
    },
    (_t, _success) => {
      successFunc;
    }
  );
};

const UpdateCosechaYVentaCafeTestigo = async (cantidad,unidad,tipoCafe,entidadCompra,cantidadV,unidadV,tipoCafeV,precioQQ,premioCalidad,ingresoTotal,id, successFunc) => {
  db.transaction(
    (tx) => {
      tx.executeSql(`UPDATE CosechaYVentaCafeTestigo SET cantidad = ${cantidad}, unidad = ${unidad}, tipoCafe = '${tipoCafe}', entidadCompra='${entidadCompra}', cantidadVendida=${cantidadV}, unidadVendida=${unidadV}, tipoCafeVendido='${tipoCafeV}', precioQQ=${precioQQ},premioCalidad=${premioCalidad},ingresoTotal=${ingresoTotal}  WHERE id = ${id}`);
    },
    (_t, error) => {
      console.log("Error al actualizar CosechaYVentaCafeTestigo");
      console.log(_t);
    },
    (_t, _success) => {
      successFunc;
    }
  );
};


// Obtener la ManejoTejido por el id
const getCosechaYVentaCafeCampoById = (id, setNoteFunc) => {
  db.transaction((tx) => {
    tx.executeSql(
      "select * from CosechaYVentaCafeCampo where id = ?",
      [id],
      (_, { rows: { _array } }) => {
        setNoteFunc(_array);
      },
      (_t, error) => {
        console.log("Error al momento de obtener el CosechaYVentaCafeCampo");
        console.log(error);
      },
      (_t, _success) => {
        console.log("Manejo Tejido obtenidas");
      }
    );
  });
};

const getCosechaYVentaCafeTestigoById = (id, setNoteFunc) => {
  db.transaction((tx) => {
    tx.executeSql(
      "select * from CosechaYVentaCafeTestigo where id = ?",
      [id],
      (_, { rows: { _array } }) => {
        setNoteFunc(_array);
      },
      (_t, error) => {
        console.log("Error al momento de obtener el CosechaYVentaCafeTestigo");
        console.log(error);
      },
      (_t, _success) => {
        console.log("Manejo Tejido obtenidas");
      }
    );
  });
};

const getCosechaYVentaCafeCampo= (setCosechaYVentaCafeCampoFunc) => {
  db.transaction((tx) => {
    tx.executeSql(
      "select * from CosechaYVentaCafeCampo",
      [],
      (_, { rows: { _array } }) => {
        setCosechaYVentaCafeCampoFunc(_array);
      },
      (_t, error) => {
        console.log("Error al momento de obtener el CosechaYVentaCafeCampo");
        console.log(error);
      },
      (_t, _success) => {
        console.log("CosechaYVentaCafeCampo obtenido");
      }
    );
  });
};


const getCosechaYVentaCafeTestigo= (setCosechaYVentaCafeTestigoFunc) => {
  db.transaction((tx) => {
    tx.executeSql(
      "select * from CosechaYVentaCafeTestigo",
      [],
      (_, { rows: { _array } }) => {
        setCosechaYVentaCafeTestigoFunc(_array);
      },
      (_t, error) => {
        console.log("Error al momento de obtener el CosechaYVentaCafeTestigo");
        console.log(error);
      },
      (_t, _success) => {
        console.log("CosechaYVentaCafeTestigo obtenido");
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

  setupFertilizacionCafeAsync,
  getFertilizacionCafe,
  setupFertilizacionCafeTableAsync,
  getFertilizacionCafeById,
  UpdateFertilizacionCafe,

  setupManejoPlaYEnferAsync,
  getManejoPlaYEnfer,
  getManejoPlaYEnferById,
  setupManejoPlagasYEnfermedadesTableAsync,
  UpdateManejoPlaYEnfer,

  setupControlCostoYBeneficiadoTableAsync,
  setupControlCostoYBeneficiadoAsync,
  getControlCostoYBeneficiado,
  getControlCostoYBeneficiadoById,
  UpdateControlCostoYBeneficiado,
  
  setupCosechaYVentaCafeCampoTableAsync,
  setupCosechaYVentaCafeTestigoTableAsync,
  
  setupCosechaYVentaCafeTestigoAsync,
  setupCosechaYVentaCafeCampoAsync,
  
  getCosechaYVentaCafeTestigoById,
  getCosechaYVentaCafeCampoById,

  getCosechaYVentaCafeCampo,
  getCosechaYVentaCafeTestigo,

  UpdateCosechaYVentaCafeCampo,
  UpdateCosechaYVentaCafeTestigo,

};