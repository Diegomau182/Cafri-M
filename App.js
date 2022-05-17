import React from "react";
import * as SplashScreen from "expo-splash-screen";
import Navigation from "./src/components/navigation/index";
import useDatabase from "./src/hooks/useDatabase";
import {ManejoTejidoContextProvider} from "./src/context/ManejoTejidoContext"
import { FertilizacionCafeContextProvider } from "./src/context/FertilizacionCafeContext";
import { ManejoPlaYEnferContextProvider } from "./src/context/ManejoPlaYEnferContext";
import { ControlCostoYBeneficiadoContextProvider } from "./src/context/ControlCostoYBeneficiadoContext";
import { CosechaYVentaCafeCampoContextProvider } from "./src/context/CosechaYVentaCafeCampoContext";
import { CosechaYVentaCafeTestigoContextProvider } from "./src/context/CosechaYVentaCafeTestigoContext";
import { NotesContextProvider } from "./src/context/NotesContext";


export default function App() {
  SplashScreen.preventAutoHideAsync();
  const isLoadingComplete = useDatabase();
  // Ocultar la pantalla de splash
  if (isLoadingComplete) SplashScreen.hideAsync();
  return (
    <ManejoTejidoContextProvider>
      <FertilizacionCafeContextProvider>
        <ManejoPlaYEnferContextProvider>
          <ControlCostoYBeneficiadoContextProvider>
            <CosechaYVentaCafeCampoContextProvider>
              <CosechaYVentaCafeTestigoContextProvider>
                <NotesContextProvider>
                  <Navigation />
                </NotesContextProvider>
              </CosechaYVentaCafeTestigoContextProvider>
            </CosechaYVentaCafeCampoContextProvider>
          </ControlCostoYBeneficiadoContextProvider>
        </ManejoPlaYEnferContextProvider>
      </FertilizacionCafeContextProvider>
   </ManejoTejidoContextProvider>
  );
}
