import { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
  useToast,
  Heading,
  Link,
} from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      return toast({
        title: 'Error',
        description: 'Passwords do not match',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }

    try {
      setLoading(true);
      await register(email, password);
      navigate('/');
      toast({
        title: 'Account created successfully',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to create an account',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      minH="100vh"
      width="100%"
      position="relative"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      overflowX="hidden"
    >
      <Box
        width="100%"
        py={{ base: 6, md: 10 }}
        position="relative"
        minH="calc(100vh - 80px)"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <VStack spacing={8} align="center" width="100%" maxW="600px">
          <VStack spacing={4} textAlign="center" mb={6}>
            <Heading
              fontSize={{ base: "3xl", md: "4xl" }}
              bgGradient="linear(to-r, yellow.200, purple.500)"
              bgClip="text"
            >
              Transform Your Life
            </Heading>
            <Text 
              fontSize={{ base: "xl", md: "2xl" }}
              color="gray.300"
              maxW="600px"
            >
              Make Your Life Bad-Habit Free • Start Your Journey Today
            </Text>
          </VStack>
          <Heading size="lg">Create an Account</Heading>
          <Box w="100%" p={8} borderWidth={1} borderRadius={8} boxShadow="lg">
            <form onSubmit={handleSubmit}>
              <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Confirm Password</FormLabel>
                  <Input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </FormControl>
                <Button
                  type="submit"
                  colorScheme="purple"
                  width="100%"
                  isLoading={loading}
                >
                  Register
                </Button>
              </VStack>
            </form>
          </Box>
          <Text>
            Already have an account?{' '}
            <Link as={RouterLink} to="/login" color="purple.500">
              Login here
            </Link>
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default Register;
