import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider, Box } from '@chakra-ui/react';
import theme from './styles/theme';
import AppRoutes from './routes/AppRoutes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { HabitProvider } from './context/HabitContext'
import { AuthProvider } from './context/AuthContext'
import './styles/global.css'


function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <HabitProvider>
          <BrowserRouter>
            <Box 
              minH="100vh" 
              display="flex" 
              flexDirection="column"
              bg="darkBg.900"
              position="relative"
              overflow="hidden"
            >
              <Navbar />
              <Box 
                as="main" 
                flex="1"
                pt={{ base: "80px", md: "100px" }}
                px={{ base: 4, md: 6, lg: 8 }}
                maxW="1200px"
                mx="auto"
                w="full"
                position="relative"
                zIndex="1"
              >
                <AppRoutes />
              </Box>
              <Footer />
            </Box>
          </BrowserRouter>
        </HabitProvider>
      </AuthProvider>
    </ChakraProvider>
  )
}

export default App
