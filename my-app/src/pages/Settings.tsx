import { Box, Heading, Stack, Switch, FormControl, FormLabel } from '@chakra-ui/react';

const Settings = () => {
  return (
    <Box p={8}>
      <Heading mb={6}>Settings</Heading>
      <Stack spacing={4} maxW="600px">
        <FormControl display="flex" alignItems="center">
          <FormLabel mb="0">
            Enable Notifications
          </FormLabel>
          <Switch colorScheme="purple" />
        </FormControl>
        <FormControl display="flex" alignItems="center">
          <FormLabel mb="0">
            Dark Mode
          </FormLabel>
          <Switch colorScheme="purple" />
        </FormControl>
        <FormControl display="flex" alignItems="center">
          <FormLabel mb="0">
            Weekly Progress Report
          </FormLabel>
          <Switch colorScheme="purple" />
        </FormControl>
      </Stack>
    </Box>
  );
};

export default Settings;
