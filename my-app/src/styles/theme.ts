import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  space: {
    page: '6rem',
    section: '4rem',
    element: '2rem',
  },
  colors: {
    brand: {
      50: '#f5e9ff',
      100: '#dbc1ff',
      200: '#c199ff',
      300: '#a770ff',
      400: '#8d48ff',
      500: '#742fff',
      600: '#5a24cc',
      700: '#411a99',
      800: '#281166',
      900: '#100733',
    },
    darkBg: {
      900: '#0a0b0e',
      800: '#16181d',
      700: '#1c1f26',
      600: '#252832',
    },
    accent: {
      blue: '#60a5fa',
      purple: '#a78bfa',
      pink: '#f472b6',
    },
  },
  styles: {
    global: {
      'body, html': {
        bg: 'darkBg.900',
        color: 'whiteAlpha.900',
        margin: 0,
        padding: 0,
        minHeight: '100%',
      },
      body: {
        backgroundImage: 
          'radial-gradient(at 0% 0%, rgba(124, 58, 237, 0.25) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(245, 158, 11, 0.15) 0px, transparent 50%)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      },
      // Add consistent spacing for common elements
      'main': {
        pt: { base: '70px', md: '80px' }, // Extra padding to account for fixed navbar
        pb: { base: 6, md: 8, lg: 12 },
        px: { base: 4, md: 6, lg: 8 },
      },
      'section': {
        mb: { base: 8, md: 12, lg: 16 },
      },
      '.container': {
        maxW: 'container.xl',
        px: { base: 4, md: 6 },
        mx: 'auto',
      },
      // Add spacing between stacked elements
      'h1, h2, h3, h4, h5, h6': {
        mb: 4,
        mt: 8,
      },
      'p': {
        mb: 4,
        lineHeight: 'tall',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        borderRadius: 'lg',
      },
      variants: {
        solid: {
          bg: 'accent.purple',
          color: 'white',
          _hover: {
            bg: 'brand.400',
            transform: 'translateY(-2px)',
            boxShadow: '0 0 20px rgba(167, 139, 250, 0.4)',
          },
          transition: 'all 0.2s',
        },
        outline: {
          borderColor: 'accent.purple',
          color: 'accent.purple',
          _hover: {
            bg: 'whiteAlpha.100',
            transform: 'translateY(-2px)',
            boxShadow: '0 0 20px rgba(167, 139, 250, 0.2)',
          },
        },
        ghost: {
          color: 'whiteAlpha.900',
          _hover: {
            bg: 'whiteAlpha.100',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          bg: 'darkBg.800',
          borderRadius: 'xl',
          borderWidth: '1px',
          borderColor: 'darkBg.600',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          transition: 'all 0.3s',
          p: { base: 6, md: 8 },
          mb: { base: 6, md: 8 },
          _hover: {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
            borderColor: 'accent.purple',
          },
        },
      },
    },
    Container: {
      baseStyle: {
        maxW: 'container.xl',
        px: { base: 4, md: 6, lg: 8 },
        py: { base: 6, md: 8, lg: 12 },
      },
    },
    Modal: {
      baseStyle: {
        dialog: {
          bg: 'darkBg.800',
          borderColor: 'darkBg.600',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        },
      },
    },
  },
  layerStyles: {
    gradientBg: {
      bg: 'darkBg.900',
      backgroundImage: 
        'radial-gradient(at 100% 0%, rgba(167, 139, 250, 0.15) 0px, transparent 50%),radial-gradient(at 0% 100%, rgba(96, 165, 250, 0.15) 0px, transparent 50%)',
    },
    card: {
      bg: 'darkBg.800',
      borderRadius: 'xl',
      borderWidth: '1px',
      borderColor: 'darkBg.600',
      transition: 'all 0.3s',
    },
    navbar: {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      height: { base: '60px', md: '70px' },
      zIndex: 1000,
      transition: 'all 0.3s ease',
      '&.scrolled': {
        bg: 'darkBg.800',
        borderBottom: '1px solid',
        borderColor: 'darkBg.600',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        height: { base: '50px', md: '60px' },
      }
    },
  },
});

export default theme;
