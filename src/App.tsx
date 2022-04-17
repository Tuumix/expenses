import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import Teste from './pages/Teste';

const App: React.FC = () => {

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path='/teste' element={<Teste />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
