import { Box, Container, Stack, Text, ButtonGroup, IconButton, Flex } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box 
      as="footer" 
      bg="darkBg.800" 
      borderTop="1px solid"
      borderColor="darkBg.600"
      py={{ base: 4, md: 6 }} 
      mt="auto"
      width="100%"
      position="relative"
      left={0}
      right={0}
    >
      <Container maxW="1200px" width="100%">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          gap={4}
        >
          <Stack direction="row" spacing={{ base: 2, md: 8 }}>
            <Text color="gray.400" _hover={{ color: 'white' }} cursor="pointer">About</Text>
            <Text color="gray.400" _hover={{ color: 'white' }} cursor="pointer">Privacy</Text>
            <Text color="gray.400" _hover={{ color: 'white' }} cursor="pointer">Terms</Text>
            <Text color="gray.400" _hover={{ color: 'white' }} cursor="pointer">Contact</Text>
          </Stack>

          <Text textAlign={{ base: 'center', md: 'left' }} color="gray.400">
            © 2025 HealthyHabits. All rights reserved
          </Text>

          <ButtonGroup variant="ghost">
            <IconButton
              as="a"
              href="https://github.com/Neha-creates/Healthy-habit-tracker"
              aria-label="GitHub"
              icon={<FaGithub fontSize="20px" />}
              color="gray.400"
              _hover={{ color: 'white', bg: 'whiteAlpha.100' }}
            />
            <IconButton
              as="a"
              href="https://www.linkedin.com/in/n5h1-sh1rm1/"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="20px" />}
            />
            <IconButton
              as="a"
              href="https://x.com/i/flow/login?lang=en"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="20px" />}
            />
          </ButtonGroup>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
