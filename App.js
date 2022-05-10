import React from "react";
import * as SplashScreen from "expo-splash-screen";
import Navigation from "./src/components/navigation/index";
import useDatabase from "./src/hooks/useDatabase";
import {ManejoTejidoContextProvider} from "./src/context/ManejoTejidoContext"
import { FertilizacionCafeContextProvider } from "./src/context/FertilizacionCafeContext";


export default function App() {
  SplashScreen.preventAutoHideAsync();
  const isLoadingComplete = useDatabase();
  // Ocultar la pantalla de splash
  if (isLoadingComplete) SplashScreen.hideAsync();
  return (
    <ManejoTejidoContextProvider>
      <FertilizacionCafeContextProvider>
      <Navigation />
      </FertilizacionCafeContextProvider>
   </ManejoTejidoContextProvider>
  );
}
