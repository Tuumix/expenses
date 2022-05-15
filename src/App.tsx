import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AddExpense from './pages/AddExpense';
import Expenses from './pages/Expenses';
import Main from './pages/Main';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />}  />
          <Route path='/expenses' element={<Expenses />} />
          <Route path='/createexpense' element={<AddExpense />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
