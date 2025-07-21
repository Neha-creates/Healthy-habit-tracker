import { Box, Flex, Link, IconButton, useDisclosure, VStack, CloseButton, Container, Button, Text, Stack } from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import theme from '../styles/theme';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileNav = useDisclosure();
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  
  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarStyle = {
    ...theme.layerStyles.navbar,
    // bg: isScrolled ? 'darkBg.800' : 'transparent',
    width: '100%',
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    height: { base: '70px', md: '80px' },
    zIndex: 1000
  };

  const NavLinks = () => (
    <>
      <Link 
        as={RouterLink} 
        to="/" 
        color="white" 
        position="relative"
        display="inline-block"
        pb={1}
        _hover={{ 
          color: 'yellow.200',
          _after: {
            transform: 'scaleX(1)',
          }
        }}
        _after={{
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '2px',
          bottom: '0',
          left: '0',
          backgroundColor: 'yellow.200',
          transform: 'scaleX(0)',
          transition: 'transform 0.3s ease'
        }}
      >
        Dashboard
      </Link>
      <Link 
        as={RouterLink} 
        to="/habits" 
        color="white"
        position="relative"
        _hover={{ 
          color: 'yellow.200',
          _after: {
            transform: 'scaleX(1)',
          }
        }}
        _after={{
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '2px',
          bottom: '-2px',
          left: '0',
          backgroundColor: 'yellow.200',
          transform: 'scaleX(0)',
          transition: 'transform 0.3s ease'
        }}
      >
        Habits
      </Link>
      <Link 
        as={RouterLink} 
        to="/analytics" 
        color="white"
        position="relative"
        _hover={{ 
          color: 'yellow.200',
          _after: {
            transform: 'scaleX(1)',
          }
        }}
        _after={{
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '2px',
          bottom: '-2px',
          left: '0',
          backgroundColor: 'yellow.200',
          transform: 'scaleX(0)',
          transition: 'transform 0.3s ease'
        }}
      >
        Analytics
      </Link>
      <Link 
        as={RouterLink} 
        to="/settings" 
        color="white"
        position="relative"
        _hover={{ 
          color: 'yellow.200',
          _after: {
            transform: 'scaleX(1)',
          }
        }}
        _after={{
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '2px',
          bottom: '-2px',
          left: '0',
          backgroundColor: 'yellow.200',
          transform: 'scaleX(0)',
          transition: 'transform 0.3s ease'
        }}
      >
        Settings
      </Link>
    </>
  );

  return (
    <Box
      as="nav"
      sx={navbarStyle}
    //   className={isScrolled ? 'scrolled' : ''}
    //   backdropFilter={isScrolled ? 'blur(10px)' : 'none'}
    //   boxShadow={isScrolled ? 'lg' : 'none'}
    //   animation={`${fadeInUp} 0.4s ease-out`}
      width="100%"
    >
      <Container width="100%" maxW="1200px" marginTop="0">
        <Flex height="100%" align="center" justify="space-between">
          {/* Logo and Tagline */}
          <Stack spacing={0}>
            <Link 
              as={RouterLink} 
              to="/" 
              fontSize={{ base: 'xl', md: '2xl' }} 
              fontWeight="bold" 
              color="white"
              _hover={{ textDecoration: 'none' }}
              mb={1}
            >
              HealthyHabits
            </Link>
            <Text 
              color="yellow.200" 
              fontSize={{ base: 'xs', md: 'sm' }}
              display={isScrolled ? 'none' : 'block'}
              mt={0}
            >
              {currentUser 
                ? "Transform Your Life, One Habit at a Time"
                : "Make Your Life Bad-Habit Free • Start Your Journey Today"}
            </Text>
          </Stack>

          {/* Desktop Navigation */}
          <Flex 
            display={{ base: 'none', md: 'flex' }} 
            gap={8} 
            align="flex-end"
            height="100%"
            pb={3}
            mt={-2}
          >
            {currentUser ? (
              <>
                <NavLinks />
                <Button 
                  variant="outline" 
                  colorScheme="yellow"
                  size="sm"
                  onClick={async () => {
                    try {
                      await logout();
                      navigate('/');
                    } catch (error) {
                      console.error('Logout failed:', error);
                    }
                  }}
                >
                  Log Out
                </Button>
              </>
            ) : (
              <Stack direction="row" spacing={4}>
                <Button
                  as={RouterLink}
                  to="/login"
                  variant="ghost"
                  colorScheme="yellow"
                  size="sm"
                  _hover={{ bg: 'whiteAlpha.200' }}
                >
                  Sign In
                </Button>
                <Button
                  as={RouterLink}
                  to="/register"
                  colorScheme="yellow"
                  size="sm"
                >
                  Get Started
                </Button>
              </Stack>
            )}
          </Flex>

          {/* Mobile Navigation Button */}
          <IconButton
            aria-label="Open menu"
            icon={<HamburgerIcon />}
            display={{ base: 'flex', md: 'none' }}
            variant="ghost"
            color="white"
            _hover={{ bg: 'whiteAlpha.200' }}
            onClick={mobileNav.onOpen}
          />
        </Flex>
      </Container>

      {/* Mobile Navigation Menu */}
      <Box
        display={{ base: mobileNav.isOpen ? 'block' : 'none', md: 'none' }}
        position="fixed"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="purple.500"
        p={4}
        zIndex={20}
      >
        <Flex justify="flex-end">
          <CloseButton color="white" onClick={mobileNav.onClose} />
        </Flex>
        <VStack spacing={8} mt={8} align="center">
          {currentUser ? (
            <>
              <NavLinks />
              <Button 
                variant="outline" 
                colorScheme="yellow"
                onClick={async () => {
                  try {
                    await logout();
                    navigate('/');
                    mobileNav.onClose();
                  } catch (error) {
                    console.error('Logout failed:', error);
                  }
                }}
              >
                Log Out
              </Button>
            </>
          ) : (
            <>
              <Button
                as={RouterLink}
                to="/login"
                variant="ghost"
                colorScheme="yellow"
                w="full"
                onClick={mobileNav.onClose}
              >
                Sign In
              </Button>
              <Button
                as={RouterLink}
                to="/register"
                colorScheme="yellow"
                w="full"
                onClick={mobileNav.onClose}
              >
                Get Started
              </Button>
            </>
          )}
        </VStack>
      </Box>
    </Box>
  );
};

export default Navbar;
