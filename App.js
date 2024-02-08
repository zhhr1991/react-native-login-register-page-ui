import React from 'react';
import NavCont from './components/NavCont';
import { AuthProvider } from './context/AuthContext';


export default function App() {
  

  return (
    <AuthProvider>
      <NavCont />
    </AuthProvider>
    
  );
}

