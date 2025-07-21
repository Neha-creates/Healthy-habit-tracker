import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Spinner,
  Center,
  Button,
} from '@chakra-ui/react';
import { useHabits } from '../context/HabitContext';
import HabitCard from '../components/HabitCard';

const HabitManager = () => {
  const { habits, loading } = useHabits();

  return (
    <Box pt="80px" px={6} pb={12} minH="100vh" bg="gray.900" color="white">
      <Heading mb={6} textAlign="center">
        Manage Your Habits
      </Heading>

      {/* Optional Add Button */}
      <Center mb={4}>
        <Button colorScheme="purple" size="md">
          + Add New Habit
        </Button>
      </Center>

      {/* Loading State */}
      {loading ? (
        <Center>
          <Spinner size="xl" color="purple.400" />
        </Center>
      ) : habits.length === 0 ? (
        // Empty State
        <Center mt={12}>
          <Text fontSize="lg" color="gray.400">
            No habits added yet. Click "Add New Habit" to get started!
          </Text>
        </Center>
      ) : (
        // Habits Grid
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {habits.map((habit) => (
            <HabitCard key={habit.id} {...habit} />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default HabitManager;
