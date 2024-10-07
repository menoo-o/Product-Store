import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Homepage from './pages/Homepage';
import CreatePage from './pages/CreatePage';
import Navbar from './components/Navbar';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Box minH="100vh">
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/create" element={<CreatePage />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;