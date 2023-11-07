import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {ChakraProvider, ColorModeScript, theme} from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
    <ChakraProvider>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
)
